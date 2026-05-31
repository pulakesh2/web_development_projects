"use strict";

//Target the images
const popupFounder = document.querySelector(".popup-image-1");
const founderImage = document.querySelector(".founder-image");
console.log(popupFounder);
const founderMia = document.querySelector(".mia");
console.log(founderMia);
const founderSunny = document.querySelector(".sunny");
const founderAmanda = document.querySelector(".amanda");

//Close Event-->
const closeFounderImage = () => {
  popupFounder.classList.add("hidden");
};

//open Event-->
const openFounderMia = () => {
  popupFounder.classList.remove("hidden");
  founderImage.src = "modalimages/i-5.jpg";
};

const openFounderSunny = () => {
  popupFounder.classList.remove("hidden");
  founderImage.src = "modalimages/i-4.jpg";
};

const openFounderAmanda = () => {
  popupFounder.classList.remove("hidden");
  founderImage.src = "modalimages/i-6.png";
};

//close the image-->

founderAmanda.addEventListener("click", openFounderAmanda);
founderMia.addEventListener("click", openFounderMia);
founderSunny.addEventListener("click", openFounderSunny);
