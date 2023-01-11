// ## Esercizio 1

// Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere, come immagini, testo o titoli, indispensabile pero aggiungere un button con una X come testo.

// Aggiungere un evento al cui click del mouse sulla class intera:

// - Cambi il colore del testo di tutta la card

// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - Elimini la card stessa

// ## Esercizio 2

// Completare la funzione quoteGen al fine di avere delle quotes che mostrino tanto il testo che l'autore del testo stesso.

document.body.style.background = "F7F5EB";

//CREO UNA FUNZIONE CHE CAMBI IL COLORE DEL TESTO DI TUTTA LA CARD:

const changeCardColour = () => {
  const cardTitle = document.querySelector(".h3__card");
  const cardParag = document.querySelector(".p__card");

  cardTitle.style.color = "#FDA769";
  cardParag.style.color = "#473C33";
};

const changeColour = document
  .querySelector(".card")
  .addEventListener("click", changeCardColour);

//CREO UNA FUNZIONE CHE RIMUOVA LA CARD:

// const deleteCard = () => {
//     const cardButton = document.querySelector(".button__card"),

//     cardButton.style.display = "none";
// }

// const deleteAllCard = document.querySelector(".button__Card").addEventListener("click", deleteCard);
