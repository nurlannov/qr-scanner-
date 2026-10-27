self.addEventListener('install', (e) => {
  console.log('Service Worker: Установлен');
});

self.addEventListener('fetch', (e) => {
  // Просто пропускаем запросы, этого достаточно для установки
  e.respondWith(fetch(e.request));
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 3bbfa5b411505194316747e92ea9bc5803d84d89
