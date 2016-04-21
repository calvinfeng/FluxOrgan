var React = require("react"),
    KeyActions = require("../actions/key_actions"),
    KeyStore = require("../stores/key_store");

var Note = require("../util/note.js");
var Tones = require("../constants/tones.js");


var OrganKey = React.createClass({

  __onChange: function() {
    if (KeyStore.keys().indexOf(this.props.noteName) > -1)
    {
      this.note.start(1);
      this.secondHarm.start(0.5);
      this.thirdHarm.start(0.6);
      this.fourthHarm.start(0.2);
      this.fifthHarm.start(0.6);
    } else {
      this.note.stop();
      this.secondHarm.stop();
      this.thirdHarm.stop();
      this.fourthHarm.stop();
      this.fifthHarm.stop();
    }
  },

  componentDidMount: function() {
    var noteName = this.props.noteName;
    var freq = Tones.getFrequency(noteName);
    this.note = new Note(freq);
    this.secondHarm = new Note(2*freq);
    this.thirdHarm = new Note(3*freq);
    this.fourthHarm = new Note(4*freq);
    this.fifthHarm = new Note(5*freq);
    this.listener = KeyStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    return (
      <div>{this.props.noteName}</div>
    );
  }

});

module.exports = OrganKey;
