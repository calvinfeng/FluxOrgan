var React = require('react');
var KeyStore = require("../stores/key_store");


var Track = require('../util/track.js');

var Recorder = React.createClass({
  getInitialState: function() {
    return {recording: false, track: new Track({name: "Record"})};
  },

  isDoneRecording: function() {
    return !this.isTrackNew() && !this.state.recording;
  },

  isRecording: function() {
    return this.state.recording;
  },

  isTrackNew: function() {
    return this.state.track.isBlank();
  },

  playClass: function() {
    return "play-button" + this.isTrackNew() ? "" : " disabled";
  },

  componentDidMount: function() {
    this.listener = KeyStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  __onChange: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.keys());
    }

    if (this.state.track.isPlaying) {
      this.setState({isPlaying: true});
    } else {
      this.setState({isPlaying: false});
    }

  },

  playTrack: function() {
    if(!this.isTrackNew()) {
      this.state.track.play();
    }
  },

  recordingMessage: function() {
    if(this.isRecording()) {
      return "Stop Recording";
    } else if (this.isDoneRecording()) {
      return "Done Recording";
    } else {
      return "Start Recording";
    }
  },

  recordClick: function(event) {
    if(this.state.recording) {
      this.state.track.completeRecording();
      this.setState({recording: false});
    } else {
      this.setState({recording: true});
      this.state.track.startRecording();
    }
  },

  render: function() {
    var hasTrack = this.isTrackNew();
    return (
      <div className="controls">
        <h3>Recorder</h3>
        <button onClick={this.recordClick} className="record-button">
          {this.recordingMessage()}
        </button>
        <button onClick={this.playClick} className={this.playClass()}>
          Play
        </button>
      </div>
    );
  }
});

module.exports = Recorder;
