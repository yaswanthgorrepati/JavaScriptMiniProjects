const quizzQuestions = [
  {
    question: "What is the capital of France?",
    option_1: "Berlin",
    option_2: "Madrid",
    option_3: "Paris",
    option_4: "Rome",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    option_1: "Earth",
    option_2: "Venus",
    option_3: "Mars",
    option_4: "Jupiter",
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    option_1: "Atlantic Ocean",
    option_2: "Indian Ocean",
    option_3: "Arctic Ocean",
    option_4: "Pacific Ocean",
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    option_1: "William Shakespeare",
    option_2: "Charles Dickens",
    option_3: "Mark Twain",
    option_4: "Leo Tolstoy",
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    option_1: "O2",
    option_2: "CO2",
    option_3: "H2O",
    option_4: "NaCl",
    answer: "H2O",
  },
  {
    question: "Which country has the highest population in the world?",
    option_1: "India",
    option_2: "China",
    option_3: "United States",
    option_4: "Indonesia",
    answer: "China",
  },
  {
    question: "What is the currency of Japan?",
    option_1: "Yuan",
    option_2: "Won",
    option_3: "Yen",
    option_4: "Dollar",
    answer: "Yen",
  },
];

let MAX = quizzQuestions.length;
let start = Math.floor(Math.random() * (MAX - 1));
let questionNumber = start;
let selectedAnswer = null;
let totalScore = 0;
let totalQuestions = 0;
let MAX_QUESTIONS = 4;

function showQuestion() {
  questionNumber = start % MAX;
  let questionToDisplay = quizzQuestions[questionNumber];
  //   console.log(start % MAX);
  start = start + 1;
  //   console.log(start);
  let quizzDiv = document.getElementById("quizz_question");
  let paraElement = document.createElement("p");
  paraElement.innerText = `${totalQuestions + 1}. ${
    questionToDisplay.question
  }`;

  let ulElement = document.createElement("ul");

  let liElement_1 = document.createElement("li");
  liElement_1.innerText = questionToDisplay.option_1;
  liElement_1.addEventListener("click", selectAnswer);

  let liElement_2 = document.createElement("li");
  liElement_2.innerText = questionToDisplay.option_2;
  liElement_2.addEventListener("click", selectAnswer);

  let liElement_3 = document.createElement("li");
  liElement_3.innerText = questionToDisplay.option_3;
  liElement_3.addEventListener("click", selectAnswer);

  let liElement_4 = document.createElement("li");
  liElement_4.innerText = questionToDisplay.option_4;
  liElement_4.addEventListener("click", selectAnswer);

  let btnElement = document.createElement("button");
  btnElement.innerText = "Next";
  btnElement.addEventListener("click", checkAnswer);
  btnElement.addEventListener("click", nextQuestion);

  ulElement.append(liElement_1);
  ulElement.append(liElement_2);
  ulElement.append(liElement_3);
  ulElement.append(liElement_4);

  quizzDiv.append(paraElement);
  quizzDiv.append(ulElement);
  quizzDiv.append(btnElement);
  totalQuestions = totalQuestions + 1;
}

window.onload = function () {
  showQuestion();
};

function selectAnswer(event) {
  resetColor(event);
  console.log(event.target);
  const ele = event.target;
  selectedAnswer = event.target.innerText;
  console.log(selectedAnswer);
  ele.style.background = "lightgreen";
}

function resetColor(event) {
  let parentNode = event.target.parentNode;
  let listItems = parentNode.querySelectorAll("li"); // Select all <li> elements inside the <ul>

  listItems.forEach((li) => {
    li.style.backgroundColor = "white"; // Change background color of each <li>
  });
}

function checkAnswer(event) {
  let res = selectedAnswer === quizzQuestions[questionNumber].answer;
  if (res) {
    totalScore = totalScore + 1;
  }
  console.log(totalScore);
}

function nextQuestion(event) {
  let parentNode = event.target.parentNode;
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
  if (totalQuestions < MAX_QUESTIONS) {
    showQuestion();
  } else {
    let quizzDiv = document.getElementById("quizz_question");
    let scorecard = document.createElement("p");
    scorecard.innerText = `Total score is ${totalScore} and totalQuestions answered are ${totalQuestions}`;
    quizzDiv.append(scorecard);
  }
}
