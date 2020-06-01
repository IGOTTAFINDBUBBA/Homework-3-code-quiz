
var questions = [{

    questions1: "Question 1",
    choices: ["answer 1", "answer 2", "answer 3"],
    correctAnswer: 0
},
{
    questions2: "question 2",
    choices: ["answer 1", "answer 2", "answer3"],
    correctAnswer: 1
}
]
count = 0
window.onload = function (questions1) {
    function questionOne(){
    document.getElementById("answer 1").addEventListener('click', function () {
        document.getElementById("answer 1").innerHTML = "correct answer"
    })

    document.getElementById("answer 2").addEventListener('click', function () {
        document.getElementById("answer 2").innerHTML = "wrong answer"
    })
    document.getElementById("answer 3").addEventListener('click', function () {
        document.getElementById("answer 3").innerHTML = "wrong answer"
    })}
function questionTwo(questions2){
    document.getElementById("answer 1").addEventListener('click', function () {
        document.getElementById("answer 1").innerHTML = "wrong answer"
    })

    document.getElementById("answer 2").addEventListener('click', function () {
        document.getElementById("answer 2").innerHTML = "correct answer"
    })
    document.getElementById("answer 3").addEventListener('click', function () {
        document.getElementById("answer 3").innerHTML = "wrong answer" 

    })

}
}

var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration;
    }
}, 1000);


window.onload = function () {
var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
startTimer(fiveMinutes, display);
};







