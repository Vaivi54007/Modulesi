/* Service worker : l'app fonctionne hors ligne.
   Quand tu modifies un fichier, change VERSION pour forcer la mise à jour. */
var VERSION = "module-sed-v1.0.0";
var FILES = [
  "./", "./index.html", "./app.js", "./content1.js", "./content2.js",
  "./manifest.webmanifest",
  "./apple-touch-icon.png", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  /* Réseau d'abord (pour recevoir les mises à jour), cache en secours hors ligne */
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match("./index.html"); });
    })
  );
});
