"use strict";

const showPassowrdBtn = document.querySelector(".add-notes-btn");
const passwordForm = document.querySelector(".section-password");
const sectionHero = document.querySelector(".section-hero");
const overlay = document.querySelector(".overlay");

//DISPLAY PASSWORD FORM-->
const displayPasswordForm = function () {
  //   passwordForm.classList.remove("hidden");
  passwordForm.style.opacity = "1";
  overlay.classList.remove("hidden");
};

//CLOSE PASSWORD FORM-->
const closePasswordForm = function () {
  passwordForm.style.opacity = "0";
  overlay.classList.add("hidden");
};

//EVENT-->
showPassowrdBtn.addEventListener("click", displayPasswordForm);
overlay.addEventListener("click", closePasswordForm);
