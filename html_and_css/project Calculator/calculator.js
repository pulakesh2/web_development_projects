"use strict";
// console.log("hello");

// target DOM-->
const calcNum = document.querySelectorAll(".calc-num");
const calcOperator = document.querySelectorAll(".calc-operator");
const calcFunction = document.querySelectorAll(".calc-function");
const calcOperation = document.querySelectorAll(".operation");
const display = document.querySelector(".display");

// AUDIO FILE-->
const audio = new Audio("click.mp3");
console.log(audio);

//create array-->
const calcData = [...calcNum, ...calcOperator];

//create result-->
const result = document.querySelector(".result");

//whole DATA-->
const calcEl = [
  ...calcNum,
  ...calcOperator,
  ...calcFunction,
  ...calcOperation,
  result,
];

//MAIN FUNCTION-->
const calculation = function () {
  if (display.innerText.includes("+")) {
    display.innerText = display.innerText
      .split("+")
      .reduce((acc, el) => Number(acc) + Number(el));
  }
  if (display.innerText.includes("-")) {
    display.innerText = display.innerText
      .split("-")
      .reduce((acc, el) => Number(acc) - Number(el));
  }
  if (display.innerText.includes("x")) {
    display.innerText = display.innerText
      .split("x")
      .reduce((acc, el) => Number(acc) * Number(el));
  }
  if (display.innerText.includes("/")) {
    display.innerText = display.innerText
      .split("/")
      .reduce((acc, el) => Number(acc) / Number(el));
  }
  if (display.innerText === "NaN") {
    display.innerText = "Multiple calculation not Supported right now";
  }
};

//DISPLAY FUNCTION
const calcDisplay = function (e) {
  display.innerText += e.originalTarget.innerText;
};

//CLEAR FUNCTION-->
const clearDisplay = function () {
  display.innerText = "";
};

// callBack function-->
const calcBack = function () {
  display.innerText = display.innerText.slice(0, display.innerText.length - 1);
};

//calculation Event Function
const calcCalculation = function () {
  calculation();
};

// INDIVIDUAL OPERATION-->
const calculationX = function (e) {
  const displayNum = display.innerText;

  if (e.originalTarget.innerText == "x2") {
    display.innerText = displayNum * displayNum;
  } else if (e.originalTarget.innerText == "%") {
    display.innerText = displayNum / 100;
  } else if (e.originalTarget.innerText == "log(x)") {
    display.innerText = "dont know the formula of log x 🤣😒";
  }
};

//DISPLAY DATA-->
for (const el of calcData) {
  el.addEventListener("click", calcDisplay);
}

//CLEAR EVENT-->
calcFunction[1].addEventListener("click", clearDisplay);
calcFunction[0].addEventListener("click", calcBack);

//MAIN EVENT-->
result.addEventListener("click", calcCalculation);

//For CALCULATION X EVENT-->
for (const el of calcOperation) {
  el.addEventListener("click", calculationX);
}

//PLay EVENT-->
for (const el of calcEl) {
  el.addEventListener("click", () => audio.play());
}
