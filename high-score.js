// Pulls the local storage and sets the user and score to the current best score

const highScoreDiv = $("#high-score-div");

function displayHighScore() {
    
    let user = localStorage.getItem("user");
    let score = localStorage.getItem("score");
    console.log(user, score);
    let element = $("<p>");
    element.addClass("high-score-output");
    element.text(`${user}: ${score}`);
    highScoreDiv.append(element);
}


displayHighScore();