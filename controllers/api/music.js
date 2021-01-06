// music
// const router = require('express').Router();

var musicURL = 'https://opentdb.com/api.php?amount=20&category=12';

$.ajax({
  url: musicURL,
  method: 'GET'
});