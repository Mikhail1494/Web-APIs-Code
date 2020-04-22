//Dom element
var currentQuestion = 0;
var score = 0;
var ticeker = 50;
var totquestions = questions.length;
var quizContainer = document.querySelector(".question-box");
console.log("quizContainerStart: ", quizContainer);
var questionEl = document.getElementById("questions");
var selection1 = document.getElementById("selection1");
var selection2 = document.getElementById("selection2");
var selection3 = document.getElementById("selection3");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("go");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");
var localStorage = window.localStorage;


const CORRECT_COUNT = 1;
const MAX_QUESTIONS = 3;
const scoreList = 0;
//Choice a question
function takeQuestion(questionIndex) {
  document.getElementById("go").disabled = true;
  var q = questions[questionIndex];
  if (q) {
  }
  questionEl.textContent = (questionIndex + 1) + ". " + q.question;
  selection1.textContent = q.selection1;
  selection2.textContent = q.selection2;
  selection3.textContent = q.selection3;
}
//next step to question
function takeNextQuestion() {
  console.log("total_questions: ", totquestions);
  var userChoice = document.querySelector("input[type=radio]:checked");
  var answer = userChoice.value;

  if (questions[currentQuestion].answer === answer) {
    score++;
    userChoice.checked = false;
    console.log("right answer");
    console.log("currentQuestionNumber: ", currentQuestion);
    if (currentQuestion == totquestions - 1) {
      console.log("no more questions");
      startBtn.style.visibility = "hidden";
      nextBtn.style.visibility = "hidden";
      console.log(quizContainer);
      quizContainer.style.display = "none";
    //   result.style.display = "";
    //   result.textContent = score;
      return;
    }
  } else if (!userChoice) {
    alert("Mark your answer");
    console.log("no answer");
    //return;
  } else {
    alert("Wrong answer!");
  }
  


  console.log("currentQuestionNumberAfterAnswer", currentQuestion);
  currentQuestion++;
  takeQuestion(currentQuestion);
}
//ticker
var myTimer;
function clock() {
  myTimer = setInterval(myCloack, 1000);
  function myCloack() {
    document.getElementById("ticker").innerHTML = ticeker--;
    if (ticeker == 0 || currentQuestion===2) {
      clearInterval(myTimer);










    }
  }
}
