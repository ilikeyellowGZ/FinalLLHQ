const button = document.getElementById("submit-btn");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("UserName", `${username.value}`);
  localStorage.setItem("UserEmail", `${email.value}`);

  window.location.href = "../myOwnCarousel/index.html";
});
