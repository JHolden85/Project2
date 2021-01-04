var musicURL = 'https://opentdb.com/api.php?amount=20&category=12';

const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

$.ajax({
    url: musicURL,
    method: 'GET',
}).then((res) => {
    console.log(res);
    for (i = 0; i < res.results.length; i++) {
        question.innerHTML = res.results[i].question;
        answer1.innerHTML = res.results[i].correct_answer;
        answer2.innerHTML = res.results[i].incorrect_answers[0];
        answer3.innerHTML = res.results[i].incorrect_answers[1];
        answer4.innerHTML = res.results[i].incorrect_answers[2];
    }
});
