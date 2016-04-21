var KeyActions = require('../actions/key_actions');

function Track(attr) {
  this.name = attr.name || "";
  this.roll = attr.roll || [];
}

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function(notes) {
  this.roll.push({
    notes: notes,
    timeSlice: (new Date().getTime()) - this.startTime
  });
  console.log(this.roll);
};

Track.prototype.isBlank = function() {
  return this.roll.length === 0;
};

Track.prototype.completeRecording = function() {
  this.addNotes([]);
};

Track.prototype.play = function() {
  if (this.interval) { return; }

  var playbackStartTime = Date.now();
  var currentNote = 0;
  var roll = this.roll;

  this.interval = setInterval(function() {

    if (currentNote === roll.length) {
      clearInterval(this.interval);
      delete this.interval;

    } else {
      var delta = Date.now() - playbackStartTime;
      if (delta >= roll[currentNote].timeSlice) {
        var notes = roll[currentNote].notes || [];
        KeyActions.groupUpdate(notes);
        currentNote ++;
      }
    }
  }.bind(this), 1);
};

module.exports = Track;
