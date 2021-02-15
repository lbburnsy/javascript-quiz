// Query the DOM

let questionOutput = $("#question-output");
let buttonContainer = $("#button-container");
let startBtn = $("#start-btn");
let answerBtn = $(".answer-btn");

function handleClick() {
    answerBtn.on("click", () => {
        console.log("hello");
    })
}

const questions = [
    {
        question: "What is 2 + 2?",
        answer: [
            {text: "4", correct: true},
            {text: "2", correct: false}
        ]
    }
]

function displayQuestion() {
    questionOutput.text(questions[0].question)
}

function createButtons() {
    let answerArray = questions[0].answer;
    for(let i=0; i<answerArray.length; i++) {
        let button = $("<button>");
        button.addClass("btn btn-primary answer-btn");
        button.data("correct", answerArray[i].correct)
        button.text(answerArray[i].text);
        buttonContainer.append(button);
    }
}

function startQuiz() {
    createButtons();
    displayQuestion();
    handleClick();
}

startBtn.on("click", startQuiz);