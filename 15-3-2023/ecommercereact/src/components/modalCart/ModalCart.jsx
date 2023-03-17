import "./index.css";
import CartItem from "../cartItem";

const ModalCart = ({ cartList, setCartModalOn }) => {
  const closeModal = () => {
    setCartModalOn(false);
  };

  return (
    <div className="ModalCart">
      <div className="utils">
        <h2>Il tuo carrello:</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <hr />
      {!cartList.length ? (
        <p className="empty_cart">
          Il carrello é ancora vuoto. Inserisci un prodotto!
        </p>
      ) : (
        cartList.map((item) => <CartItem product={item} key={item.id} />)
      )}
    </div>
  );
};

export default ModalCart;
