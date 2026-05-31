// console.log("hello world");

//target element-->
const btnOn = document.querySelector(".on");
const btnOff = document.querySelector(".off");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const bulb = document.querySelector(".bulb");

//function Event-->
const lightOn = function () {
  body.style.backgroundColor = "#000";
  h1.style.color = "#fff";
  bulb.src = "image/on.png";
};
const lightOff = function () {
  body.style.backgroundColor = "#fff";
  h1.style.color = "#000";
  bulb.src = "image/off.png";
};

//Events-->
btnOn.addEventListener("click", lightOn);
btnOff.addEventListener("click", lightOff);
