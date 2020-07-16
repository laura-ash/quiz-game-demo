// Select questions and choices
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

// Create variables
let currentQuestion = {};
let acceptingAnswers = false;
let userScore = 0;
let questionCounter = 0;
let availableQuestions = []; // allows new question to be given to player each time

// Hard coded questions stored in objects
let questions = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the worlds...",
        choice1: "Largest railway station",
        choice2: "Highest railway station",
        choice3: "Longest railway station",
        choice4: "None of the above",
        answer: 1, // Shows correct answer
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        choice1: "Physics and Chemistry",
        choice2: "Physiology or Medicine",
        choice3: "Literature, Peace and Economics",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: " How did Spider-Man get his powers?",
        choice1: "Born with them",
        choice2: "Woke up with them after a strange dream",
        choice3: "Bitten by a radioactive spider",
        choice4: "Military experiment gone wrong",
        answer: 3,
    },
];

// Set constants for game
const addPoints = 15;// When you get a correct answer it adds points
const questionLimit = 3; // Limits no. of questions per game

// Arrow functions to start game
startGame = () => {
    questionCounter = 0;
    userScore = 0;
    availableQuestions = [...questions]; // Copy all qs from question array using spread operator
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= questionLimit) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++; // Increment by 1 when game is started
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); // Find a random number among the no. of available questions
    currentQuestion = availableQuestions[questionIndex]; 
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => { // iterate through each choice
        const number = choice.dataset['number']; // reference dataset number ??
        choice.innerText = currentQuestion['choice' + number]; // ??
    });

    availableQuestions.splice(questionIndex, 1); // Remove used question from array
    acceptingAnswers = true;
};

// Add functionality to for next question
choices.forEach((choice) => { // Add click event listener to each choice
    choice.addEventListener('click', (e) => { // e ??
        if (!acceptingAnswers) return; // Ignore clicks if too early

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        //getNewQuestion();
    });
});

/* Tested code for next section, affects functionality showing each question
document.getElementById("nextq").addEventListener("click", function(){
  getNewQuestion();
});

 
nextq.addEventListener("click", function ()) {
    getNewQuestion();
} */ 

// Check if answer is correct 


// Call new question with next button 


startGame();