const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
// const button = $('.btn');
const scoreElem = document.getElementById('score');
// const score = 0;
const selected = $('input[type="radio"]:checked').val();
const count = 0;

scoreElem.innerHTML = localStorage.getItem('score');

var celebertiesURL = 'https://opentdb.com/api.php?amount=10&category=26';

function nextQuestion(res, count) {
    if (res.results[0].type === 'multiple') {
        var questionArray = [];
        questionArray.push(res.results[count].correct_answer);
        questionArray.push(res.results[count].incorrect_answers[0]);
        questionArray.push(res.results[count].incorrect_answers[1]);
        questionArray.push(res.results[count].incorrect_answers[2]);

        // console.log(questionArray);

        question.innerHTML = res.results[count].question;
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
    }
}

// $.ajax({
//     url: celebertiesURL,
//     method: 'GET',
// }).then((res) => {
//     console.log(res);
//     if (res.results[0].type === 'multiple') {
//         for (i = 0; i < res.results.length; i++) {
//             var questionArray = [];
//             questionArray.push(res.results[i].correct_answer);
//             questionArray.push(res.results[i].incorrect_answers[0]);
//             questionArray.push(res.results[i].incorrect_answers[1]);
//             questionArray.push(res.results[i].incorrect_answers[2]);

//             console.log(questionArray);

//             question.innerHTML = res.results[i].question;
//             answer1.innerHTML =
//                 questionArray[Math.floor(Math.random() * questionArray.length)];
//             questionArray = questionArray.filter(
//                 (e) => e !== answer1.innerText
//             );
//             console.log(questionArray);
//             answer2.innerHTML =
//                 questionArray[Math.floor(Math.random() * questionArray.length)];
//             questionArray = questionArray.filter(
//                 (e) => e !== answer2.innerText
//             );
//             console.log(questionArray);
//             answer3.innerHTML =
//                 questionArray[Math.floor(Math.random() * questionArray.length)];
//             questionArray = questionArray.filter(
//                 (e) => e !== answer3.innerText
//             );
//             console.log(questionArray);
//             answer4.innerHTML =
//                 questionArray[Math.floor(Math.random() * questionArray.length)];
//         }
//     }

//     const correctAnswer = res.results[0].correct_answer;
//     console.log('Correct Answer: ' + correctAnswer);

//     selectedAnswer = button.click((e) => {
//         e.preventDefault();
//         console.log('Selected Answer: ' + e.target.text());
//     });

//     if (button.text() === correctAnswer) {
//         return score + 1;
//     }
// });

// console.log('score: ' + score);

// localStorage.setItem('score', score);

function call() {
    $.ajax({
        url: celebertiesURL,
        method: 'GET',
    }).then((res) => {
        console.log(res);
        nextQuestion(res, count);
        console.log(selected);
    });
}

call();

$('#submit').click((res) => {
    call();
    count + 1;
    nextQuestion(res, count);
});
