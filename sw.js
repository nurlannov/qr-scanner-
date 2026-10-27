self.addEventListener('install', (e) => {
  console.log('Service Worker: Установлен');
});

self.addEventListener('fetch', (e) => {
  // Просто пропускаем запросы, этого достаточно для установки
  e.respondWith(fetch(e.request));
});
