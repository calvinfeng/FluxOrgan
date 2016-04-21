var Dispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store;

var KeyStore = new Store(Dispatcher);
var _keys = [];

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "add":
    KeyStore._addKey(payload.key);
    break;

    case "remove":
    KeyStore._removeKey(payload.key);
    break;

    case "group update":
    KeyStore._groupUpdate(payload.keys);
    break;
  }
};

KeyStore.keys = function() {
  return _keys.slice();
};

KeyStore._addKey = function(key) {
  _keys.push(key);
  KeyStore.__emitChange();
};

KeyStore._removeKey = function(key) {
  while (_keys.indexOf(key) > -1) {
    for (var i = 0; i < _keys.length; i++) {
      if (_keys[i] === key) {
        _keys.splice(i, 1);
        break;
      }
    }
  }
  KeyStore.__emitChange();
};

KeyStore._groupUpdate = function(keys) {
  _keys = keys.slice();
  KeyStore.__emitChange();
};

module.exports = KeyStore;
