// Query the DOM

const timerOutput = $("#timer-output");
const questionOutput = $("#question-output");
const answerOutputDiv = $(".answer-output-div");
const answerBtn = $("answer-btn");
const resultOutput = $("#result-output");
const highScoreDiv = $("#high-score-div");

let sec = 20;
let score;

let questions = [
    {
        question: "what is 2+2?",
        answers: [
            {answer: "22", correct: false},
            {answer: "4", correct: true},
            {answer: "2", correct: false},
            {answer: "8", correct: false}
        ]
    },
    {
        question: "what is 4+4?",
        answers: [
            {answer: "22", correct: false},
            {answer: "4", correct: false},
            {answer: "2", correct: false},
            {answer: "8", correct: true}
        ]
    },
    {
        question: "what is 1+1?",
        answers: [
            {answer: "22", correct: false},
            {answer: "4", correct: false},
            {answer: "2", correct: true},
            {answer: "8", correct: false}
        ]
    }
]



/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(questions);

function populateQuestion(question) {
    questionOutput.empty();
    questionOutput.text(question.question);
}

function populateAnswers(question) {
    answerOutputDiv.empty();
    let answers = question.answers
    answers.forEach(element => {
        let button = $("<a>");
        button.addClass("btn answer-btn");
        button.attr("id", "answer-btn");
        button.attr("correct", element.correct);
        button.text(element.answer);
        answerOutputDiv.append(button);
    });
}

function handleAnswerClick() {
    $(document).on("click", (e) => {
        if (e.target && e.target.id == 'answer-btn') {
            checkCorrect(e.target);
        }
    })
}

function checkCorrect(target) {
    let correct = target.getAttribute("correct");
    if (questions.length > 0 && sec > 0) {
        if (correct === "true") {
            resultOutput.text("Correct!")
            // timedResultOutput();
            // displayInterface();
            setTimeout(function() {
                resultOutput.text("");
                displayInterface();
            }, 1000)
        } else {
            resultOutput.text("Wrong!");
            sec -= 5;
            setTimeout(function() {
                resultOutput.text("");
                displayInterface();
            }, 1000)
        }
    } else if (questions.length == 0){
        endGame();
    }
    }

function selectQuestion() {
    let selectedQuestion = questions.shift();
    return selectedQuestion;
}

function timer() {
    
    function startTimer() {
        let timer = setInterval(() => {
            sec--;
            timerOutput.text("00:"+sec);
            if (sec<1 || questions.length == 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }
    startTimer();
    
}

function displayInterface() {
    let selectedQuestion = selectQuestion();
    populateQuestion(selectedQuestion);
    populateAnswers(selectedQuestion);
}

function startQuiz() {
    displayInterface();
    handleAnswerClick();
    timer();
}

function displayHighScore() {
    
    let user = localStorage.getItem("user");
    let score = localStorage.getItem("score");
    console.log(user, score);
    // let element = $("<p>");
    // element.addClass("high-score-output");
    // element.text(`${user}: ${score}`);
    // highScoreDiv.append(element);
}

function endGame() {
    console.log("end game");
    // answerOutputDiv.empty();
    // questionOutput.empty();
    // timerOutput.empty();
    $(".container").addClass('hide');
    score = sec;
    // let userName = prompt("please enter a username");
    localStorage.setItem("score", score);
    localStorage.setItem("user", "luc");
    displayHighScore();
}

startQuiz();
