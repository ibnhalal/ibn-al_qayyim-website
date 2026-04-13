const cacheName = 'ibn-qayyim-v1';
const assets = [
  '/ibn-al_qayyim-website/',
  '/ibn-al_qayyim-website/index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
