const question = document.querySelector("#questions");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "HTML stands for?",
    choice1: "HighText Machine Language",
    choice2: "HyperText and links Markup Language",
    choice3: "HyperText Markup Language",
    choice4: "None of these",
    answer: 3,
  },
  {
    question: "The correct sequence of HTML tags for starting a webpage is?",
    choice1: "Head, Title, HTML, body",
    choice2: "HTML, Body, Title, Head",
    choice3: "HTML, Title, Head, Body",
    choice4: "HTML, Head, Title, Body",
    answer: 4,
  },
  {
    question:
      "Which of the following element is responsible for making the text bold in HTML?",
    choice1: "<pre>",
    choice2: "<a>",
    choice3: "<b>",
    choice4: "<br>",
    answer: 3,
  },
  {
    question:
      "Which of the following tag is used for inserting the largest heading in HTML?",
    choice1: "<h3>",
    choice2: "<h1>",
    choice3: "<h5>",
    choice4: "<h6>",
    answer: 2,
  },
  {
    question:
      "Which of the following tag is used to insert a line-break in HTML?",
    choice1: "<br>",
    choice2: "<a>",
    choice3: "<pre>",
    choice4: "<b>",
    answer: 1,
  },
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    choice1: "while()",
    choice2: "loop()",
    choice3: "forEach()",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question: "Which of the following code creates an object?",
    choice1: "var book = Object();",
    choice2: "var book = new Object();",
    choice3: "var book = new OBJECT();",
    choice4: "var book = new Book();",
    answer: 2,
  },
  {
    question:
      "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
    choice1: "toSource()",
    choice2: "valueOf()",
    choice3: "toString()",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question:
      "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    choice1: "slice()",
    choice2: "split()",
    choice3: "substr()",
    choice4: "search()",
    answer: 3,
  },
  {
    question:
      "Which of the following function of String object returns the calling string value converted to lower case?",
    choice1: "toLocaleLowerCase()",
    choice2: "toLowerCase()",
    choice3: "toString()",
    choice4: "substring()",
    answer: 2,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

(startQuiz) => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

function startQuiz() {
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.innerText;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  }
}

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startQuiz();
