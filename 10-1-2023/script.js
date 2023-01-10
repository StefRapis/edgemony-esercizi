// ## Esercizio 1

// Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript.
// Devo essere presenti i seguenti elementi:

// - Image di sfondo
// - Un titolo principale
// - Un sottotitolo descrittivo breve

// ## Avanzato

// Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e aggiunga anche una sezione relativa a dei prodotti
// (simile a quanto visto a lezione), attenzione a creare un contenitore che inglobi tutti i singoli prodotti
// (qualcosa simile a productListEl).

// CREO GLI ELEMENTI IN MODO DINAMICO USANDO JAVASCRIPT E LI INSERISCO IN UNA FUNZIONE
// (NON CAPISCO PERCHE IN CONSOLE CONTINUA A DARMI PER OGNI CONST "NOT DEFINED" QUANDO CERCO DI INVOCARE LA FUNZIONE)

const createHero = () => {
  const bodyElem = document.body;
  const heroEle = document.createElement("div");
  const heroImg = document.createElement("img");
  const heroTitle = document.createElement("h1");
  const heroSubtitle = document.createElement("h3");
};

createHero();
console.log(createHero());

// ASSEGNO LORO UNA CLASSE E DEGLI ATTRIBUTI
heroEle.className = "hero__div";

heroImg.className = "hero__img";
heroImg.setAttribute("src", "https://picsum.photos/1664/200");
heroImg.setAttribute("alt", "foto hero");

heroTitle.className = "hero__title";
heroTitle.textContent = "Prima manipolazione";
heroSubtitle.className = "hero__subtitle";
heroSubtitle.textContent = "Ciao, sono il sottotitolo";

//APPENDO I RELATIVI FIGLI
bodyElem.appendChild(heroEle);
heroEle.append(heroImg, heroTitle, heroSubtitle);
