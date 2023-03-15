import "./index.css";
import { GET } from "../../utils/fetch";

import { useState, useEffect } from "react";

import Card from "../card";

const CardList = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET("/products/category/skincare").then((data) =>
      setProductsList(() => data.products)
    );
  }, []);

  return (
    <div className="CardList">
      <h2>Skin Care</h2>
      <div className="card_list">
        {productsList.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
