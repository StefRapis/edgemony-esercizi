// creo questo componente per la sola funzione di ciclarmi gli oggetti contenuti dentro Mocks

// da importare:
// scheda products
// faccio qui la fetch e poi la ciclo con il map

import "./index.css";
///  1. importo
import { useState, useEffect } from "react";
import Products from "../products";

const ProductsRepetition = ({ setModalImage }) => {
  // 2.  memorizzo l'array con useState lasciando inizialmente l'array vuoto dentro il valore di partenza
  const [repData, setRepData] = useState([]);

  useEffect(() => {
    //  3.  Uso useEffect per far interagire il componente con l'esterno e richiamare dati dalla fetch.
    // alla fine, mando i dati al metodo SetRepData che mi imposta come nuova variabile "repData" l'array di prodotti che mi arrivano dalla fetch.
    fetch("https://dummyjson.com/products?limit=16")
      .then((res) => res.json())
      .then((data) => setRepData(data.products));
  }, []);

  return (
    <div className="ProductsRepetition">
      <h3 className="productsTitle">Prodotti</h3>
      <div className="justProducts">
        {" "}
        {/* {listData.map((product) => (
          <Products productsInfo={product} />
        ))}
        ; */}
        {/* 4. qui mi deve ciclare l'array che mi arriva dalla fetch. Ciclo la variabile di array oggetti (arrivata dalla fetch) impostata con useState */}
        {repData.map(
          (
            product //renderizzo componente con i suoi attributi
          ) => (
            <Products productsInfo={product} setModalImage={setModalImage} />
          )
        )}
      </div>
    </div>
  );
};

export default ProductsRepetition;
