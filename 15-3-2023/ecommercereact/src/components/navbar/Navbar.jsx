import "./index.css";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ setCartModalOn, cartListlength, setSearchCategory }) => {
  const [input, setInput] = useState("");

  const saveInput = (event) => {
    setInput(() => event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setSearchCategory(() => input);
  };

  const openCart = () => {
    setCartModalOn((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>SOGNI</li>
        <li>DESIDERI</li>
        <li>VIAGGI</li>
        <li>SPERANZE</li>
      </ul>

      <form onSubmit={onHandleSubmit}>
        <input
          value={input}
          onChange={saveInput}
          type="text"
          placeholder="Cerca qui"
        />
      </form>
      <div className="cart" onClick={openCart}>
        {/* <img
          className="cart_icon"
          src="https://img.icons8.com/ios-filled/512/shopping-cart.png"
          alt="cart icon"
        /> */}
        <BsFillCartFill className="cart_icon" />
        {/* do al carrello la quantita di oggetti aggiunti */}
        <p className="cart_quantity">{cartListlength}</p>
      </div>
    </div>
  );
};
export default Navbar;
