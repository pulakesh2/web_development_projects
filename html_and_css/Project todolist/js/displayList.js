"use strict";

const displayList = document.querySelector(".displayList");
// console.log(displayList);

const display = function () {
  list.classList.remove("hidden");
  form.classList.add("hidden");
};

displayList.addEventListener("click", display);
