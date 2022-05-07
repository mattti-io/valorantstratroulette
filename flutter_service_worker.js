'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "596dfe5597676dd84eebc13361d07213",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "192acba0a3df92395d5a4eb855d679ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "032a2207afabc9de6dd1142843e484fa",
".git/logs/refs/heads/main": "7541882334823a6ac7abb06699b1294a",
".git/logs/refs/remotes/origin/main": "dc911a7d3a90124357a71e7962630148",
".git/logs/refs/remotes/repo/master": "e86c9dc5045624032cb23582b09a9d33",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/4036c506eee94ec729402ca200ca119f87a674": "4521e6b71de0ad49e3f2322c54ca613a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/ae85661d570430aa1b64fb0f77935e3ec94435": "39f8dac3925a203c67773a6f37b169e3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/fc03427155ccd8b447407fd45e7af5ed7e98a7": "087a5f3944b58616f24583165a46b25f",
".git/objects/2c/5d2cbc78c3da5d891ecb6908e28c3e70778f97": "e0fdb052a37dd034e24b1e9db33794df",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/416abc047579724ab9230653c59dd1f6479e14": "299f9e1b9c8bca7d2cb578ca4bb3cb27",
".git/objects/3b/774f461486d7800258d5e77b1b8242589a4ca6": "3bd590272ff7f79e59d86d730459cebc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/4b0dcac57ee0178a4ca583836cbc6dd99f5da2": "5338bba76e09377a98d0c2e036747b1f",
".git/objects/4b/14010e0bf1ceb26440c963b9b39dc2266191d2": "d8a30eb16f5016777f396575a04db77c",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5f/f46fe8ccff44eec19f0bf5e34fdb5f9ce21765": "bff9a2033ba8d9fd4ede09bd6986c862",
".git/objects/69/d01a2b988fe98ceb5e46ba4978e05f667e53fe": "614bcadafd0ac9655db157e032211e01",
".git/objects/6c/48eb6c2ddabddae16e583686c82dc7c8fcbb73": "9c5edba58e5986a2097611e15ad6bfd6",
".git/objects/6e/bdf8b00938a68acc6394bc33c4c8a3b7e06947": "d98709963a4d0a15ea7623c13f53b7bb",
".git/objects/73/1bd50285b4e637bc6a21e854b5ecfac0931c2b": "1c64a7058b406281b19c2e334c4bca95",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0319a6530c7a3bf27d2a6d456606039bdba7ab": "37e69e6c084d582e09921f399614c432",
".git/objects/7d/bb811fa4a049554818b38589d909d814210bcc": "4b3a2bc9ba7f04dfb296856cd35da428",
".git/objects/80/872d1997dd385e8cc360c9e669e8b2786be8a7": "4f3ddaf3da3dd56da6f65617b799f9c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/295b4b270f7ab59f0978be33dd62f0857b2c34": "5e06f19a06529d56f0ede100e365b16b",
".git/objects/9b/67e3a9ed45de1c8f544f8de8039dcdd0ccf5a1": "b5d645ccbc750cc24d24c4bc891d4083",
".git/objects/9d/f70c95cc19c608781be6bf650b5239961b3867": "630bced0cda2cb14e9752194877c5061",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5a74570cc28da9e3f9b5c3fc72d3a72630a5b8": "95af9fea1cb00a3fa564bff5cf5edb64",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/73968278dfbb675ee611a5b63d7141bb786586": "68b07a20e902757c887dbb7cf7fe8ff7",
".git/objects/b3/f70a14d346533d860e390934440898bd9386a1": "da3aef2b04967c9450ffd0fd740f5c09",
".git/objects/b6/2ce3a01854109eef5bce245865a2f1256ba019": "50e9b9dfbd6629cbc084150b5bb799fd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/98c6d09361864458ba4ffa8048d2699bb72db1": "0747538ffbd26b9af148ee705f86b4c2",
".git/objects/ca/4625850fc0204de8e4ab816497febaed67e4ed": "29cfe75bb5ab5e16d13f2ffc2da2e5b5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/58893774ebea1d97c47c8220502265d6c9bafa": "c5305ee3aa4576b69cfd933a16c641f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/cec9ffe777f633384e681fcb4c6fdebde5f399": "c4706cadb72ef208b83bd931ed7070ea",
".git/objects/f2/a218996a6b4f8189bad93748c82cc874a43c40": "13a11266d46e60bf64a42dc16272ffe0",
".git/objects/f5/beb27c57390511be0372a5f007e88748f3f9ea": "c35d62a9ce2f607b6afe19aee41c27ba",
".git/ORIG_HEAD": "f9db2cea95e927282566f348544f6dbc",
".git/refs/heads/main": "7d73d4105924b7eed5d4fee584c7e4d1",
".git/refs/remotes/origin/main": "7d73d4105924b7eed5d4fee584c7e4d1",
".git/refs/remotes/repo/master": "ed0030eb57034684016b8a31e590f914",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "79faac9a5414432b53c5b5618d135461",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6da2ac32d12a54ad0041022d0cc10051",
"/": "6da2ac32d12a54ad0041022d0cc10051",
"main.dart.js": "80053e9899a8ad08ab7dd6a9e437b2b8",
"manifest.json": "296494fc0fb56b1c7e1618f2ff123daa",
"README.md": "309742b924e06773e90264f9013bcfd8",
"version.json": "5050a22d81dc27d4d0d51decaeeb4072"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
