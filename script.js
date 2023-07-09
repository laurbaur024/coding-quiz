//button variables
var startButton = document.querySelector("#start_button");
var continueButton = document.querySelector("#continue");
var quitButton = document.querySelector("#quit");
var answer1Button = document.querySelector("#answer_1")
var answer2Button = document.querySelector("#answer_2")
var answer3Button = document.querySelector("#answer_3")
var answer4Button = document.querySelector("#answer_4")


//other variables
var score = "";
var counter

//event listeners for buttons
startButton.addEventListener("click", startQuiz);
continueButton.addEventListener("click", quizQuestions);
quitButton.addEventListener("click", quitQuiz);

//starting function
function startQuiz() {
  showRulesBox();
}

//makes rules box appear on click of start quiz
function showRulesBox() {
  document.getElementById('rules_box').style.display = "block";
}

//what happens when quit quiz button is clicked on rules screen
function quitQuiz() {
  document.getElementById('rules_box').style.display = "none";
}

//what happens when you click on the continue button on rules screen (starts quiz)
function quizQuestions() {
  document.getElementById('question_box').style.display = "block";
  document.getElementById('rules_box').style.display = "none";
  startTimer();
}

function startTimer(){
  counter = 60;
  setInterval(function(){
    counter--;
    if (counter >= 0) {
      span = document.getElementById("countdown")
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert ('Game Over!');
      clearInterval(counter);
      document.getElementById('question_box').style.display = "none"
    }
  }, 1000);
}

//populate question data into buttons

//questions -- name of key values

var questions = [{
  question: "Inside which HTML element do we put the JavaScript?",
  answers: ["<script>", "<js>", "<scripting>", "javascript>"],
  correctAnswer: "<script>"
},

{
  question: "What is the correct format for an IF statement in JavaScript?",
  answers: ["if i == 5 then", "if (i == 5)", "if i = 5 then", "if i = 5"],
  correctAnswer: "if (i == 5)",
},

{
  question: "Which operator is used to assign a value to a variable?",
  answers: ["-", "*", "x", "="],
  correctAnswer: "=",
},

{
  question: "How do you create a function in JavaScript?",
  answers: ["function myFunction()", "function = myFunction()", "function:myFunction()", "fnct = myFunction!"],
  correctAnswer: "function myFunction()",
},

{
  question: "How would you call a function named myFunction?",
  answers: ["call function myFunction()", "call myFunction()", "myFunction()", "myFunction!"],
  correctAnswer: "myFunction()",
},
]

