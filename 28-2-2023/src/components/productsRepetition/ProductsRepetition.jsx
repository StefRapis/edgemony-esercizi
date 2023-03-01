// creo questo componente per la sola funzione di ciclarmi gli oggetti contenuti dentro Mocks

import "./index.css";
import { prodottiLista } from "../../mocks/listaProdotti";
import Products from "../products";

// qui scrivo la funzione del componente
const ProductsRepetition = () => {
  return (
    <div className="ProductsRepetition">
      {prodottiLista.map((product) => (
        <Products productsInfo={product} />
      ))}
      ;
    </div>
  );
};

export default ProductsRepetition;
