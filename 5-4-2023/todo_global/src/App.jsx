/* 4-4-2023

Esercizio 1
Sulla base della lezione del giorno, completare il progetto della todo-list e aggiungere le logiche relative alla modale per aggiungere una nuova task. Gestire il valore isModalVisibile da stato globale.

Avanzato
Aggiungere alle logiche della modale la possibilità di aggiungere un ulteriore oggetto (todo) alla lista delle todos tasksListData.

(in locale, al reload si perderà ed è giusto così).


// ----------------------------------------------------------------------------------------------------------------------------------

5-4-2023

Esercizio 1
Sulla base della lezione del giorno, a partire dal vostro progetto react-states (quindi quello che avete consegnato ieri come esercitazione):

Rimuovere le fetch per i dati;
Costruire un mock che gestisca la lista delle singole todos;
Implementare questa logica utilizzando lo stato globale

Avanzato 1
Gestire inoltre la logica relativa alle input che devono presentare uno stato controllato (controlled-components) ma non utilizzando useState bensì provare a farlo funzionare utilizzando lo stato globale.

Avanzato 2
Implementare infine le logiche relative alla modifica di una todo (la chiave completed per esempio) e quelle relative alla cancellazione della todo stessa.*/

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
