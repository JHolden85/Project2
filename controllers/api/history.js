// history
const router = require('express').Router();

var historyURL = 'https://opentdb.com/api.php?amount=20&category=23';

$.ajax({
  url: historyURL,
  method: 'GET'
});