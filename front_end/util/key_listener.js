var KeyStore = require("../stores/key_store.js");
var KeyActions = require("../actions/key_actions.js");

var keyMap = {
  81: 'C4',
  50: 'C#4',
  87: 'D4',
  51: 'Eb4',
  69: 'E4',
  82: 'F4',
  53: 'F#4',
  84: 'G4',
  54: 'Ab4',
  89: 'A4',
  55: 'Bb4',
  85: 'B4',
  73: 'C5'
};

var KeyListener = {

  keyBinding: function() {
    $(document).on("keydown", function(event) {
      var keyCode = event["keyCode"];
      KeyActions.keyPressed(keyMap[keyCode]);
    });
    $(document).on("keyup", function(event) {
      var keyCode = event["keyCode"];
      KeyActions.keyReleased(keyMap[keyCode]);
    });
  }

};

module.exports = KeyListener;
