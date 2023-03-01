// creo questo componente per la sola funzione di ciclarmi gli oggetti contenuti dentro Mocks

import "./index.css";

import Products from "../products";

// qui scrivo la funzione del componente
const ProductsRepetition = ({ listData }) => {
  return (
    <div className="ProductsRepetition">
      {listData.map((product) => (
        <Products productsInfo={product} />
      ))}
      ;
    </div>
  );
};

export default ProductsRepetition;
