const CACHE_NAME = 'ai4change-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/manifesto.html',
  '/problems.html',
  '/join.html',
  '/contributors.html',
  '/404.html',
  '/blog/',
  '/blog/index.html',
  '/blog/001-why-ai4change.html',
  '/blog/002-first-five-problems.html',
  '/manifest.json',
  '/assets/logo.svg',
  '/assets/favicon.svg',
  '/assets/hero-illustration.svg',
  '/assets/icon-192.svg',
  '/assets/icon-512.svg',
  '/js/analytics.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
