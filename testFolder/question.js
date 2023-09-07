const questionContainer = document.getElementById("questionsBox"); // Replace with your container element

const questions = [
  {
    question: "What is 2 + 2?",
    imgElement: "../media/Untitled.png",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "how big is yout glizzy",
    imgElement: "../media/Untitled.png",
    answers: [
      { text: "small (sigh)", correct: true },
      { text: "microphobia type", correct: true },
      { text: "average", correct: false },
      { text: "extra tonka", correct: false },
    ],
  },
  {
    question: "do you like men?",
    imgElement: "../media/Untitled.png",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },

  {
    question:
      "The ____ warns other road users of your intentions to steer to the right or the left, or to turn to the right or left.",
    imgElement: "../media/Untitled.png",
    answers: [
      { text: "5", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "11", correct: false },
    ],
  },
];

questions.forEach((question) => {
  const imgElement = document.createElement("img");
  imgElement.src = question.imgElement;
  questionContainer.appendChild(imgElement);
});
