'use strict';

var kCacheFiles = [
  // html
  '/sms/app/index.html',
  '/sms/app/cache.html',

  // style
  '/sms/app/style/sms.css',

  // config
  '/sms/app/config.json',

  // scripts
  '/sms/app/js/utils.js',
  '/sms/app/js/cache.js',
  '/sms/app/js/string-polyfill.js',
  '/sms/app/js/sms_sw.js',

  // updates
  '/sms/app/js/update/api.js',
  '/sms/app/js/update/worker_api.js',
  '/sms/app/js/update/utils.js',
  '/sms/app/js/update/config.js',
  '/sms/app/js/update/format/unified_diff.js',

  // service worker helpers
  '/sms/app/js/service/api.js',
  '/sms/app/js/service/worker_api.js',
  '/sms/app/js/service/utils.js',
  '/sms/app/js/service/cache-polyfill.js',

  // Smart Workers
  '/sms/app/js/smart_worker/api.js',
  '/sms/app/js/smart_worker/worker_sandbox.js',
  '/sms/app/js/smart_worker/worker_sandbox_scope.js',
  '/sms/app/js/smart_worker/smartworker.js',

  // protocols
  '/sms/app/js/protocols/ipdl.js',
  '/sms/app/js/protocols/ipdl_parser.js',
  '/sms/app/js/protocols/bridge.js',
  '/sms/app/js/protocols/protocol.js',
  '/sms/app/js/protocols/store.js',
  '/sms/app/js/protocols/message.js',
  '/sms/app/js/protocols/utils/uuid.js',
  '/sms/app/js/protocols/protocol_helper.js',
  '/sms/app/js/protocols/ipdl/PUpdate.ipdl',
  '/sms/app/js/protocols/ipdl/PService.ipdl',

  '/sms/patches/nightly_0.0.1...nightly_master',
  '/sms/patches/nightly_0.0.1.1...nightly_master'
];
