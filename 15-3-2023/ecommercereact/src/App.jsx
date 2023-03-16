/* 
15-3-2023
Esercizio 1
Sulla base della lezione del giorno gestire la logica della lista delle <MiniCard />s in App, al fine di avere un 
componente lista che le implementi al posto della logica già presente.

Avanzato
Abilitare la input di ricerca al fine di impostare, per categoria, l'endopoint per la lista di MiniCard 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

16-3-2023

Esercizio 1
Sulla base della lezione del giorno, creare una modale che renderizzi la lista di prodotti presente nel carrello, quindi ModalCart.

Avanzato
Completare l'esercizio 1, con l'implementazione in esso del LocalStorage.
*/

import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList";
import CardList from "./components/cardList";
import Footer from "./components/footer";
import ModalCart from "./components/modalCart";

function App() {
  // stato per visibilitá modale carrello
  const [cartModalOn, setCartModalOn] = useState(false);

  // uSeState per salvarmi dentro l'array di oggetti da aggiungere al click del pulsante dentro Card
  const [cartList, setCartList] = useState([]);

  // stato per filtro ricerca per categorie per MiniCard
  const [searchCategory, setSearchCategory] = useState("");

  return (
    <div className="App">
      <Navbar
        setCartModalOn={setCartModalOn}
        cartListlength={cartList.length}
        setSearchCategory={setSearchCategory}
      />
      <Hero />
      <MiniCardList searchCategory={searchCategory} />
      <CardList setCartList={setCartList} />
      <Footer />
      {cartModalOn && (
        <ModalCart cartList={cartList} setCartModalOn={setCartModalOn} />
      )}
    </div>
  );
}

export default App;
