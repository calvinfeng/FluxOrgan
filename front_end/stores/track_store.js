var Dispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store;

var TrackStore = new Store(Dispatcher);
var _tracks = [];

TrackStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "add":
    TrackStore.addTrack(payload.track);
    break;

    case "remove":
    TrackStore.removeTrack(payload.track);
    break;
  }
};

TrackStore.fetch = function() {

};

module.exports = TrackStore;
