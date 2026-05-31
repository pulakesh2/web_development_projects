"use strict";

//Target element-->
const signBtn = document.querySelector(".sign-btn");
const signUp = document.querySelector(".signup");
// const mainPage = document.querySelector(".main-page");
const submitBtn = document.querySelector(".submit");

console.log(signUp);
console.log(mainPage);
//Event Function-->
const signUpDisplay = function (e) {
  e.preventDefault();
  signUp.classList.remove("hidden");
  mainPage.classList.add("hidden");
  overlay.classList.remove("hidden");
};
const mainPageDisplay = function () {
  signUp.classList.add("hidden");
  mainPage.classList.remove("hidden");
  overlay.classList.add("hidden");
};

//Event-->
signBtn.addEventListener("click", signUpDisplay);
submitBtn.addEventListener("click", mainPageDisplay);
