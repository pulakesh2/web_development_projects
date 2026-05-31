"use strict";

//target the div-->
const items = document.querySelectorAll(".item");

//create an array to store function-->
const showitems = [];

//store the function in the array-->
for (let i = 0; i < items.length; i++) {
  const showitem = function () {
    items[i].classList.contains("open")
      ? items[i].classList.remove("open")
      : items[i].classList.add("open");
  };
  showitems.push(showitem);
}

//Add the event to the div-->
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", showitems[i]);
}

//BEHIND THE SCENE--->
// const item1 = document.querySelector(".item-1");
// const item2 = document.querySelector(".item-2");
// const item3 = document.querySelector(".item-3");

// const showitem1 = function (e) {
//   item1.classList.contains("open")
//     ? item1.classList.remove("open")
//     : item1.classList.add("open");
// };

// const showitem2 = function (e) {
//   item2.classList.contains("open")
//     ? item2.classList.remove("open")
//     : item2.classList.add("open");
// };

// const showitem3 = function (e) {
//   item3.classList.contains("open")
//     ? item3.classList.remove("open")
//     : item3.classList.add("open");
// };
// [showitem1, showitem2, showitem3];

// for (const [i, item] of items.entries()) {
//   item.addEventListener("click", showResult);
// }
// item1.addEventListener("click", showitem1);
// item2.addEventListener("click", showitem2);
// item3.addEventListener("click", showitem3);

// const icons = ...iconBtn.entries()
// console.log(...iconBtn.entries());
