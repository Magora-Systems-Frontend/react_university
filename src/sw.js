workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(new RegExp('http://127.0.0.1:3001'), new workbox.strategies.StaleWhileRevalidate());

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
