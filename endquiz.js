// set variable for ids in the html

var username = document.queryselector ('#username')
var saveScoreButton = document.queryselector ('#saveScoreButton')
var finalScore = document.queryselector ('#finalScore')

//set variable to push the high scores to the highscore.html page

var highScores = document.queryselector (#highScores)


var highScore = JSON.parse (localStorage.getItem ('highScores')) ) || []

var MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

// coding to save username and enable the submit button once the a username is added//

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

// saving the high score//

saveHighScore = e => {
    e.preventDefault()

    var score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

    
}