var highScoresList = document.querySelector('#highScoresList')
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

//clear high score on page//

let clearHighScore = document.querySelector(#clear)

clearHighScore.addEventListener('click' ())
