/*Esercizio 1
Creare un componente <Header /> che preveda la presenza di una lista di links che mirano ad indirizzi a vostra scelta. 
Anche la scelta del css è a scelta dello studente.

Esercizio 2
Creare un componente <Footer /> che preveda la presenza di contenuto testuale e/o immagini a vostra scelta. 
Anche la scelta del css è a scelta dello studente.

Avanzato
Creare un componente a scelta che implementi la logica delle props e che renda dinamica almeno una parte del 
componente (es. un titolo, un paragrafo, ...)*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductsRepetition from "./components/productsRepetition";

const App = () => {
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
      <ProductsRepetition />
      {/* <Gallery galleryInfo={product} />
      <Gallery galleryInfo={product2} />
      <Gallery galleryInfo={product3} /> */}
      <Footer />
    </div>
  );
};

// esporto componente in index.js come componente principale di tutta l'applicazione
export default App;
