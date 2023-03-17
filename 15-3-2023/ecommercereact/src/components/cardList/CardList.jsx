import "./index.css";
import { GET } from "../../utils/fetch";

import { useState, useEffect } from "react";

import Card from "../card";

const CardList = ({ setCartList, section, endpoint }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList">
      <h2>{section}</h2>
      <div className="card_list">
        {productsList.map((product) => (
          <Card product={product} setCartList={setCartList} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
