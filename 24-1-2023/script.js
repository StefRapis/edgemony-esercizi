// Esercizio 1
// Sulla base della lezione del giorno, creare una paginetta che effettui una chiamata di tipo GET
// all'endpoint https://dummyjson.com/users, renderizzare la lista di utenti, creando delle cards con i valori
// a vostra scelta (es. nome, cognome, ecc...)

// Avanzato
// Sulla base dell'esercizio 1, creare un filtro tramite input che vada a filtrare la lista degli utenti per nome e/o cognome

// IMPORTO VARIABILI DAI FILE ESTERNI
import { qS, cE, userCreator, userDelete } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const searchEl = cE("input");
bodyEl.appendChild(searchEl);
let searchValue = "";

// INVOCO FUNZIONE "GET" con "users" come argomento E CONCATENO IL SECONDO "THEN" DELLA FETCH CHE MI PRENDE I DATI E ME LI ITERA CON MAP,
// DOPO APPENDE AL BODY LA FUNZIONE UserCREATOR
// GET("users?limit=12").then((data) =>
//   data.users.map((user) => bodyEl.appendChild(userCreator(user)))
// );

// CREO FUNZIONE RICERCA SU INPUT CON ADDEVENTLISTENER E INCLUDO LA CHIAMATA GET
searchEl.addEventListener("input", (e) => {
  userDelete();
  searchValue = e.target.value;

  GET("users?limit=12").then((data) =>
    data.users.map((user) => {
      if (user.firstName.includes(searchValue))
        bodyEl.appendChild(userCreator(user));
    })
  );
});

//************************************************** APPUNTI **********************************************************

// SE NON VEDI LA CARD, FAI CONSOLE LOG DI "data" PER VEDERE LA STRUTTURA DELL'OGGETTO E SAPERE COSA PASSARE ALLA FUNZIONE

// GET("users").then((data) => bodyEl.appendChild(userCreator(data.users[2])));
// In questo caso sto entrando dentro tutto l'oggetto, poi dentro Users e poi pesco indice 2 dell'array. Visualizzo solo una card.
