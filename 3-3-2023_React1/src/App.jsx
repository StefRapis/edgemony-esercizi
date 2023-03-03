// 1-3-2023
/*Esercizio 1
Riprodurre quanto fatto a lezione (in termini di funzionalità) - copia e incolla non basta, bisogna chiedersi come 
funziona man mano che lo si implementa...

Esercizio 2
Creare una <Gallery />, posizionata tra la Hero e la lista dei prodotti. L'importante che le immagini vengano 
gestite tramile link remoto, all'interno di un array situtato allo stesso livello del componente <Gallery />.

Avanzato
Sfogo alla creatività con un nuovo componente.
Aggiungere alla lista dei prodotti e alla gallery un titolo che identifichi la sezione.*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 2-3-2023

/* Esercizio 1
Riprodurre la funzionalità night-mode sul vostro progettino.

Esercizio 2
Aggiungere o modificare il componente <Gallery />di modo che venga rappresentato come un carosello (presenza dei buttons cambio stato).

Avanzato
Replicare il funzionamento del dettaglio prodotto visto a lezione. Utilizzare una modale che si apre al click sul singolo prodotto. 
Il contenuto della stessa può essere una img o info generali sul prodotto.*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3-3-2023

/*Esercizio 1
Sostituire alla vostra applicazione la parte che si occupa della lista di items, in modo che piuttosto utilizzare il mock array, 
venga popolato un valore tramite useState, ottenuto per mezzo di una chiamata fetch all'interno di un useEffect.

Avanzato
Viene riproposto l'esercizio avanzato di ieri: Replicare il funzionamento del dettaglio prodotto visto a lezione. Utilizzare una modale che si apre al click sul singolo prodotto. 
Il contenuto della stessa può essere una img o info generali sul prodotto.*/

import { useState } from "react";

import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Philosophy from "./components/philosophy";
import Footer from "./components/footer";
import ProductsRepetition from "./components/productsRepetition";
import ButtonControl from "./components/buttonControl";
import Gallery from "./components/gallery";
import Slider from "./components/slider";
import ProductModal from "./components/productModal";

// import { prodottiLista } from "../src/mocks/listaProdotti";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  // setto useState per la modale
  const [modalImage, setModalImage] = useState(false);

  return (
    // utilizzo per la classe lo stesso nome del componente, tutti gli altri saranno figli di APP
    // con MAP mi ciclo ogni componente con appesa la sua prop

    // CLASSE DINAMICA: di default applica la classe "App", ma se la darkMode é attiva (cambiando useState da false a true), applica la classe darkMode.
    <div className={`App ${isDarkMode && "darkMode"}`}>
      <Header />
      <button
        className="darkModeBtn"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "⭐"}
      </button>
      <Hero title="Tutta un'altra storia" />
      <Philosophy commitment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard known printer took a galley of type." />
      <Gallery />
      <ButtonControl />
      <ProductsRepetition setModalImage={setModalImage} />
      <Slider />
      <Footer />

      {/* condizione: se la modalImage e impostata su true, mi renderizzi la modale */}
      {modalImage ? <ProductModal product={modalImage} /> : null}
    </div>
  );
};

// listDataLength={prodottiLista.length}

// esporto componente in index.js come componente principale di tutta l'applicazione
export default App;
