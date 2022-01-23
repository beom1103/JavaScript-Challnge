// animal
const chickenModalBtn = document.querySelector(".chicken");
const beerModalBtn = document.querySelector(".beer");
const jsModalBtn = document.querySelector(".js");
const dogModalBtn = document.querySelector(".dog");

// handle modal
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const animalName = document.getElementById("name");

const openModal = (e) => {
  const id = e.target.id;
  const animal = e.target.name;
  animalName.textContent = animal;
  modal.classList.add(`open-${id}`);
};

chickenModalBtn.addEventListener("click", (e) => {
  openModal(e);
});

beerModalBtn.addEventListener("click", (e) => {
  openModal(e);
});

jsModalBtn.addEventListener("click", (e) => {
  openModal(e);
});

dogModalBtn.addEventListener("click", (e) => {
  openModal(e);
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-chicken", "open-beer", "open-js", "open-dog");
  animalName.textContent = "";
});

modal.addEventListener("click", () => {
  modal.classList.remove("open-chicken", "open-beer", "open-js", "open-dog");
  animalName.textContent = "";
});
