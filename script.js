// declaring variables and setting selectors 

var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var scoreText = document.querySelector('#score');

// setting logic for question selection and scoring
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

//setting questions as an array

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: '<js>',
        choice2: '<javascript>',
        choice3: '<script>',
        choice4: '<scripting>',
        answer: 3,
    },
    {
        question:"How can you add a comment in a JavaScript?",
        choice1: "//*this is a commeny*//",
        choice2: "'this is a comment",
        choice3: "<!--this is a comment-->",
        choice4: "None of the above",
        answer: 4,
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choice1: "var names=1= ('tom'), 2=('harry')",
        choice2: "var names= (1:'tom', 2:'harry)",
        choice3: "var names = ['tom', 'harry']",
        choice4: "var names= 'tom', 'harry'",
        answer: 3,
    },
    {
        question: "How do you declare a JavaScript variable?",
        choice1: "var hairColour",
        choice2: "variable hairColour",
        choice3: "v hairColour",
        choice4: "var= hairColour",
        answer: 1,
    }
]

// setting number of points per correct question and maximum number of questions in quiz"

var scorePoints = 10;
var maxQuestions = 4;

// setting function to start quiz and keep track of scores//

function startQuiz = {} => {
    score = 0
    questionCounter = 0
    availableQuestions = [...question]
    getNewQuestion ()

} 

