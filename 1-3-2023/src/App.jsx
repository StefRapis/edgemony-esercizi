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
import { prodottiLista } from "../src/mocks/listaProdotti";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  // CREO FUNZIONE DA PASSARE COME PROP AI COMPONENTI "BUTTON"

  // questo oggetto puo essere condiviso con i figli di MAIN attraverso prop
  // const product = {
  //   id: 5,
  //   title: "Huawei P30",
  //   description:
  //     "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  //   price: 499,
  //   discountPercentage: 10.58,
  //   rating: 4.09,
  //   stock: 32,
  //   brand: "Huawei",
  //   category: "smartphones",
  //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  //   images: [
  //     "https://i.dummyjson.com/data/products/5/1.jpg",
  //     "https://i.dummyjson.com/data/products/5/2.jpg",
  //     "https://i.dummyjson.com/data/products/5/3.jpg",
  //   ],
  // };

  // const product2 = {
  //   id: 10,
  //   title: "HP Pavilion 15-DK1056WM",
  //   description:
  //     "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
  //   price: 1099,
  //   discountPercentage: 6.18,
  //   rating: 4.43,
  //   stock: 89,
  //   brand: "HP Pavilion",
  //   category: "laptops",
  //   thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  //   images: [
  //     "https://i.dummyjson.com/data/products/10/1.jpg",
  //     "https://i.dummyjson.com/data/products/10/2.jpg",
  //     "https://i.dummyjson.com/data/products/10/3.jpg",
  //     "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  //   ],
  // };

  // const product3 = {
  //   id: 7,
  //   title: "Samsung Galaxy Book",
  //   description:
  //     "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
  //   price: 1499,
  //   discountPercentage: 4.15,
  //   rating: 4.25,
  //   stock: 50,
  //   brand: "Samsung",
  //   category: "laptops",
  //   thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  //   images: [
  //     "https://i.dummyjson.com/data/products/7/1.jpg",
  //     "https://i.dummyjson.com/data/products/7/2.jpg",
  //     "https://i.dummyjson.com/data/products/7/3.jpg",
  //     "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  //   ],
  // };

  return (
    // utilizzo per la classe lo stesso nome del componente, tutti gli altri saranno figli di APP
    // con MAP mi ciclo ogni componente con appesa la sua prop
    <div className="App">
      <Header />
      <Hero title="Tutta un'altra storia" />
      <Philosophy commitment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard known printer took a galley of type." />
      <Gallery />
      <ButtonControl listDataLength={prodottiLista.length} />
      <ProductsRepetition listData={prodottiLista} />
      <Slider />
      {/* <Gallery galleryInfo={product} />
      <Gallery galleryInfo={product2} />
      <Gallery galleryInfo={product3} /> */}
      <Footer />
    </div>
  );
};

// esporto componente in index.js come componente principale di tutta l'applicazione
export default App;
