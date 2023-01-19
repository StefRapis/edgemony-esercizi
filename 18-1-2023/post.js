const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const categoryInput = document.querySelector("#category");
const imageInput = document.querySelector("#image");
const formInput = document.querySelector("#form__input");

const buttonInput = document.querySelector("#button");

// MEMORIZZO I VALORI INSERITI NEL FORM IN UN OGGETTO CHE POI STAMPO IN CONSOLE (CIASCUN SINGOLO VALORE INSERITO)
// IN CONSOLE MI DAVA IL SEGUENTE ERRORE: "script.js:34 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')"
// HO PROVATO A RIMUOVERE FILE SCRIPT DA CONTACT.HTML MA NON FUNZIONAVA CMQ

formInput.addEventListener("submit", (e) => {
  e.preventDefault();

  const objForm = {
    title: titleInput.value,
    price: parseInt(priceInput.value),
    description: descriptionInput.value,
    categoryId: parseInt(categoryInput.value),
    images: [
      "https://images.pexels.com/photos/14759272/pexels-photo-14759272.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    ],
  };
});
