/* Esercizio 1
Sulla base della lezione del giorno, ricreare un componente counter utilizzando createContext, useContext e useReducer.

Attenzione: provare a svolgere l'esercizio ragionandoci su, magari partendo prima dalla versione con useStatee man mano aggiungere il nuovo codice

Avanzato
Provare a leggere cosa rappresenta il termine payload e implementarlo in uno stato globale al fine di realizzare una todo-list utilizzando esclusivamente createContext, useContext e useReducer.

Questo è un progetto ambizioso, non preoccupatevi sarà oggetto di analasi della lezione di domani */

import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
