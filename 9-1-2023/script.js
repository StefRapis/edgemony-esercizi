// ## Esercizio 1

// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// > nb. ogni singola operazione sara una arrow function
// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare.
// Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

// ## Avanzato

// Provare a completare l'esercizio sopra applicando qualche callback.
// Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

// CREO 4 ARROW FUNCTIONS, OGNUNA CHE ESEGUE UN TIPO DI OPERAZIONE.
const sum = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

console.log(sum(1, 2));
console.log(subtraction(5, 3));
console.log(multiplication(5, 5));
console.log(division(8, 2));

// Questa funzione non ha bisogno ne di parametri ne di argomenti perchè ha tutto ciò he gli serve dentro il blocco codice.
const userOperation = () => {
  const operation = prompt(
    "Inserisci un tipo di operazione matematica, ad es. 'addizione"
  );
  const chooseNum1 = prompt("Scegli un primo numero");
  const chooseNum2 = prompt("Scegli un secondo numero");
  switch (operation) {
    case "addizione":
      return +chooseNum1 + +chooseNum2;
      break;
    case "sottrazione":
      return chooseNum1 - chooseNum2;
      break;
    case "moltiplicazione":
      return chooseNum1 * chooseNum2;
      break;
    case "divisione":
      return chooseNum1 / chooseNum2;
      break;
    default:
      return "Operazione non valida";
      break;
  }
};

console.log(userOperation());

// ## AVANZATO / PROVO AD APPLICARE UN CALLBACK
// Oggi pioverà. Quanti ombrelli ci servono? (Utilizzo come funzione callback, l'arrow function "SUBTRACTION" creata precedentemente)

// HO PROVATO A SCRIVERE LA FUNZIONE COMPLESSA CON LA SINTASSI NORMALE:

function howManyUmbrellas(sumFunction) {
  return "Ci servono " + sumFunction + " ombrelli";
}

console.log(howManyUmbrellas(subtraction(5, 2)));

// E QUI L'HO RISCRITTA CON ARROW FUNCTION:

// const howManyUmbrellas = (sumFunction) => {
//   return "Ci servono " + sumFunction + " ombrelli";
// };

// console.log(howManyUmbrellas(sum(1, 2)));
