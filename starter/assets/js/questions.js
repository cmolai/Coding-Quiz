// questions.js
const questions = [
  {
    question: "Which of the following is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
    correctAnswer: "<script src='xxx.js'>"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "console.log('Hello World');"],
    correctAnswer: "alert('Hello World');"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "function => myFunction()"],
    correctAnswer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "myFunction()", "call function myFunction()", "Function myFunction()"],
    correctAnswer: "myFunction()"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
    correctAnswer: "if (i == 5)"
  },
  {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i <> 5)", "if i =! 5 then", "if (i != 5)", "if (i !== 5)"],
    correctAnswer: "if (i != 5)"
  },
  {
    question: "How does a WHILE loop start?",
    options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while (i != 10)"],
    correctAnswer: "while (i <= 10)"
  },
  {
    question: "How does a FOR loop start?",
    options: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i < 5; i++)"],
    correctAnswer: "for (i = 0; i < 5; i++)"
  },
  {
    question: "How can you add a comment in a JavaScript?",
    options: ["' This is a comment", "// This is a comment", "<!-- This is a comment -->", "** This is a comment **"],
    correctAnswer: "// This is a comment"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: ["const colors = (1:'red', 2:'green', 3:'blue')", "const colors = ['red', 'green', 'blue']", "const colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "const colors = 'red', 'green', 'blue'"],
    correctAnswer: "const colors = ['red', 'green', 'blue']"
  }
];
//function displayAnswer(questionIndex) {
// const question = questions[questionIndex];
// const answerText = question.options[question.answer - 1];
// Adjusted to zero-based index
//  console.log(`The answer to "${question.question}" is "${answerText}"`);
//}
