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

const Card = ({ product, setCartList }) => {
  const addToCart = () => {
    setCartList((prev) => [...prev, product]);
    console.log(product);

    // SETTO LOCAL STORAGE
    // creo var. che contiene tutti gli oggetti aggiunti al local storage e che posso andare a pescare, se non ci sono, mi restituisce un array vuoto
    const itemsInLocalStorage =
      JSON.parse(localStorage.getItem("cartList")) || [];
    // quindi creo un local storage con gli oggetti contenuti nel local storage + il nuovo oggetto aggiunto nel carrello
    localStorage.setItem(
      "cartList",
      JSON.stringify([...itemsInLocalStorage, product])
    );
  };

  return (
    <div className="Card">
      <img src={product.thumbnail} alt={product.title} />
      <p className="card_desc">{product.description}</p>
      <div className="card_prices">
        <p className="card_cat">{product.category}</p>
        <p className="card_price"> Euro {product.price}</p>
        <button onClick={addToCart}>Aggiungi al carrello</button>
      </div>
    </div>
  );
};

export default Card;
