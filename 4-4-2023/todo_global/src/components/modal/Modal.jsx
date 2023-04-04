import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store";

const Modal = () => {
  const { state, dispatch } = useContext(Context);

  const closeModal = () => {
    dispatch({ type: "SET_MODAL_FALSE" });
  };

  return (
    <div className={styles.Modal}>
      <h2>Inserisci ToDo</h2>
      <button onClick={closeModal}>x</button>
      <input type="text" />
    </div>
  );
};

export default Modal;
