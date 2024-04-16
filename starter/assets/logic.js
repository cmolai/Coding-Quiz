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

// intial start for the quiz
let currentQuestionIndex = 0;     
let timeLeft = 60;
let timerInterval;
let score = 0;
let timer;

// Add event listener to the start button
startButton.addEventListener('click', startQuiz);

// Add function to start the quiz
function startQuiz() {
    // Hide the start screen
    screenStart.classList.add('hide');
    // Show the question container
    questionContainer.classList.remove('hide');
    // Start the timer
    startTimer();
    // Display the first question
    displayQuestion();
}

// Add function to display the question
function displayQuestion() {
    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    // Display the question title
    questionTitle.textContent = currentQuestion.title;
    // Clear the choices container
    choicesContainer.innerHTML = "";
    // Loop through the choices
    currentQuestion.choices.forEach(function(choice, i) {
        // Create a button for each choice
        const choiceButton = document.createElement('button');
        choiceButton.textContent = i + 1 + ". " + choice;
        choiceButton.setAttribute('data-index', i);
        choiceButton.addEventListener('click', selectAnswer);
        choicesContainer.appendChild(choiceButton);
    });
}

// Add button to select the answer
currentQuestionIndex.options.forEach((option, i) => {
  const button = document.createElement("button");
  button.innerText = option;
  button.classList.add("choice-btn");
  button.addEventListener("click", function(event){
      checkAnswer(i);
  });
  choicesContainer.appendChild(button);
});

// Add function to check the answer
function checkAnswer(index){
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.options[index] === currentQuestion.correctAnswer){
      score++;
      correctSound.play();
      showFeedback("Correct!");
  } else {
      time-=10;
      timerElement.textContent = time;
      incorrectSound.play();
      showFeedback("Wrong Answer");
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length){
      showQuestion(currentQuestionIndex);
  } else {
      endQuiz();
  }
}

// Add function to start the timer  
function startTimer(){
  timer = setInterval(function(){
      if (time <= 0){
          endQuiz();
      } else{
          timerElement.textContent = time--;
      }
  },1000);
}

// Add function to end the quiz
function endQuiz(){
  clearInterval(timer);
  questionsContainer.classList.add("hide");
  endScreen.classList.remove("hide");
  showFeedback("");
  finalScore.innerText = score;
}

// Add feedback function after each question
function showFeedback(message){
feedback.classList.remove('hide');
feedbackElement.innerText = message;
}

// Add event listener to the submit button to save user initials and score, and redirect to highscores page
submitButton.addEventListener("click", function(){
const userInitial = document.getElementById("initials").value;
localStorage.setItem("initial", userInitial);
localStorage.setItem("score", score);
location.href = "./highscores.html"
});