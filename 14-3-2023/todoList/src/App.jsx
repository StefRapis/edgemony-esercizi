/* Esercizio 1
Sulla base della lezione del giorno, aggiungere al progetto della todo-list una funzionalità che:
Permetta la rimozione di un todo-item al click su di esso.

Esercizio 2
Aggiungere al progetto della todo-list una funzionalità che:
Ordini la lista di todo-items. 

Avanzato
Aggiungere al progetto della todo-list una funzionalità check che controlli che la nuova todo-item da aggiungere 
non sia già presente all'interno della lista. Se già presente allora non la si deve aggiungere, magari mostrare 
un alert che avvisi l'utente. */

import { useState } from "react";

import "./App.css";
import todo from "./mock/todoList";

import Input from "./components/input";
import TodoList from "./components/todoList";

function App() {
  // setto la todoList a useState
  const [todoList, setTodoList] = useState(todo);

  // passo il todoList come prop a entrambi in modo che quando li passo, anche il valore dell'array si aggiorna
  // non passo come prop TUTTA LA LISTA ma IL VALORE ASSOCIATO A ESSA
  // a input passo il set cosi che al click del bottone, il valore (ossia l'array) venga modificato con l'aggiunta di quello nuovo
  return (
    <div className="App">
      <Input setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
