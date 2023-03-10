// Esercizio 1
// Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando ASYNC / AWAIT) che effettui una chiamata al seguente
// endpoint: https://dummyjson.com/quotes.

// Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1. Per qulunque riferimento utilizzare la
// documentazione presente al seguente indirizzo: https://dummyjson.com/
// Avanzate
// Sulla base dell'esercizio 1, riadattare il proprio codice al fine di prevedere anche un pulsante al cui click su di esso,
// venga generata una nuova quote, in modo del tutto random.

import { cE, qS, cardCreator } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");

// CREO CONTAINER PER LA CARD CHE CONTERRA' L'ELEMENTO DINAMICO "QUOTE"
const container = cE("div");
container.className = "container";
bodyEl.appendChild(container);

GET("quotes/1").then((data) => container.appendChild(cardCreator(data)));
