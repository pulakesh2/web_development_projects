"use trict";

//Target the DOM
const login = document.querySelector(".login-page");
const signup = document.querySelector(".sign-up");
const closeLogin = document.querySelector(".close-login");
//open the login page function-->
const openLoginPage = () => {
  login.classList.remove("hidden");
};
//close the login page function-->
const closeLoginPage = () => {
  login.classList.add("hidden");
};

//EVENT-->
signup.addEventListener("click", openLoginPage);
closeLogin.addEventListener("click", closeLoginPage);
