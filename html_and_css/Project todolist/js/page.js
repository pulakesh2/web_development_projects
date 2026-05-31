"use strict";

const form = document.querySelector(".form");
const btn = document.querySelector(".start");
const mainPage = document.querySelector(".main-page");
const overlay = document.querySelector(".overlay");

//click go to do list Event-->
const displayForm = function () {
  mainPage.classList.add("hidden");
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
  signUp.classList.add("hidden");
};
//click overlay-->
const reload = function () {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
  mainPage.classList.remove("hidden");
  list.classList.add("hidden");
};

// Events-->
btn.addEventListener("click", displayForm);
overlay.addEventListener("click", reload);
