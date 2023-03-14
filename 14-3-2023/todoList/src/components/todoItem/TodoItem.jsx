import "./index.css";

const TodoItem = ({ todoEl, setTodoList }) => {
  // funzione per rimuovere elemento dalla lista
  const removeEl = (id) => {
    console.log(id);

    setTodoList((prev) => [...prev.filter((thing) => thing.id !== id)]);
  };

  return (
    <ul className="TodoItem" onClick={() => removeEl(todoEl.id)}>
      <li>- {todoEl.chore}</li>
    </ul>
  );
};

export default TodoItem;
