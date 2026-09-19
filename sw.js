// Places service worker. CACHE is generated from the app's content hash by build/site.py.
const CACHE = "places-f4e6a8917684";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-32.png", "icon-180.png", "icon-192.png", "icon-512.png", "icon-512-maskable.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("places-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    // the whole app is one page: serve it from cache so it opens instantly and offline
    e.respondWith(caches.match("index.html").then((hit) => hit || fetch(req)).catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
