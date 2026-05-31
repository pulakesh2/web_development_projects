"use strict";

//Button Selector-->

const chickenBtn = document.querySelector(".chicken");
const porkBtn = document.querySelector(".pork");
const duckBtn = document.querySelector(".duck");
const orderBtn = document.querySelector(".order-btn");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
console.log(submit);
console.log(chickenBtn);
console.log(porkBtn);
// console.log(customizeBtn);
const chickenStarter = [
  "chilli chicken",
  "chicken malai kabab",
  "chicken nuggets",
  "chicken tikka",
  "Chicken Poppers",
  "Bhuna Chicken Wings",
  "Chicken 65",
];

const porkStarter = [
  "Roast Pork Belly",
  "Thai Pork Salad",
  "Pork Ribs",
  "Pork Vindaloo",
  "Jamaican Pork Chops",
  "Lemon Pork",
];
const duckStarter = [
  "Duck Ham",
  "Peppered Duck",
  "Barbeque Chilli Duck",
  "Roasted Duck",
  "Pan Fried Duck",
  "Chinese Spice Duck Salad",
  "Smoky Duck Salad",
];

//take the input--->

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const orderName = document.getElementById("order");

const displayStarter = document.querySelector(".display-starter");
const displayMsg = document.querySelector(".done");
const overlay = document.querySelector(".overlay");
console.log(displayMsg);
// console.log(customizeBtn);
// console.log(chickenBtn);
// console.log(displayStarter);

const displayChickenItems = function (e) {
  displayStarter.style.backgroundImage = "url('images/chicken-menu.jpg')";
  displayStarter.style.backgroundPosition = "center";
  let text = "<h3>Items in our Menu😊😊😊</h3><ul>";
  if (chickenBtn.className === "chicken") {
    for (let i = 0; i < chickenStarter.length; i++) {
      text +=
        `<li class="flex-class">${i + 1}. ${chickenStarter[i]}` +
        `<p>` +
        (i + 6) * (i + 8) +
        `₹</p></li>`;
    }
    orderBtn.classList.remove("hidden");
    displayStarter.classList.remove("hidden");
    form.classList.add("hidden");
    displayMsg.classList.add("hidden");
    overlay.classList.remove("hidden");
  }
  displayStarter.innerHTML = text + "</ul>";
  // console.log(customizeBtn);
  console.log(e);
};

const displayPorkItems = function (e) {
  displayStarter.style.backgroundImage = "url('images/pork-menu.jpg')";
  let text = "<h3>Items in our Menu😊😊😊</h3><ul>";
  if (porkBtn.className === "pork") {
    for (let i = 0; i < porkStarter.length; i++) {
      text +=
        `<li class="flex-class">${i + 1}. ${porkStarter[i]}` +
        `<p>` +
        (i + 10) * (i + 8) +
        `₹</p></li>`;
    }
  }
  displayStarter.innerHTML = text + "</ul>";
  orderBtn.classList.remove("hidden");
  displayStarter.classList.remove("hidden");
  displayMsg.classList.add("hidden");
  overlay.classList.remove("hidden");
  form.classList.add("hidden");
};

const displayDuckItems = function (e) {
  displayStarter.style.backgroundImage = "url('images/duck-menu.jpg')";
  displayStarter.style.backgroundPosition = "left center";
  let text = "<h3>Items in our Menu😊😊😊</h3><ul>";
  if (duckBtn.className === "duck") {
    for (let i = 0; i < duckStarter.length; i++) {
      text +=
        `<li class="flex-class">${i + 1}. ${duckStarter[i]}` +
        `<p>` +
        (i + 12) * (i + 10) +
        `₹</p></li>`;
    }
  }
  displayStarter.innerHTML = text + "</ul>";
  orderBtn.classList.remove("hidden");
  displayStarter.classList.remove("hidden");
  form.classList.add("hidden");
  displayMsg.classList.add("hidden");
  overlay.classList.remove("hidden");
  // console.log(customizeBtn);
};

const displayForm = function () {
  displayStarter.classList.add("hidden");
  form.style.backgroundImage = "url('images/form.jpg')";
  orderBtn.classList.add("hidden");
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
  firstName.value = "";
  lastName.value = "";
  orderName.value = "";
};

const doneOrder = function (e) {
  // console.log(firstName.value);
  // console.log(lastName.value);
  // console.log(orderName.value);
  e.preventDefault();
  displayMsg.classList.remove("hidden");
  displayMsg.style.backgroundImage = "url('images/thanks.jpg')";
  displayMsg.style.backgroundPosition = "center";
  form.classList.add("hidden");
  overlay.classList.remove("hidden");
  displayMsg.innerHTML = `<h1>Hi ${firstName.value} ${lastName.value}, we are greatful that you are ordering ${orderName.value}, have fun and eat healthy😊😊😊</h1>`;
};

// EVENTS---->

chickenBtn.addEventListener("click", displayChickenItems);
porkBtn.addEventListener("click", displayPorkItems);
duckBtn.addEventListener("click", displayDuckItems);
orderBtn.addEventListener("click", displayForm);
submit.addEventListener("click", doneOrder);
// displayItems(porkStarter);

// console.log(customizeBtn[0]);

//BACKUP OPTION----->
// const customizeYourFood = function (
//   ingredient1,
//   ingredient2,
//   ingredient3,
//   ingredient4
// ) {
//   console.log(`${ingredient1}, ${ingredient2},${ingredient3},${ingredient4}`);
// };
// const food = ["salt", "water", "juice"];
// customizeYourFood(...food);

overlay.addEventListener("click", function (e) {
  displayMsg.classList.add("hidden");
  form.classList.add("hidden");
  displayStarter.classList.add("hidden");
  overlay.classList.add("hidden");
  orderBtn.classList.add("hidden");
});
