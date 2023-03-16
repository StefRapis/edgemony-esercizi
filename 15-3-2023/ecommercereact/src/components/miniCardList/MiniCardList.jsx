import "./index.css";
import MiniCard from "../miniCard";
import { GET } from "../../utils/fetch";

import { useState, useEffect } from "react";

const MiniCardList = ({ searchCategory }) => {
  const [miniCard, setMiniCard] = useState([]);

  useEffect(() => {
    GET(
      searchCategory
        ? `/products/category/${searchCategory}`
        : "/products/category/fragrances"
    ).then((data) => setMiniCard(() => data.products));
  }, []);

  return (
    <div className="MiniCardList">
      {miniCard.map((product) => (
        <MiniCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
