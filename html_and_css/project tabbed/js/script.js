const navContainer = document.querySelector(".nav__container");
const navs = document.querySelectorAll(".nav__container--nav");

const tabs = document.querySelectorAll(".tab__container");

console.log(navs);

navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__container--nav");

  if (!clicked) return;

  navs.forEach((nav) => {
    nav.classList.remove("nav__container--nav-active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("tab__container-active");
  });

  clicked.classList.add("nav__container--nav-active");

  document
    .querySelector(`.tab__container-${clicked.dataset.nav}`)
    .classList.add("tab__container-active");
});
