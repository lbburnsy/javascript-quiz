// Query the DOM

const timerOutput = $("#timer-output");
const questionOutput = $("#question-output");
const answerOutputDiv = $(".answer-output-div");
const answerBtn = $("answer-btn");
const resultOutput = $("#result-output");
const highScoreDiv = $("#high-score-div");
const highScoreLink = $("#high-score-link");


//Initialize variables for timer, score, and counter
let sec = 90;
let score;
let questionCounter = 10;

// Counts down the question to decide when to kill app

function countQuestion() {
    questionCounter--;
    console.log(questionCounter);
}

// Array of question objects

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

// Populates the question output

function populateQuestion(question) {
    questionOutput.empty();
    questionOutput.text(question.question);
}

// Populates the answer options

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

// Handles the click on the answer elements

function handleAnswerClick() {
    $(document).on("click", (e) => {
        if (e.target && e.target.id == 'answer-btn') {
            checkCorrect(e.target);
        }
    })
}

// Checks the correctness 

function checkCorrect(target) {
    let correct = target.getAttribute("correct");
    if (questionCounter > 0 && sec > 0) {
        if (correct === "true") {
            countQuestion();
            resultOutput.text("Correct!");
            // timedResultOutput();
            // displayInterface();
            setTimeout(function() {
                resultOutput.text("");
                displayInterface();
            }, 1000)
        } else {
            countQuestion();
            resultOutput.text("Wrong!");
            sec -= 10;
            setTimeout(function() {
                resultOutput.text("");
                displayInterface();
            }, 1000)
        }
    } else if (questions.length < 0){
        endGame();
    }
    }

// Selects the question to be displayed

function selectQuestion() {
    let selectedQuestion = questions.shift();
    console.log(questions.length);
    return selectedQuestion;
    
}

// Sets the timer, and penalizes a wrong answer.

function timer() {
    
    function startTimer() {
        let timer = setInterval(() => {
            sec--;
            if (sec > 69) {
                timerOutput.text("1:"+(sec-60));
            } else if (sec > 59) {
                timerOutput.text("1:0"+(sec-60));
            } else if (sec > 9) {
                timerOutput.text("00:"+sec);
            } else {
                timerOutput.text("00:0"+sec);
            }
            // timerOutput.text("00:"+sec);
            if (questionCounter < 1) {
                clearInterval(timer);
                endGame();
            }
            if (sec<1) {
                clearInterval(timer);
                endGame();
            }
            
        }, 1000);
    }
    startTimer();
    
}

// Checks if it should still be displaying questions based on the counter, and then runs.

function displayInterface() {
    
    if (questionCounter > 0) {
        let selectedQuestion = selectQuestion();
        console.log(questions.length + "Before shift")
        populateQuestion(selectedQuestion);
        populateAnswers(selectedQuestion);
    }
}

// starts the actual quiz on page load 

function startQuiz() {
    handleAnswerClick();
    displayInterface();
    
    timer();
}

// Runs when the timer runs out or there are no more questions

function endGame() {

    console.log("end game");
    $(".container").addClass('hide');
    highScoreLink.removeClass('hide');
    score = sec;
    let userName = prompt("please enter a username");
    if (score > localStorage.getItem("score")) {
        localStorage.setItem("user", userName);
        localStorage.setItem("score", score);
    }
    // localStorage.setItem("user", userName);
    // localStorage.setItem("score", score);
}

startQuiz();
