// Query the Document
// Generic selector for the 4 answer options
const answerEl = $(".answer");
// Selects the specific answer field
const choiceOne = $("#choice-one");
const choiceTwo = $("#choice-two");
const choiceThree = $("#choice-three");
const choiceFour = $("#choice-four");
// Selects the question prompt paragraph
const promptParagraph = $("#prompt-paragraph");
// Selects the start button
const startButton = $("#start-button");
// Selects the timer
const timerOutput = $("#timer-output");
// An array of objects for questions
const questions = [
    {
    question: "The correct answer is JavaScript",
    answers: {
        A: "JavaScript",
        B: "CSS",
        C: "HTML",
        D: "JQuery"
    },
    correctAnswer: "a"
}
]

// A function to display the current question
function displayQuestion() {
    promptParagraph.text(`${questions[0].question}`)
    choiceOne.text(questions[0].answers.A);
    choiceTwo.text(questions[0].answers.B);
    choiceThree.text(questions[0].answers.C);
    choiceFour.text(questions[0].answers.D);
}

displayQuestion();
//Score Counter and counter variable

// Init function to display the top three saved scores

// A function to check correct answers

// A function to check wrong answers

// A game over function

// A save score function

// Handles the click on the answer elements

function handleClick(answer) {
    answerEl.on("click", (event) => {
        console.log(event.target.dataset.value);
        if (event.target.dataset.value === answer) {
            console.log("Correct");
        } else {
            console.log("Wrong");
        }
    })
}


handleClick(questions[0].correctAnswer);





// A timer function

function timer(){
    let time = 60;
    let timeRemaining = setInterval(function(){
        timerOutput.text(`00:${time}`);
        time--;
        if (time < 0) {
            clearInterval(timeRemaining);
        }
    }, 1000);
}

startButton.on("click", timer);