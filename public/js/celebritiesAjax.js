const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

// AJAX Call URL
var url = 'https://opentdb.com/api.php?amount=10&category=26';

// Placeholder for selected answer
var selected = null;

// Defining Score element and counter
var score = 0;
const scoreElem = document.getElementById('score');
scoreElem.innerHTML = 'Your score: ' + score;

// Var index acts as the index of the array received from the AJAX request
var index = 0;

function populateQuiz(res, index) {
    if (res.results[index].type === 'multiple') {
        var questionArray = [];
        questionArray.push(res.results[index].correct_answer);
        questionArray.push(res.results[index].incorrect_answers[0]);
        questionArray.push(res.results[index].incorrect_answers[1]);
        questionArray.push(res.results[index].incorrect_answers[2]);

        // console.log(questionArray);

        question.innerHTML = res.results[index].question;
        answer1.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = questionArray.filter((e) => e !== answer1.innerText);
        // console.log(questionArray);
        answer2.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = questionArray.filter((e) => e !== answer2.innerText);
        // console.log(questionArray);
        answer3.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = questionArray.filter((e) => e !== answer3.innerText);
        // console.log(questionArray);
        answer4.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
    } else if (res.results[index].type === 'boolean') {
        return;
    }
}

$.ajax({
    url: url,
    method: 'GET',
}).then((res) => {
    console.log(res);

    populateQuiz(res, index);

    $('#submit').click(() => {
        index++;
        populateQuiz(res, index);
    });

    $('input').click(() => {
        const radio = $('input[type="radio"]:checked'.siblings('label').val());
        var selected = radio.val();
        console.log(selected);
        return selected;
    });
    console.log(selected);
    if (selected === res.results[index].correct_answer) {
        return score++;
    }
});
