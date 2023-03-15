/* Esercizio 1
Sulla base della lezione del giorno gestire la logica della lista delle <MiniCard />s in App, al fine di avere un 
componente lista che le implementi al posto della logica già presente.

Avanzato
Abilitare la input di ricerca al fine di impostare, per categoria, l'endopoint per la lista di MiniCard */

import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList";
import CardList from "./components/cardList";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MiniCardList />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
