// television
const router = require('express').Router();

var televisionURL = 'https://opentdb.com/api.php?amount=20&category=14';

$.ajax({
  url: televisionURL,
  method: 'GET'
});