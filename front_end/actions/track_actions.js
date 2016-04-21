var Dispatcher = require("../dispatcher/dispatcher.js");

var TrackActions = {

  saveTrack: function(track) {
    Dispatcher.dispatch({
      actionType: "add",
      track: track
    });
  }

};

module.exports = TrackActions;
