// Reference the HTML elements
const startButton = document.getElementById('start');
const screenStart = document.getElementById('screen-start');
const timerElement = document.getElementById('timer');
const questionContainer = document.getElementById('question-container');
const questionTitle = document.getElementById('question-title');
const choicesContainer = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const correctSound = new Audio("./assets/sfx/correct.wav");
const incorrectSound = new Audio("./assets/sfx/incorrect.wav");
