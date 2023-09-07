const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answer5 = document.querySelector(".answer5");
const answer6 = document.querySelector(".answer6");

const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");
const question6 = document.querySelector(".question6");

const caret1 = document.querySelector(".caret1");
const caret2 = document.querySelector(".caret2");
const caret3 = document.querySelector(".caret3");
const caret4 = document.querySelector(".caret4");
const caret5 = document.querySelector(".caret5");
const caret6 = document.querySelector(".caret6");

question1.addEventListener("click", () => {
  answer1.classList.toggle("answer1-open");
  caret1.classList.toggle("caret1-rotate");
});

question2.addEventListener("click", () => {
  answer2.classList.toggle("answer2-open");
  caret2.classList.toggle("caret2-rotate");
});
question3.addEventListener("click", () => {
  answer3.classList.toggle("answer3-open");
  caret3.classList.toggle("caret3-rotate");
});
question4.addEventListener("click", () => {
  answer4.classList.toggle("answer4-open");
  caret4.classList.toggle("caret4-rotate");
});
question5.addEventListener("click", () => {
  answer5.classList.toggle("answer5-open");
  caret5.classList.toggle("caret5-rotate");
});

question6.addEventListener("click", () => {
  answer6.classList.toggle("answer6-open");
  caret6.classList.toggle("caret6-rotate");
});

document.addEventListener("click", function (event) {
  if (event.target.closest(".question6")) return;
  answer6.classList.remove("answer6-open");
  caret6.classList.remove("caret6-rotate");
});

document.addEventListener("click", function (event) {
  if (event.target.closest(".question5")) return;
  answer5.classList.remove("answer5-open");
  caret5.classList.remove("caret5-rotate");
});
document.addEventListener("click", function (event) {
  if (event.target.closest(".question4")) return;
  answer4.classList.remove("answer4-open");
  caret4.classList.remove("caret4-rotate");
});
document.addEventListener("click", function (event) {
  if (event.target.closest(".question3")) return;
  answer3.classList.remove("answer3-open");
  caret3.classList.remove("caret3-rotate");
});
document.addEventListener("click", function (event) {
  if (event.target.closest(".question2")) return;
  answer2.classList.remove("answer2-open");
  caret2.classList.remove("caret2-rotate");
});
document.addEventListener("click", function (event) {
  if (event.target.closest(".question1")) return;
  answer1.classList.remove("answer1-open");
  caret1.classList.remove("caret1-rotate");
});

//done with this just need to href to the accoriding file when done.
/* sendername: localStorage.getItem(UserName),
        to: localStorage.getItem(UserEmail), */
