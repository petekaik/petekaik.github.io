// Viikkoraha PWA Service Worker
// Cache strategy: Stale-While-Revalidate, with periodic-update polling
// Polls index.html every 15 min — if new version detected, notifies all clients

const APP_VERSION = 'viikkoraha-v5';
const STATIC_CACHE = `${APP_VERSION}-static`;
const API_CACHE = `${APP_VERSION}-api`;
const POLL_INTERVAL_MIN = 15;

let currentEtag = null;

const STATIC_ASSETS = ['/viikkoraha/', '/viikkoraha/index.html', '/viikkoraha/site.webmanifest'];

// ── Periodic update check ──

async function checkForUpdate() {
  try {
    const response = await fetch('/viikkoraha/index.html', { cache: 'no-cache' });
    if (!response.ok) return;
    const newEtag = response.headers.get('etag') || response.headers.get('last-modified');
    if (!newEtag) return;

    if (currentEtag && newEtag !== currentEtag) {
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.postMessage({ type: 'UPDATE_AVAILABLE' });
      }
    }
    currentEtag = newEtag;
  } catch {
    // Offline — ignore
  }
}

// ── Lifecycle ──

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Start polling
      await checkForUpdate();
      setInterval(checkForUpdate, POLL_INTERVAL_MIN * 60 * 1000);

      // Clean old caches
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== STATIC_CACHE && k !== API_CACHE).map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// ── Message handler ──

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ── Fetch strategies ──

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  if (
    url.hostname === 'sheets.googleapis.com' ||
    url.hostname === 'www.googleapis.com'
  ) {
    event.respondWith(networkFirst(event.request, API_CACHE));
    return;
  }

  if (
    url.pathname.match(/\.(js|css|png|svg|ico|json|woff2|webmanifest)$/) ||
    url.pathname === '/viikkoraha/' ||
    url.pathname === '/viikkoraha'
  ) {
    event.respondWith(staleWhileRevalidate(event.request, STATIC_CACHE));
    return;
  }

  if (
    url.hostname === 'accounts.google.com' ||
    url.hostname === 'apis.google.com'
  ) {
    return;
  }

  event.respondWith(networkFirst(event.request, STATIC_CACHE));
});

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response(JSON.stringify({ error: 'Olet offline-tilassa' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  const fetchPromise = fetch(request, { cache: 'no-cache' }).then((response) => {
    if (response.ok) {
      caches.open(cacheName).then((cache) => cache.put(request, response.clone()));
    }
    return response;
  }).catch(() => null);

  return cached || fetchPromise;
}
