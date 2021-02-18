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