var toneMap = {
  "C4": 261.63,
  "C#4": 277.18,
  "Db4": 277.18,
  "D4": 293.66,
  "D#4": 311.13,
  "Eb4": 311.13,
  "E4": 329.63,
  "F4": 349.23,
  "F#4": 369.99,
  "Gb4": 369.99,
  "G4": 392,
  "G#4": 415.30,
  "Ab4": 415.30,
  "A4": 440,
  "A#4": 466.16,
  "Bb4": 466.16,
  "B4": 493.88,
  "C5": 523.25
};

var Tones = {
  getFrequency: function(noteName) {
    return toneMap[noteName];
  }
};

module.exports = Tones;
