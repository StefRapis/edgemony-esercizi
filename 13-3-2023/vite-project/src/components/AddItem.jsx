import "./index.css";
import todo from "../mock/todoList";
import { useState } from "react";

const AddItem = () => {
  // creo useState per la input
  const [todoEl, setTodoEl] = useState("");

  // funzione per salvataggio dati inseriti dall'utente nella input
  const saveInput = (event) => setTodoEl(event.target.value);

  // funzione per aggiunta nuovo dato alla lista "todo"
  const addToList = () => {
    todo.push(todoEl);
    console.log(todo);
    alert(`Hai aggiunto "${todoEl}" alla tua lista!`);
  };

  return (
    <div className="AddItem">
      <input
        onChange={saveInput}
        type="text"
        placeholder="Inserisci toDo"
        value={todoEl}
      />
      <button onClick={addToList}>Aggiungi alla lista</button>
    </div>
  );
};

export default AddItem;
