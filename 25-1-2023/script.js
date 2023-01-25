// Sulla base della lezione del giorno, creare un mock in formato JSON. Riprendere uno degli esercizi passati
// (es. generatore di una card prodotto), eliminare eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare i dati.

// Avanzato
// Creare un grafico a piacere basato su una api a scelta oppure su un mock costruito ad hoc.

/*********************************** DA FARE ***************************************************************/
// crea oggetto json in mock.json ed esportalo in script
// crea card con funzione generatrice
// popola le card con json

import myJson from "./mock.json" assert { type: "json" };
import { GET } from "./api.js";

const bodyEl = document.querySelector("body");

// CREO FUNZIONE GENERATRICE DI CARD
const countriesCards = (data) => {
  // DESTRUCTURING: prendo il nome delle chiavi dentro l'array e lo uso come valori dei text content
  const { paese, lingua, continente } = data;

  const card = document.createElement("div");
  const country = document.createElement("h2");
  const language = document.createElement("p");
  const continent = document.createElement("p");

  card.className = "card";

  country.className = "country";
  country.textContent = paese;

  language.className = "language";
  language.textContent = lingua;

  continent.className = "continent";
  continent.textContent = continente;

  card.append(country, language, continent);
  return card;
};

// MI ITERO OGNY OGGETTO CON MAP E APPENDO LA FUNZIONE GENERATRICE AL BODY
myJson.countries.map((item) => bodyEl.appendChild(countriesCards(item)));

// *************************************  AVANZATO  ***********************************************

// const container = document.querySelector(container_grafico);

// const weightGenerator = (value, weight) => {
//   const title = document.createElement("h3");
//   const tower = document.createElement("div");
//   const statusBar = document.createElement("div");

//   tower.className = "tower_container";

//   title.className = "title_container";
//   title.textContent = value;

//   statusBar.className = "status_bar";
//   statusBar.style.height = 0;

//   tower.append(title, statusBar);
//   return tower;
// };

// container.append(weightGenerator("30-40", 10));
