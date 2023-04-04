/* Esercizio 1
Sulla base della lezione del giorno, completare il progetto della todo-list e aggiungere le logiche relative alla modale per aggiungere una nuova task. Gestire il valore isModalVisibile da stato globale.

Avanzato
Aggiungere alle logiche della modale la possibilità di aggiungere un ulteriore oggetto (todo) alla lista delle todos tasksListData.

(in locale, al reload si perderà ed è giusto così).*/

import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";
import Modal from "./components/modal/";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleModal = () => {
    dispatch({ type: "SET_MODAL_TRUE" });
  };

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        {state.isModalVisible && <Modal />}
        <Hero />
        <TasksList />
        <button onClick={onHandleModal} className={styles.addTodo}>
          {"+"}
        </button>
      </Context.Provider>
    </div>
  );
}

export default App;
