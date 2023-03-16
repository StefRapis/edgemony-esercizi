import "./index.css";

const CartItem = ({ product }) => {
  return (
    <div className="CartItem">
      <img className="item_img" src={product.thumbnail} alt={product.title} />
      <div className="cart_info">
        <p className="item_title">{product.title}</p>
        <p className="item_category">{product.category}</p>
        <p className="item_price">€ {product.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
