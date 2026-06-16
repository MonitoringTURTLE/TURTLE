// Service Worker - Monitor Kekeruhan Air Toren
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification(data.title || 'Air Toren', {
    body: data.body || 'Ada peringatan kekeruhan air.',
    icon: data.icon || '',
    tag: 'turbidity-alert'
  });
});
