// ### Esercizio 1

// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, seguendo le logiche viste durante la lezione.
// Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

// ### Avanzato

// Creare il template dello slider cui sopra completamente dinamico (via Javascript).

// CREO ARRAY DI IMMAGINI ATTRAVERSOL LINK
const images = [
  "https://picsum.photos/300/400?1",
  "https://picsum.photos/300/400?2",
  "https://picsum.photos/300/400?3",
];

// PESCO GLI ELEMENTI CHE MI SERVE DINAMICIZZARE DAL DOC. HTML
const slidingImageEl = document.querySelector(".sliding__images");
const leftBtnEl = document.querySelector(".first__btn");
const centerBtnEl = document.querySelector(".second__btn");
const rightBtnEl = document.querySelector(".third__btn");

// CREO 3 FUNZIONI CHE SCATENINO GLI EVENT LISTENERS SU CIASCUN BOTTONE
function leftButton() {
  leftBtnEl.style.backgroundColor = "grey";
  centerBtnEl.style.backgroundColor = "transparent";
  rightBtnEl.style.backgroundColor = "transparent";
  slidingImageEl.setAttribute("src", images[0]);
}

leftBtnEl.addEventListener("click", leftButton);

function centerButton() {
  centerBtnEl.style.backgroundColor = "grey";
  rightBtnEl.style.backgroundColor = "transparent";
  leftBtnEl.style.backgroundColor = "transparent";
  slidingImageEl.setAttribute("src", images[1]);
}

centerBtnEl.addEventListener("click", centerButton);

function rightButton() {
  rightBtnEl.style.backgroundColor = "grey";
  centerBtnEl.style.backgroundColor = "transparent";
  leftBtnEl.style.backgroundColor = "transparent";
  slidingImageEl.setAttribute("src", images[2]);
}

rightBtnEl.addEventListener("click", rightButton);

// leftBtnEl.addEventListener(
//   "click",
//   () => (leftBtnEl.style.backgroundColor = "grey")
// );
// leftBtnEl.addEventListener("click", () =>
//   slidingImageEl.setAttribute("src", images[0])
// );
