import "./index.css";

// const product = {
//   id: 1,
//   title: "iPhone 9",
//   description: "An apple mobile which is nothing like apple",
//   price: 549,
//   discountPercentage: 12.96,
//   rating: 4.69,
//   stock: 94,
//   brand: "Apple",
//   category: "smartphones",
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// };

const Card = ({ product }) => {
  return (
    <div className="Card">
      <img src={product.thumbnail} alt={product.title} />
      <p className="card_desc">{product.description}</p>
      <div className="card_prices">
        <p className="card_cat">{product.category}</p>
        <p className="card_price"> Euro {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
