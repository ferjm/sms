'use strict';

importScripts('/sms/app/js/service/utils.js');
importScripts('/sms/app/js/service/worker_api.js');
importScripts('/sms/app/js/smart_worker/smartworker.js');

var worker = new ServiceWorker();

// lifecycle events
worker.oninstall = function(e) {
  importScripts('/sms/app/service_worker_files.js');

  e.waitUntil(
    caches.open('sms-cache-v4').then(function(cache) {
      return cache.addAll(kCacheFiles);
    })
  );
};


// network events
worker.onfetch = function(e) {
  debug(e.type + ': ' + e.request.url);

  if (SmartWorkers.handle(e)) {
    debug('Smartworker handle');
    return;
  }

  e.respondWith(
    caches.match(e.request.url).then(function(response) {
      if (!response) {
        debug('going do to a fetch for for ' + e.request.url + ', might go bad\n');
      }
      return response || fetch(e.request);
    })
  )
};
