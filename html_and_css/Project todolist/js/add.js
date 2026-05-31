const addNew = document.querySelector(".add-new");
console.log(addNew);

const addNewList = function () {
  form.classList.remove("hidden");
  list.classList.add("hidden");
  signUp.classList.add("hidden");
};
addNew.addEventListener("click", addNewList);
