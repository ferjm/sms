'use strict';

importScripts('/sms/app/js/protocols/protocol_helper.js');

function UpdateAPI() {
  var script = '/sms/app/js/update/worker_api.js';
  var worker = ('SmartWorker' in this) ? new SmartWorker(script)
                                       : new Worker(script);
  this.protocol = new IPDLProtocol('update', worker);
}

UpdateAPI.prototype.checkForUpdate = function() {
  return this.protocol.sendCheckForUpdate();
};

UpdateAPI.prototype.applyUpdate = function(updateUrl) {
  return this.protocol.sendApplyUpdate(updateUrl);
};

