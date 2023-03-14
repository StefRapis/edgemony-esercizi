import "./index.css";
import { useState } from "react";

const Input = ({ setTodoList }) => {
  const [inputEl, setInputEl] = useState("");

  const saveInput = (event) => {
    setInputEl(event.target.value);
  };
  // con il set mi modifico il valore iniziale. faccio destructuring del valore dell'array e aggiungo quello nuovo
  const addWithClick = (event) => {
    event.preventDefault();
    setTodoList((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 50),
        chore: inputEl,
      },
    ]);
  };

  return (
    <form className="Input" onSubmit={addWithClick}>
      <input
        className="type_input"
        onChange={saveInput}
        type="text"
        placeholder="Inserisci toDo"
      />
      <input className="button" type="submit" value="🚀" />
    </form>
  );
};

export default Input;
