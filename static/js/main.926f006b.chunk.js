(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7),i=t.n(r),c=(t(14),t(1)),l=t(2),s=t(4),u=t(3),p=t(5),f=(t(16),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={},t}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.repo;return o.a.createElement("section",null,o.a.createElement("div",{className:"repo"},o.a.createElement("p",{className:"reponame"},o.a.createElement("a",{className:"App-link",href:e.html_url},e.name)),o.a.createElement("p",{className:"repodescription"},e.description)))}}]),n}(a.Component)),d=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).state=[],e}return Object(p.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/petekaik/repos").then(function(e){return e.json()}).then(function(n){e.setState(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}},{key:"render",value:function(){var e=this;return 0!==this.state.length?Object.keys(this.state).map(function(n){return e.state[n]}).map(function(e){return o.a.createElement(f,{key:e.id,repo:e})}):o.a.createElement("div",{className:"lds-ripple"},o.a.createElement("div",null),o.a.createElement("div",null))}}]),n}(a.Component),h=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"App-header"},"Pete's Github Repos")),o.a.createElement("main",null,o.a.createElement("div",{className:"App-content"},o.a.createElement(d,null))),o.a.createElement("footer",null,o.a.createElement("div",{className:"App-footer"},o.a.createElement("a",{href:"https://www.linkedin.com/in/petterikaikkonen/",className:"App-link"},"My Linkedin Profile"))))}}]),n}(a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");m?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(n,e)})}}()},8:function(e,n,t){e.exports=t(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.926f006b.chunk.js.map