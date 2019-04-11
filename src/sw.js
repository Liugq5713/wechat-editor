/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

workbox.skipWaiting()
workbox.clientsClaim()
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

self.addEventListener('install', event => {
  const asyncInstall = new Promise(resolve => {
    console.log("Waiting to resolve...")
    setTimeout(resolve, 5000)
  })
  event.waitUntil(asyncInstall)
})

self.addEventListener('activate', event => {
  console.log('activate')
})

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cache'
  })
)
workbox.routing.registerRoute(
  new RegExp('https:.*\.(md|json|ico)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cache'
  })
)