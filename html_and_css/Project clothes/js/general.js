"use strict";

//Declaration of DOM-->
const modeBtn = document.querySelector(".mode");
const imgFilippa = document.querySelectorAll(".filippa");
const modelImage = document.querySelector(".model-image");

const contentEl = document.querySelector(".content");
const modeIcon = document.querySelector(".mode-icon");

let darkModes;

// console.log(modeBtn, modelImage, imgSlide, imgFilippa);

//Event Function-->
// 1-->

const imageClick = function (e) {
  let currenModel = modelImage.attributes[0].nodeValue;

  modelImage.attributes[0].nodeValue = e.originalTarget.attributes[0].nodeValue;
  e.originalTarget.attributes[0].nodeValue = currenModel;
};

// 2-->

const enableMode = function () {
  if (darkModes) {
    lightMode();
    darkModes = false;
  } else {
    darkMode();
    darkModes = true;
  }
};

//Event -->
for (const img of imgFilippa) {
  img.addEventListener("click", imageClick);
}

// MODE -->

modeBtn.addEventListener("click", enableMode);

const darkMode = function () {
  contentEl.style.color = "#fff";
  document.body.style.backgroundColor = "#000";
  modeIcon.style.color = "#fff";
};

const lightMode = function () {
  contentEl.style.color = "#000";
  document.body.style.backgroundColor = "#fff";
  modeIcon.style.color = "#000";
};
