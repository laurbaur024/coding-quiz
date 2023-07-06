//button variables
var startButton = document.querySelector("#start_button");
var continueButton = document.querySelector("#continue");
var quitButton = document.querySelector("#quit");

//other variables
var score = 0;

//event listeners for buttons
startButton.addEventListener("click", startQuiz);
continueButton.addEventListener("click", quizQuestions);
quitButton.addEventListener("click", quitQuiz);

//starting function
function startQuiz() {
  showUserBox();
}

//makes rules box appear on click of start quiz
function showUserBox() {
  document.getElementById('rules_box').style.display = "block";
}

//what happens when quit quiz button is clicked on rules screen
function quitQuiz() {
  document.getElementById('rules_box').style.display = "none";
}

//what happens when you click on the start quiz button on rules screen
function quizQuestions() {

}