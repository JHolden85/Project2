// sports
const router = require('express').Router();

var sportsURL = 'https://opentdb.com/api.php?amount=20&category=21';

    $.ajax({
      url: sportsURL,
      method: 'GET'
    });