// Query the DOM

const timerOutput = $("#timer-output");
const questionOutput = $("#question-output");
const answerOutputDiv = $(".answer-output-div");
const answerBtn = $("answer-btn");
const resultOutput = $("#result-output");

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

let testQuestion = questions[0]

function populateQuestion(question) {
    questionOutput.text(question.question);
}

function populateAnswers(question) {
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
    if (correct === "true") {
        resultOutput.text("Correct!")
    } else {
        resultOutput.text("Wrong!");
    }
}

console.log(testQuestion)
populateQuestion(testQuestion);
populateAnswers(testQuestion);
handleAnswerClick();

