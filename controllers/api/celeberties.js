// celeberties
const router = require('express').Router();

var celebertiesURL = 'https://opentdb.com/api.php?amount=20&category=26';

$.ajax({
  url: celebertiesURL,
  method: 'GET'
});