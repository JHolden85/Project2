const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

var currentCategory = window.location.href;

switch (true) {
    case currentCategory.indexOf('history') !== -1:
        currentCategory = '23';
        break;
    case currentCategory.indexOf('movies') !== -1:
        currentCategory = '11';
        break;
    case currentCategory.indexOf('music') !== -1:
        currentCategory = '12';
        break;
    case currentCategory.indexOf('television') !== -1:
        currentCategory = '14';
        break;
    case currentCategory.indexOf('sports') !== -1:
        currentCategory = '21';
        break;
    case currentCategory.indexOf('celebrities') !== -1:
        currentCategory = '26';
        break;
    default:
        break;
}
// AJAX Call URL
var url = 'https://opentdb.com/api.php?amount=10&category=' + currentCategory;

// Defining Score element and counter
var score = 0;
const scoreElem = document.getElementById('score');

// Var index acts as the index of the array received from the AJAX request
var index = 0;

// Function to populate question and answers into HTML div
function populateQuiz(res, index) {
    if (res.results[index].type === 'multiple') {
        // Compiles all answers both correct/incorrect into array
        var questionArray = [];
        questionArray.push(res.results[index].correct_answer);
        questionArray.push(res.results[index].incorrect_answers[0]);
        questionArray.push(res.results[index].incorrect_answers[1]);
        questionArray.push(res.results[index].incorrect_answers[2]);

        // Populates AJAX question into question element
        question.innerHTML = res.results[index].question;

        //Populates answers from questionArray into answer divs, then removes the last used question to avoid repeats
        answer1.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = questionArray.filter((e) => e !== answer1.innerText);

        answer2.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = questionArray.filter((e) => e !== answer2.innerText);

        answer3.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = questionArray.filter((e) => e !== answer3.innerText);

        answer4.innerHTML =
            questionArray[Math.floor(Math.random() * questionArray.length)];

        // Changes value of radio inputs to match AJAX answers
        $('#a1').attr('value', answer1.innerText);
        $('#a2').attr('value', answer2.innerText);
        $('#a3').attr('value', answer3.innerText);
        $('#a4').attr('value', answer4.innerText);
    } else if (res.results[index].type === 'boolean') {
        return;
    }
}

function validateAnswer(res, index, selected) {
    var correct = res.results[index].correct_answer;
    console.log(correct, selected);
    if (selected === correct) {
        score++;
        scoreElem.innerHTML = 'Your score: ' + score;
        localStorage.setItem('score', score);
        sessionStorage.setItem('score', score);
        $('#localScore').innerHTML = localStorage.getItem('score');
    }
}

$.ajax({
    url: url,
    method: 'GET',
}).then((res) => {
    localStorage.setItem('score', 0);
    console.log(res);

    populateQuiz(res, index);

    $('#submit').click(() => {
        const radio = document.querySelector('input[type="radio"]:checked');
        var selected = radio.value;
        console.log('selected answer: ' + selected);
        validateAnswer(res, index, selected);
        index++;

        if (index > 9) {
            location.replace('/end');
        } else {
            populateQuiz(res, index);
        }
        radio.checked = false;
        console.log(score);
    });
});
