// Esercizio 1
// Sulla base dell'esercizio del giorno:

// Creare un account su https://developers.themoviedb.org/
// Ottenere una API KEY
// creare una pagina web che effettui anche una sola chiamata GET stavolta per renderizzare una lista di serie tv,
// esempio popular o top rated o entrambe, e visaulizzare a schermo con uno stile a piacere.

// Avanzato
// Sulla base dell'immagine mockup avanzato presente in questa repository, creare una pagina (a parte rispetto
// all'esercizio 1) che incorpori una casella input di ricerca e un pulsante che:

// digitato il nome di un film sulla input
// cliccando il pulsante 'Search'
// effettui una chiamata GET al film specifico
// renderizzi il risultato proprio sotto la input, mostrando almeno immagine e titolo del film ricercato

import {
  cE,
  qS,
  qSA,
  GET,
  GET3,
  GETsearch,
  tvCardGenerator,
  modalCreator,
} from "./utils.js";

const containerTv = qS(".tv_shows");
const mostPopular = qS(".most_popular");
const topRated = qS(".top_rated");
const modal = qS(".modal");
const overlay = qS(".overlay");
const searchInput = qS(".search_input");

//CHIAMATE GET CHE CANCELLO PERCHE LE RISOLVO TUTTE INSIEME CON IL PROMISEALL

// GET("popular").then((data) =>
//   data.results.map((show) => mostPopular.append(tvCardGenerator(show)))
// );

// GET("top_rated").then((data) =>
//   data.results.map((show) => topRated.append(tvCardGenerator(show)))
// );

// MI CHIAMO ALLO STESSO MOMENTO I DUE GET
Promise.all([GET("popular"), GET("top_rated")])
  .then((data) => {
    data[0].results.map((show) => mostPopular.append(tvCardGenerator(show)));
    data[1].results.map((show) => topRated.append(tvCardGenerator(show)));
  })
  .then(() => {
    // QUI MI PESCO TUTTE LE CARD CREATE DINAMICAMENTE, DENTRO IL THEN ASINCRONO
    const cardsEl = qSA(".card_element");

    //  SU TUTTE LE CARD APPLICO UN EVENTO CHE MI FA UNA CHIAMATA CHE MI EVOCA L'ID DEL FILM CLICCATO
    cardsEl.forEach((tvCardEl) =>
      tvCardEl.addEventListener("click", () =>
        GET3("tv", tvCardEl.id).then((selectedShow) => {
          modal.appendChild(modalCreator(selectedShow));
          modal.style.display = "flex";
        })
      )
    );
  });

overlay.addEventListener("click", () => {
  const showModal = qS(".modal_container");
  showModal.remove();
  modal.style.display = "none";
});

let inputWord = "";
const data = await res.json();

searchInput.addEventListener("input", (event) => {
  inputWord = event.data;
  console.log(inputWord);

  ///// MI SONO INCARTATA QUI! MI DA ERRORE 422 e CANNOT READ PROPERTIES OF UNDEFINED A RIGA 82 (riferito a name)

  GETsearch("search", "tv").then((data) => {
    if (data.results.name.includes(inputWord))
      bodyEl.appendChild(modalCreator(show));
  });
});




GETsearch("search", "tv").then ((data) => 
const filteredShows = data.filter((show) => data.results.name === inputWord))


const arrayElementiFiltrati = arrayFilm.filter(
  (item) => item.name === inputSearch.value
);
console.log(arrayElementiFiltrati);