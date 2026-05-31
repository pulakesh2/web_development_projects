const imagecard = document.querySelectorAll(".card-image");
const authorPuiyi = document.querySelector(".puiyi");
const authorChloe = document.querySelector(".chloe");
const authorRomero = document.querySelector(".romero");

const popup = document.querySelector(".popup-image");
const modalImage = document.querySelector(".model-image");
// const overlay = document.querySelector(".overlay");
// const openAuthorImage = () => {
//   popup.classList.remove("hidden");
//   displayImage();
// };

const openAuthorChloe = () => {
  popup.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  displayChloe();
};

const openAuthorPuiyi = () => {
  popup.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  displayPuiyi();
};

const openAuthorRomero = () => {
  popup.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  displayRomero();
};

const closeAuthorImage = () => {
  popup.classList.add("hidden");
  // overlay.classList.add("hidden");
};

// const displayImage = () => {
//   document.querySelector(".model-image").src = "modalimages/i--2.png";
// };

const displayPuiyi = () => {
  document.querySelector(".model-image").src = "modalimages/i--2.png";
};

const displayChloe = () => {
  document.querySelector(".model-image").src = "modalimages/i--1.png";
};

const displayRomero = () => {
  document.querySelector(".model-image").src = "modalimages/i--3.png";
};

//EXIT THE IMAGE
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closeAuthorImage();
  }
  if (
    e.key === "Escape" &&
    !document.querySelector(".popup-image-1").classList.contains("hidden")
  ) {
    closeFounderImage();
  }
});
// overlay.addEventListener("click", closeAuthorImage);
// document.getElementById("myImg").src = "hackanm.gif";
authorPuiyi.addEventListener("click", openAuthorPuiyi);
authorChloe.addEventListener("click", openAuthorChloe);
authorRomero.addEventListener("click", openAuthorRomero);
