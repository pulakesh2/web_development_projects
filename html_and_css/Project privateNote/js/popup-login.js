"use strict";

const showLoginBtn = document.querySelector(".login-btn");
const loginForm = document.querySelector(".section-login");
// const sectionHero = document.querySelector(".section-hero");
// const overlay = document.querySelector(".overlay");

console.log(showLoginBtn);
//DISPLAY PASSWORD FORM-->
const displayLoginPage = function (e) {
  e.preventDefault();
  //   passwordForm.classList.remove("hidden");
  loginForm.style.opacity = "1";
  overlay.classList.remove("hidden");
};

//CLOSE PASSWORD FORM-->
const closeLoginForm = function () {
  loginForm.style.opacity = "0";
  overlay.classList.add("hidden");
};

//EVENT-->
showLoginBtn.addEventListener("click", displayLoginPage);
overlay.addEventListener("click", closeLoginForm);
