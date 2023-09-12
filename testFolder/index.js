const startButton = document.getElementById("start-btn");
const container = document.getElementById("container");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const items = document.querySelectorAll(".btn");
const text = document.getElementById("start-text");
const timeContainer = document.getElementById("timerContainer");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame, () => {});
// i added a coloful border remove it lol
/* sessionStorage.setItem("questionaire", `${questions.in}`); */
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  console.log(shuffledQuestions);

  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  text.style.display = "none";
  timeContainer.style.display = "flex";
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  setInterval(updateCOuntdown, 1000);
  //i did this by myself, it should work but it wasnt working yesterday :(
}

function setNextQuestion() {
  resetState();

  showQuestion(shuffledQuestions[currentQuestionIndex]);
  const imgElement = document.createElement("img");

  const min = 1;

  if (
    shuffledQuestions[currentQuestionIndex].hasImg &&
    questionContainer.childElementCount === min
  ) {
    imgElement.src = question.imgElement;
    questionContainer.appendChild(imgElement);
  } else if (!shuffledQuestions[currentQuestionIndex].hasImg) {
    //Added variable and set it to the img.
    const existingImgElement = questionContainer.querySelector("img");
    //Removes the image if it has one.
    if (existingImgElement) {
      questionContainer.removeChild(existingImgElement);
    }
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  if (correct) {
    userScore++;
  } else {
    selectedButton.style.color = "white";
    selectedButton.style.backgroundColor = "red";
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true; // Disable all answer buttons
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "green"; // Correct answer button
    }
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    /* sendEmail(); */
    console.log(`${userScore}/${questions.length}`);
    userScore = 0;
    // i added the scoring system right here (up arrow right)
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
  // The email function or any further logic can be added here
} // the email function should be right here becaUSE this says when the test is finished remove hide somewhere and restarts

//writing my own function for the one the user selected(wish me luck) i had to move my function up by a couple lines

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
//settting the right and wrong class in the css, i think making the backgrounds diffirent colours

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const startingTime = 1500;
let timer = startingTime;

const time = document.getElementById("time");

function updateCOuntdown() {
  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  time.innerHTML = `${minutes}:${seconds}`;

  timer--;

  if (timer < 600) {
    time.style.color = "#ffa500";
    time.classList.add("almostFinished");
  }
  if (timer < 60) {
    time.style.color = "crimson";
    time.classList.remove("almostFinished");
    time.classList.add("sixtysecLeft");
  }
  if (timer <= 0) {
    time.innerHTML = "00:00";
    time.style.color = "red";
    time.classList.remove("sixtysecLeft");
    sendEmail();
    // you  can put the email function in this funtion right here.
  }
  // the day after installing this feature, it started randomly working like wtf but aii this is coding for gang!!!!!!
}

//trying to add a scoring system innit bruv :)
let userScore = 0;
function resetScore() {}

function sendEmail() {
  (function () {
    emailjs.init("iR9VPYJmH1lmfLk6Q");
  })();
  const usersName = localStorage.getItem("UserName");
  const usersEmail = localStorage.getItem("UserEmail");

  var params = {
    sendername: "LearnerLicenseHQ",
    to: usersEmail,
    subjects: "Your practice learners license test has returned",
    message: `Hello ${usersName}  your results have returned you got ${userScore}/${questions.length}`,
  };
  let serviceId = "service_0cea2w7";
  let templateId = "template_hbxiot9";

  emailjs.send(serviceId, templateId, params).then((res) => {
    alert("Email sent Succ");
  });
  //added the email function so do not redo the test alot,and im actually doing well i do not need any assistance W.
}
