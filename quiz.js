const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
var timerEl = document.getElementById('countdown');

let questions = [
  {
    question: "HTML stands for?",
    choice1: "HighText Machine Language",
    choice2: "HyperText and links Markup Language",
    choice3: "HyperText Markup Language",
    choice4: "None of these",
    answer: 3
  },
  {
    question:
      "The correct sequence of HTML tags for starting a webpage is?",
    choice1: "Head, Title, HTML, body",
    choice2: "HTML, Body, Title, Head",
    choice3: "HTML, Title, Head, Body",
    choice4: "HTML, Head, Title, Body",
    answer: 4
  },
  {
    question: "Which of the following element is responsible for making the text bold in HTML?",
    choice1: "<pre>",
    choice2: "<a>",
    choice3: "<b>",
    choice4: "<br>",
    answer: 3
  },
  {
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    choice1: "<h3>",
    choice2: "<h1>",
    choice3: "<h5>",
    choice4: "<h6>",
    answer: 2
  },
  {
    question:
      "Which of the following tag is used to insert a line-break in HTML?",
    choice1: "<br>",
    choice2: "<a>",
    choice3: "<pre>",
    choice4: "<b>",
    answer: 1
  },
  {
    question: "Which built-in method calls a function for each element in the array?",
    choice1: "while()",
    choice2: "loop()",
    choice3: "forEach()",
    choice4: "None of the above",
    answer: 3
  },
  {
    question: "Which of the following code creates an object?",
    choice1: "var book = Object();",
    choice2: "var book = new Object();",
    choice3: "var book = new OBJECT();",
    choice4: "var book = new Book();",
    answer: 2
  },
  {
    question:
      "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
    choice1: "toSource()",
    choice2: "valueOf()",
    choice3: "toString()",
    choice4: "None of the above",
    answer: 2
  },
  {
    question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    choice1: "slice()",
    choice2: "split()",
    choice3: "substr()",
    choice4: "search()",
    answer: 3
  },
  {
    question: "Which of the following function of String object returns the calling string value converted to lower case?",
    choice1: "toLocaleLowerCase()",
    choice2: "toLowerCase()",
    choice3: "toString()",
    choice4: "substring()",
    answer: 2
  },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  function countdown() {
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("endquiz.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();