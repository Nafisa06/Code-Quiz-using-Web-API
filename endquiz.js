// set variable for ids in the html

var username = document.queryselector ('#username')
var saveScoreButton = document.queryselector ('#saveScoreButton')
var finalScore = document.queryselector ('#finalScore')

//set variable to push the high scores to the highscore.html page

var highScores = document.queryselector (#highScores)


var highScore = JSON.parse (localStorage.getItem ('highScores')) ) || []

var MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

