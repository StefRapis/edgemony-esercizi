// # Esercizio 1

// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo `string` a scelta, rispettando i seguenti punti:

// - utilizzare il ciclo for classico

// - sarà l'utente ad inserire queste stringhe (`prompt`)

// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

// # Avanzato

// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (`for in`e `for of`)

// ESERCIZIO 1:

// Creo array vuoto
let furnitures = [];

// tramite il ciclo for e il metodo "push" ripeto in ciclo per 10 volte lo stesso prompt.

for (let i = 0; i < 10; i++) {
  furnitures.push(prompt("Inserisci una parola"));
}

//Questi 10 prompt vengono stampati alla fine in console.
console.log(furnitures);

// AVANZATO:

// //Uso il FOR IN per stampare gli indici dell'array
// for (let furnituresIndex in furnitures) {
//   console.log(furnituresIndex);
// }

// //Uso il FOR OF per stampare i valori dell'array
// for (let furniture of furnitures) {
//   console.log(furniture);
// }
