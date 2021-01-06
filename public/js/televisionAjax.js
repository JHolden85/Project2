const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
// const submit = document.getElementsByClassName('btn');

var televisionURL = 'https://opentdb.com/api.php?amount=1&category=14';

$.ajax({
    url: televisionURL,
    method: 'GET',
}).then((res) => {
    console.log(res);
    if (res.results[0].type === 'multiple') {
        for (i = 0; i < res.results.length; i++) {
            var questionArray = [];
            questionArray.push(res.results[i].correct_answer);
            questionArray.push(res.results[i].incorrect_answers[0]);
            questionArray.push(res.results[i].incorrect_answers[1]);
            questionArray.push(res.results[i].incorrect_answers[2]);

            console.log(questionArray);

            question.innerHTML = res.results[i].question;
                questionArray[Math.floor(Math.random() * questionArray.length)];
            answer1.innerHTML =
                questionArray[Math.floor(Math.random() * questionArray.length)];
            questionArray = questionArray.filter(
                (e) => e !== answer1.innerText
            );
            console.log(questionArray);
            answer2.innerHTML =
                questionArray[Math.floor(Math.random() * questionArray.length)];
            questionArray = questionArray.filter(
                (e) => e !== answer2.innerText
            );
            console.log(questionArray);
            answer3.innerHTML =
                questionArray[Math.floor(Math.random() * questionArray.length)];
            questionArray = questionArray.filter(
                (e) => e !== answer3.innerText
            );
            console.log(questionArray);
            answer4.innerHTML =
                questionArray[Math.floor(Math.random() * questionArray.length)];
        }
    }
});