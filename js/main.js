// Query the DOM

let questionOutput = $("#question-output");
let buttonContainer = $("#button-container");
let controlBtn = $("#control-btn");
let answerBtn;

let questions = [
    {
        question: "What does CSS stand for?",
        answer: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Cows Standing Still", correct: false},
            {text: "Cheese Strombolli Special", correct: false},
            {text: "Chrysler Style Sheets", correct: false}
        ]
    },
    {
        question: "What can you do with CSS?",
        answer: [
            {text: "Create math functions", correct: false},
            {text: "Style HTML", correct: true},
            {text: "Create HTML elements", correct: false},
            {text: "Take user input", correct: false}
        ]
    },
    {
        question: "What is the official name of JavaScript?",
        answer: [
            {text: "JavaScript", correct: false},
            {text: "JScript", correct: false},
            {text: "ECMAScript", correct: true},
            {text: "JunoScript", correct: false}
        ]
    },
    {
        question: "What is the primary use of JavaScript?",
        answer: [
            {text: "Sends out alerts", correct: false},
            {text: "Creates Elements", correct: false},
            {text: "Color changing", correct: false},
            {text: "Interactivity", correct: true}
        ]
    },
    {
        question: "How old is JavaScript",
        answer: [
            {text: "25", correct: true},
            {text: "40", correct: false},
            {text: "10", correct: false},
            {text: "22", correct: false}
        ]
    },
    {
        question: "Where would I find the output of console.log()?",
        answer: [
            {text: "The current page", correct: false},
            {text: "The Console", correct: true},
            {text: "An alert", correct: false},
            {text: "A prompt", correct: false}
        ]
    },
    {
        question: "In CSS, how do we select an ID?",
        answer: [
            {text: "%", correct: false},
            {text: "$", correct: false},
            {text: "#", correct: true},
            {text: "&", correct: false}
        ]
    },
    {
        question: "In HTML, where should our JavaScript link go?",
        answer: [
            {text: "Nowhere.", correct: false},
            {text: "The head", correct: false},
            {text: "The top of the body.", correct: false},
            {text: "The bottom of the body.", correct: true}
        ]
    },
    {
        question: "What keyword defines a javascript function?",
        answer: [
            {text: "'function'", correct: true},
            {text: "'declare'", correct: false},
            {text: "'shazam'", correct: false},
            {text: "'booyah'", correct: false}
        ]
    },
    {
        question: "What is the website for cloud git repos?",
        answer: [
            {text: "GitZone", correct: false},
            {text: "GitHub", correct: true},
            {text: "GitPlace", correct: false},
            {text: "GitHouse", correct: false}
        ]
    }
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function displayQuestion() {
    questionOutput.text(questions[0].question)
}

function createButtons() {
    let answerArray = questions[0].answer;
    buttonContainer.empty();
    for(let i=0; i<answerArray.length; i++) {
        let button = $("<button>");
        button.addClass("btn btn-primary answer-btn");
        button.data("correct", answerArray[i].correct)
        button.text(answerArray[i].text);
        buttonContainer.append(button);
    }
}

function answerClick() {
    console.log("click")
}

function startQuiz() {
    controlBtn.text("Next");
    shuffleArray(questions);
    createButtons();
    displayQuestion();
}

controlBtn.on("click", startQuiz);
