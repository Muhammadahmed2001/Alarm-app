const staticDevCoffee = "AK-Reminder"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/assets/icon-72x72.png",
  "/assets/icon-96x96.png",
  "/assets/icon-128x128.png",
  "/assets/icon-144x144.png",
  "/assets/icon-152x152.png",
  "/assets/icon-192x192.png",
  "/assets/icon-384x384.png",
  "/assets/icon-512x512.png",
  "/img/58e7f43ebac0854442ca34dad8bc8561.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})