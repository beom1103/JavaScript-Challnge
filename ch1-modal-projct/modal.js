const chickenModalBtn = document.querySelector(".chicken");
const BeerModalBtn = document.querySelector(".beer");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

chickenModalBtn.addEventListener("click", () => {
  modal.classList.add("open-chicken");
});

BeerModalBtn.addEventListener("click", () => {
  modal.classList.add("open-beer");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-chicken", "open-beer");
});
