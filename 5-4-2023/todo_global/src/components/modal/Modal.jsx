import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store";

const Modal = () => {
  const { state, dispatch } = useContext(Context);

  const closeModal = () => {
    dispatch({ type: "SET_MODAL_FALSE" });
  };

  const saveUserName = (event) =>
    dispatch({ type: "SAVE_USERNAME", payload: event.target.value });

  const saveTodo = (event) =>
    dispatch({ type: "SAVE_TODO", payload: event.target.value });

  const saveImage = (event) =>
    dispatch({ type: "SAVE_IMAGE", payload: event.target.value });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_MODAL_FALSE" });
    dispatch({ type: "ADD_ID", payload: Math.floor(Math.random() * 100) });
    dispatch({ type: "ADD_NEW_TASK", payload: state.newTodo });
  };

  return (
    <div className={styles.Modal}>
      <h2>Inserisci ToDo</h2>
      <button onClick={closeModal}>x</button>
      <form onSubmit={onHandleSubmit} className={styles.form}>
        <input
          value={state.newTodo.username}
          onChange={saveUserName}
          type="text"
          placeholder="username"
        />
        <input
          value={state.newTodo.todo}
          onChange={saveTodo}
          type="text"
          placeholder="toDo"
        />
        <input
          value={state.newTodo.image}
          onChange={saveImage}
          type="text"
          placeholder="image Url"
        />
        <input className={styles.inputBtn} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Modal;
