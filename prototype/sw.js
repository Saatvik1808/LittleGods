const CACHE = "little-gods-v7";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  const isHTML = req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    // network-first for the page: fresh content when online, cache when offline
    e.respondWith(
      fetch(req).then(net => {
        const copy = net.clone();
        caches.open(CACHE).then(c => c.put("./index.html", copy));
        return net;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // cache-first for assets (icons, three.js, manifest)
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(net => {
      const copy = net.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return net;
    }))
  );
});
