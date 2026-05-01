/**
 * Service Worker for petekaik.github.io
 * 
 * Only caches the root SPA (GitHub repos viewer). All subdirectories
 * bypass the navigation route and are served as static files.
 */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "./precache-manifest.e52bb5378e0e503f22053c2fa5734824.js"
);

workbox.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Only intercept navigation requests for the root — let subdirectories pass through
workbox.routing.registerNavigationRoute("./index.html", {
  blacklist: [
    /^\/_/,                          // skip internal paths
    /\/[^\/]+\.[^\/]+$/,             // skip file requests (has extension)
    /^\/.+\//,                       // skip all subdirectory paths (e.g. /viikkoraha/)
  ],
});
