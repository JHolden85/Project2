// movies
var moviesURL = "https://opentdb.com/api.php?amount=20&category=11";

$.ajax({
  url: moviesURL,
  method: "GET"
});