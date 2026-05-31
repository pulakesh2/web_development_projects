console.log("hello world");
console.log(document.querySelector(".model-Img--1"));
console.log(document.querySelector(".model-Img--1").clicked);
const imagecard = document.querySelectorAll(".card-image");
console.log(imagecard);
const authorPuiyi = document.querySelector(".puiyi");
console.log(document.querySelector(".model-image"));

// for (let i = 0; i <= 3; i++) {
//   document
//     .querySelector(`.model-Img--${i + 1}`)
//     .addEventListener("click", () => {
//       console.log("img is clicked");
//     });
// }

// const authorImage = document.querySelectorAll(".section--1");
// console.log(authorImage);
// authorImage.addEventListener("click", function () {
//   console.log("hello");
// });
const popup = document.querySelector(".popup-image");
const modalImage = document.querySelector(".model-image");

// console.log(authorImages);
// authorImages.addEventListener("click", function () {
//   console.log("hee");
// });

const openAuthorImage = () => {
  // console.log(e.target);
  popup.classList.remove("hidden");
  displayImage();
};

const closeAuthorImage = () => {
  popup.classList.add("hidden");
};

const displayImage = () => {
  document.querySelector(".model-image").src = "modalimages/i--2.png";
  //   document.querySelector(".model-image").src = link;
  // for (let i = 0; i < 3; i++) {
  //   document.querySelector(`.model-img--${i + 1}`).src = `modalimage/i--${
  //     i + 1
  //   }.png`;
  //}
  // if(document. getElementById('button'). clicked == true)
  // if (imagecard[0].clicked) {
  //   console.log("chloe clicked");
  // }
};

//EXIT THE IMAGE
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closeAuthorImage();
  }
});

// document.getElementById("myImg").src = "hackanm.gif";
authorPuiyi.addEventListener("click", openAuthorImage);
// authorChloe.addEventListener("click", openAuthorImage);
// authorRomero.addEventListener("click", openAuthorImage);

//Event EXECUTE----->
// for (let i = 0; i < 3; i++) {
//   imagecard[i].addEventListener("click", openAuthorImage);
// }
