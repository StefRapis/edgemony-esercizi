/*# Esercizio 1

Sulla base della lezione del giorno:

- scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola `bootcamp`;

# Esercizio 2

- scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

# Avanzato

- Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

- Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro un array ([num1, num2]).*/

// Assegno alla funzione due parametri che richiamo in console tramite l'invocazione.
function adjective(stringa, another) {
  console.log(stringa + another);
}

adjective("intricato ", "bootcamp");

// // Scrivo un oggetto e aggiungo un metodo tramite funzione
let Stefania = {
  myName: "stefi",
  mySurname: "rapisarda",
  myHeight: "166",
  lingua: function () {
    console.log("inglese");
  },
};

Stefania.lingua();

// AVANZATO 1

function calculator(operation, Num1, Num2) {
  if (operation === "+") {
    console.log(Num1 + Num2);
  } else if (operation === "-") {
    console.log(Num1 - Num2);
  } else if (operation === "*") {
    console.log(Num1 * Num2);
  } else if (operation === "/") {
    console.log(Num1 / Num2);
  }
}

calculator("+", 5, 4);
calculator("-", 5, 4);
calculator("*", 5, 4);
calculator("/", 5, 4);
