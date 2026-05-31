"use strict";

// target DOM-->
const container = document.querySelector(".constainer");
const clockBox = document.querySelector(".clock-box");
const clock = document.querySelector(".clock");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const userInput = document.querySelector(".user-input");

let timer;
let time;

// start clock function-->
const startClock = function () {
  //   clock.style.fontSize = "5rem";

  // if there is also timer running then, must stop the previous timer
  if (timer) clearInterval(timer);
  time = Number(userInput.value);
  userInput.value = "";

  //   clock-->
  timer = setInterval(() => {
    // minute and second convert-->
    let minute = String(Math.trunc(time / 60)).padStart(2, 0);
    let second = String(time % 60).padStart(2, 0);

    // clock timer-->
    clock.textContent = `${minute}:${second}`;

    // stop clock
    if (time === 0) {
      clearInterval(timer);
      clock.textContent = "time over";
    }
    time--;
  }, 1000);
};

// stop clock function-->
const stopClock = function () {
  if (timer) clearInterval(timer);
  clock.textContent = `Clock Stop`;
  //   clock.style.fontSize = "3rem";
};

btnStart.addEventListener("click", startClock);

btnStop.addEventListener("click", stopClock);
