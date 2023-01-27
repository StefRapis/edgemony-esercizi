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

import { cE, qS, GET } from "./utils.js";

const containerTv = qS(".tv_shows");
const mostPopular = qS(".most_popular");
const topRated = qS(".top_rated");

const tvCardGenerator = (data) => {
  const tvCardEl = cE("div");
  const tvImage = cE("img");

  tvCardEl.className = "card_element";
  tvImage.className = "tv_image";

  if (data.poster_path) {
    tvImage.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }

  tvImage.setAttribute("alt", data.title);

  tvCardEl.appendChild(tvImage);
  return tvCardEl;
};

GET("popular").then((data) =>
  data.results.map((show) => mostPopular.append(tvCardGenerator(show)))
);

GET("top_rated").then((data) =>
  data.results.map((show) => topRated.append(tvCardGenerator(show)))
);
