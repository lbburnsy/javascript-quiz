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

const resultOutput = $("#result-output");

let time = 60;
// An array of objects for questions
const questions = [
    {
    question: "The correct answer is JavaScript",
    options: {
        A: "JavaScript",
        B: "CSS",
        C: "HTML",
        D: "JQuery"
    },
    answer: "a"
},
{
    question: "The correct answer is CSS",
    options: {
        A: "JavaScript",
        B: "CSS",
        C: "HTML",
        D: "JQuery"
    },
    answer: "b"
}
]

// A function to display the current question
// function displayQuestion() {
//     promptParagraph.text(`${questions[0].question}`)
//     choiceOne.text(questions[0].options.A);
//     choiceTwo.text(questions[0].options.B);
//     choiceThree.text(questions[0].options.C);
//     choiceFour.text(questions[0].options.D);
// }

function displayQuestion() {
    let choice;
    let random = (Math.floor(Math.random() * questions.length));
    choice = questions.pop(random);
    promptParagraph.text(choice.question);
    choiceOne.text(choice.A);
    choiceTwo.text(choice.B);
    choiceThree.text(choice.C);
    choiceFour.text(choice.D);
}

console.log(displayQuestion);
console.log(displayQuestion);


// A function to check correct answers
function correctAnswer() {
    resultOutput.text("You are correct!");
}

// A function to check wrong answers
function wrongAnswer() {
    resultOutput.text("Wrong!");
    time -= 5;
}



// Handles the click on the answer elements

function handleClick(answer) {
    displayQuestion();
    answerEl.on("click", (event) => {
        if (event.target.dataset.value === answer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    })
}


handleClick(questions[0].answer);

// A game over function

// A save score function

//Score Counter and counter variable

// Init function to display the top three saved scores


// A timer function

function timer(){
    
    let timeRemaining = setInterval(function(){
        timerOutput.text(`00:${time}`);
        time--;
        if (time < 0) {
            clearInterval(timeRemaining);
        }
    }, 1000);
}

startButton.on("click", timer);