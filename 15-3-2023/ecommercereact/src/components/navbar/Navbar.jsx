import "./index.css";
import { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");

  const saveInput = (event) => {
    setInput(() => event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
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
    </div>
  );
};
export default Navbar;
