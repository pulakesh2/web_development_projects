"use strict";

//Target-->
//buttons-->
const btn = document.querySelectorAll(".btn");
const buttons = [...btn];
// console.log(buttons[0]);
//hidden-box-->
const hidden = document.querySelectorAll(".hidden-content");
const hiddenBoxs = [...hidden];
console.log(hiddenBoxs);

//Event function-->
const openBox = function (e) {
  console.log(e.originalTarget === buttons[0]);
  for (let i = 0; i < buttons.length; i++) {
    if (e.originalTarget === buttons[i]) {
      hiddenBoxs[i].classList.remove("hidden");
    } else {
      hiddenBoxs[i].classList.add("hidden");
    }
  }
};
//Event-->
for (const button of buttons) {
  button.addEventListener("click", openBox);
}
