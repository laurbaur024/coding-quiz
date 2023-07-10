//button variables
var startButton = document.querySelector("#start_button");
var continueButton = document.querySelector("#continue");
var quitButton = document.querySelector("#quit");
var answer1Button = document.querySelector("#answer_1")
var answer2Button = document.querySelector("#answer_2")
var answer3Button = document.querySelector("#answer_3")
var answer4Button = document.querySelector("#answer_4")


//other variables
var score = 0
var counter;
document.getElementById('current_score').textContent = score
document.getElementById('countdown').textContent = counter

//questions -- name of key values


var questions = [{
  question: "Inside which HTML element do we put the JavaScript?",
  answers: ["<script>", "<js>", "<scripting>", "<javascript>"],
  correctAnswer: 0,
},

{
  question: "What is the correct format for an IF statement in JavaScript?",
  answers: ["if i == 5 then", "if (i == 5)", "if 'i' equals 5 then", "if i = 5"],
  correctAnswer: 1,
},

{
  question: "Which operator is used to assign a value to a variable?",
  answers: ["-", "*", "x", "="],
  correctAnswer: 3,
},

{
  question: "How do you create a function in JavaScript?",
  answers: ["function myFunction()", "function = myFunction()", "function:myFunction()", "fnct = myFunction!"],
  correctAnswer: 1,
},

{
  question: "How would you call a function named myFunction?",
  answers: ["call function myFunction()", "call myFunction()", "myFunction()", "myFunction!"],
  correctAnswer: 2,
},
]

//event listeners for buttons
startButton.addEventListener("click", startQuiz);
continueButton.addEventListener("click", quizQuestions);
quitButton.addEventListener("click", quitQuiz);
// answer1Button.addEventListener("click", answer);
// answer2Button.addEventListener("click", answer);
// answer3Button.addEventListener("click", answer);
// answer4Button.addEventListener("click", answer);


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
  document.getElementById("question_text").textContent = questions[0].question;
  document.getElementById("answer_1").textContent = questions[0].answers[0];
  document.getElementById("answer_2").textContent = questions[0].answers[1];
  document.getElementById("answer_3").textContent = questions[0].answers[2];
  document.getElementById("answer_4").textContent = questions[0].answers[3];
  answerOne()
}

function startTimer(){
  counter = 4000;
  setInterval(function(){
    counter--
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


//answering the question function

function answerOne(){
  document.getElementById('answer_1').onclick = winResult1
  document.getElementById('answer_2').onclick = loseResult1
  document.getElementById('answer_3').onclick = loseResult1
  document.getElementById('answer_4').onclick = loseResult1
}

function winResult1(){
 console.log('correct')
 document.getElementById('current_score').textContent = score
 console.log(score += 100)
 questionTwo()
}

function loseResult1(){
 console.log('incorrect')
 questionTwo()
}

function questionTwo(){
  document.getElementById("question_text").textContent = questions[1].question;
  document.getElementById("answer_1").textContent = questions[1].answers[0];
  document.getElementById("answer_2").textContent = questions[1].answers[1];
  document.getElementById("answer_3").textContent = questions[1].answers[2];
  document.getElementById("answer_4").textContent = questions[1].answers[3];
  answerTwo()
}

function answerTwo(){
  document.getElementById('answer_1').onclick = loseResult2
  document.getElementById('answer_2').onclick = winResult2
  document.getElementById('answer_3').onclick = loseResult2
  document.getElementById('answer_4').onclick = loseResult2
}

function winResult2(){
  console.log('correct')
  document.getElementById('current_score').textContent = score
  console.log(score += 100)
  questionThree()
 }
 
 function loseResult2(){
  console.log('incorrect')
  questionThree()
 }

 function questionThree(){
  document.getElementById("question_text").textContent = questions[2].question;
  document.getElementById("answer_1").textContent = questions[2].answers[0];
  document.getElementById("answer_2").textContent = questions[2].answers[1];
  document.getElementById("answer_3").textContent = questions[2].answers[2];
  document.getElementById("answer_4").textContent = questions[2].answers[3];
  answerThree()
}

function answerThree(){
  document.getElementById('answer_1').onclick = loseResult3
  document.getElementById('answer_2').onclick = loseResult3
  document.getElementById('answer_3').onclick = loseResult3
  document.getElementById('answer_4').onclick = winResult3
}

function winResult3(){
  console.log('correct')
  document.getElementById('current_score').textContent = score
  console.log(score += 100)
  questionFour()
 }
 
 function loseResult3(){
  console.log('incorrect')
  questionFour()
 }

 function questionFour(){
  document.getElementById("question_text").textContent = questions[3].question;
  document.getElementById("answer_1").textContent = questions[3].answers[0];
  document.getElementById("answer_2").textContent = questions[3].answers[1];
  document.getElementById("answer_3").textContent = questions[3].answers[2];
  document.getElementById("answer_4").textContent = questions[3].answers[3];
  answerFour()
 }

 function answerFour(){
  document.getElementById('answer_1').onclick = winResult4
  document.getElementById('answer_2').onclick = loseResult4
  document.getElementById('answer_3').onclick = loseResult4
  document.getElementById('answer_4').onclick = loseResult4
}

function winResult4(){
  console.log('correct')
  document.getElementById('current_score').textContent = score
  console.log(score += 100)
  questionFive()
 }
 
 function loseResult4(){
  console.log('incorrect')
  questionFive()
 }

 function questionFive(){
  document.getElementById("question_text").textContent = questions[4].question;
  document.getElementById("answer_1").textContent = questions[4].answers[0];
  document.getElementById("answer_2").textContent = questions[4].answers[1];
  document.getElementById("answer_3").textContent = questions[4].answers[2];
  document.getElementById("answer_4").textContent = questions[4].answers[3];
  answerFive()
 }

 function answerFive(){
  document.getElementById('answer_1').onclick = loseResult5
  document.getElementById('answer_2').onclick = loseResult5
  document.getElementById('answer_3').onclick = winResult5
  document.getElementById('answer_4').onclick = loseResult5
}

function winResult5(){
  console.log('correct')
  document.getElementById('current_score').textContent = score
  console.log(score += 100)
  endGame()
 }
 
 function loseResult5(){
  console.log('incorrect')
  endGame()
 }

 function endGame(){
  
 }