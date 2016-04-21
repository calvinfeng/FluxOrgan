var React = require('react');
var OrganKey = require('./organ_key');
var Recorder = require('./recorder');
var Organ = React.createClass({
  render: function() {
    return (
      <div>
        <OrganKey noteName="C4"/>
        <OrganKey noteName="C#4"/>
        <OrganKey noteName="D4"/>
        <OrganKey noteName="Eb4"/>
        <OrganKey noteName="E4"/>
        <OrganKey noteName="F4"/>
        <OrganKey noteName="F#4"/>
        <OrganKey noteName="G4"/>
        <OrganKey noteName="Ab4"/>
        <OrganKey noteName="A4"/>
        <OrganKey noteName="Bb4"/>
        <OrganKey noteName="B4"/>
        <OrganKey noteName="C5"/>
        <Recorder/>
      </div>
    );
  }
});

module.exports = Organ;
