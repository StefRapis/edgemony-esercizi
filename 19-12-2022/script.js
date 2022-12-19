let userOperator = prompt("Inserisci un tipo di operazione");
let firstNumber = prompt("Inserisci il primo numero");
let secondNumber = prompt("Inserisci il secondo numero");

if (userOperator == "addizione") {
  console.log("La somma è " + (firstNumber + secondNumber));
} else if (userOperator == "sottrazione") {
  console.log("La differenza è " + (firstNumber - secondNumber));
} else if (userOperator == "divisione") {
  console.log("Il quoziente è " + firstNumber / secondNumber);
} else if (userOperator == "moltiplicazione") {
  console.log("Il prodotto è " + firstNumber * secondNumber);
} else {
  console.log("Il risultato non é valido");
}
