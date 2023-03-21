/* 20-3-2023
 Esercizio 1
Sulla base della lezione del giorno, realizzare un'applicazione in react/vite che integri le api presenti al seguente endpoint https://www.thecocktaildb.com/api.php.

Lo stile può essere a piacere dello studente, ma obbligatorio:

utilizzare SASS
Avanzato
Spostare eventuale logica di filtri (come visto a lezione) dal componente principale (<App />) al componente che si occupa della lista stessa (caso della lezione, <Content />);

Per le liste presenti nel sito, creare un array di oggetti custom così da integrarli tramite map;

Creare una funzione che dalla API possa generare un array di stringhe, formato da ogni singolo ingrediente esistente come chiave all'interno di ogni singolo oggetto, raffigurante un cocktail.

///////////////////////////////////////////////////////////////////////////////////////////////////////// 

21-3-2023

Esercizio 1
Sulla base della lezione del giorno, rintracciare e creare tutte le variabili e i mixins necessari alla nostra applicazione. Chiaramente usare SASS.

Avanzato
Creare un componente che funga da 'simil-modale' al cui click su ogni singolo prodotto, mi apra la relativa scheda di informazioni.*/

import { useState, useEffect } from "react";
// import { GET } from "./utils/fetch";

import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import DrinkModal from "./components/drinkModal";

function App() {
  // const [cocktailList, setCocktailList] = useState([]);

  // useEffect(() => {
  //   GET("d").then(({ drinks }) => setCocktailList(() => drinks));
  // }, []);
  const [cocktailCategory, setCocktailCategory] = useState("");
  const [drinkModal, setDrinkModal] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {drinkModal ? (
        <DrinkModal setDrinkModal={setDrinkModal} />
      ) : (
        <>
          <Hero setCocktailCategory={setCocktailCategory} />
          <Content data={cocktailCategory} setDrinkModal={setDrinkModal} />
        </>
      )}
    </div>
  );
}

export default App;
