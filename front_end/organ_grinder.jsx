
var KeyListener = require("./util/key_listener.js");
KeyListener.keyBinding();

var React = require('react'),
    ReactDOM = require('react-dom');

var Organ = require("./components/organ");

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Organ/>, document.getElementById("content")
  );
});
