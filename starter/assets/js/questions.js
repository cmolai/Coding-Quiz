// questions.js
const questions = [
  {
      question: "Which of the following is the correct syntax for referring to an external script called 'xxx.js'?",
      options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
      answer: "<script src='xxx.js'>"
  },
  {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "console.log('Hello World');"],
      answer: "alert('Hello World');"
  },
  {
      question: "How do you create a function in JavaScript?",
      options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "function => myFunction()"],
      answer: "function myFunction()"
  },
  {
      question: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "myFunction()", "call function myFunction()", "Function myFunction()"],
      answer: "myFunction()"
  },
  {
      question: "How to write an IF statement in JavaScript?",
      options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
      answer: "if (i == 5)"
  },
  {
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: ["if (i <> 5)", "if i =! 5 then", "if (i != 5)", "if (i !== 5)"],
      answer: "if (i != 5)"
  },
  {
      question: "How does a WHILE loop start?",
      options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while (i != 10)"],
      answer: "while (i <= 10)"
  },
  {
      question: "How does a FOR loop start?",
      options: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i < 5; i++)"],
      answer: "for (i = 0; i < 5; i++)"
  },
  {
      question: "How can you add a comment in a JavaScript?",
      options: ["' This is a comment", "// This is a comment", "<!-- This is a comment -->", "** This is a comment **"],
      answer: "// This is a comment"
  },
  {
      question: "What is the correct way to write a JavaScript array?",
      options: ["const colors = (1:'red', 2:'green', 3:'blue')", "const colors = ['red', 'green', 'blue']", "const colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "const colors = 'red', 'green', 'blue'"],
      answer: "const colors = ['red', 'green', 'blue']"
  }
];