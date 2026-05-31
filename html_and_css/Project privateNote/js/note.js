"use strict";

const recieverNameInput = document.querySelector(".reciever-name-input");
const recieverPasswordInput = document.querySelector(
  ".reciever-password-input"
);
const noteTextArea = document.querySelector(".note-text-area");

const btnAdd = document.querySelector(".btn-add");
const btnList = document.querySelector(".btn-list-page");
const noteSection = document.querySelector(".note");
const noteListStatus = document.querySelector(".inbox-status");

//Password-->
const userName = document.querySelector(".user-input-name");
const userPassword = document.querySelector(".user-input-password");

const acountName = document.querySelector(".Acount");

// create userName
const createUserName = function (acc) {
  acc.userName = acc.fullName
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
};
accounts.forEach((acc) => createUserName(acc));
console.log(noteListStatus);

//add to the list-->
let counter = 0;

let currentAcount;
let recieverAcount;

//create add list to list inbox
const addList = function (acc) {
  let time = new Date();
  const html = `
  <li class="list-status flex list-cols">
  <p class="user-status"><span class="sl-no">${(counter = counter + 1)}</span>
  ${acc.fullName}</p>
  <p class="reciever-stauts">${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}</p>
  <p class="status">send</p>
</li>
  `;
  noteListStatus.insertAdjacentHTML("afterbegin", html);
};

//show List Page
const showListPage = function (e) {
  e.preventDefault();
  currentAcount = accounts.find((acc) => acc.userName === userName.value);
  if (currentAcount.passWord === userPassword.value) {
    acountName.textContent = `hi, ${currentAcount.fullName.split(" ")[0]}`;
    sectionHero.classList.add("hidden");
    sectionHero.classList.add("hidden-opacity");
    noteSection.classList.remove("hidden");
    noteSection.style.opacity = 1;
    closePasswordForm();
  }
  //   console.log(currentAcount);
};
btnList.addEventListener("click", showListPage);

//Transfer Page
const addListData = function (e) {
  e.preventDefault();

  if (
    currentAcount.userName === recieverNameInput.value &&
    currentAcount.passWord === recieverPasswordInput.value &&
    noteTextArea.value != ""
  ) {
    addList(currentAcount);
    noteTextArea.value = "";
  }
};

//click button to add list
btnAdd.addEventListener("click", addListData);
