const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is COVID-19?",
        choice1:"A type of bacteria",
        choice2:"A type of virus",
        choice3:" A type of fungus",
        choice4:"A type of parasite",
        answer: 2,
    },
    {
        question: "How is COVID-19 primarily spread?",
        choice1:"Through mosquito bites",
        choice2:"Through contact with infected animals",
        choice3:"Through respiratory droplets when an infected person talks, coughs, or sneezes",
        choice4:"Through contaminated food and water",
        answer: 3,
    },
    {
        question: "What are some common symptoms of COVID-19?",
        choice1:"Fever, cough, and shortness of breath",
        choice2:"Headache, fatigue, and diarrhea",
        choice3:"Sore throat, runny nose, and loss of taste or smell",
        choice4:"All of the above",
        answer: 4,
    },
    {
        question: "Which of the following is an effective way to prevent the spread of COVID-19?",
        choice1:"Wearing a mask in public settings",
        choice2:"Washing your hands frequently with soap and water for at least 20 seconds",
        choice3:"Maintaining a distance of at least 6 feet from others",
        choice4:"All of the above",
        answer: 4,
    },
]
 
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign ('/ID-assignment-2/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()





