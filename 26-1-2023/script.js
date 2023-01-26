// Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

// mostra il timer in schermo, come visto a lezione;
// che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
// la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.

// Avanzato
// Continuare l'esercizio avanzato della lezione di ieri 25-01-2023

// set interval e usare new date
//

const bodyEl = document.querySelector("body");
const divCounter = document.createElement("div");
const counterEl = document.createElement("h1");
const stopButton = document.createElement("button");

divCounter.className = "container";
counterEl.className = "timer";

stopButton.textContent = "STOP";
stopButton.className = "stop";
bodyEl.append(divCounter, counterEl, stopButton);

// CREO TIMER CON SETINTERVAL
let timeout = 8;

const timer = setInterval(() => {
  timeout--;
  counterEl.textContent = timeout;

  if (timeout === 0) {
    bodyEl.style.backgroundColor = "black";
    counterEl.remove();
  }
}, 1000);

stopButton.addEventListener("click", () => clearTimeout(timer));
