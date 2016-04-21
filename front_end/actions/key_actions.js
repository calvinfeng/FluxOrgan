var Dispatcher = require("../dispatcher/dispatcher.js");

var KeyActions = {

  keyPressed: function(key) {
    Dispatcher.dispatch({
      actionType: "add",
      key: key
    });
  },

  keyReleased: function(key) {
    Dispatcher.dispatch({
      actionType: "remove",
      key: key
    });
  }

};

module.exports = KeyActions;
