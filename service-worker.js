const cacheName = 'safety-sarabun-v1';
const staticAssets = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icons8-document-pulsar-gradient-16.png',
    './icons8-document-pulsar-gradient-32.png',
    './icons8-document-pulsar-gradient-96.png',
    './icons8-document-pulsar-gradient-57.png',
    './icons8-document-pulsar-gradient-60.png',
    './icons8-document-pulsar-gradient-72.png',
    './icons8-document-pulsar-gradient-76.png',
    // เพิ่ม assets อื่นๆ ที่คุณต้องการแคช เช่น CSS, JavaScript
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => keys.filter(key => key !== cacheName))
            .then(keysToDelete => Promise.all(keysToDelete.map(keyToDelete => caches.delete(keyToDelete))))
    );
});
