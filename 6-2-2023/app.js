// Oggi la lezione è stata abbastanza impegnativa ma fondamentale.
// Domani ricapitoliamo le cose già fatte prima di andare avanti
// Intanto per oggi:
// create un file di dati json con alcuni libri
// Impostate le rotte che vi servono
// Una home da un file html
// Una pagina pubblica con tutti i vostri libri
// Un collegamento alla pagina json che visualizza solo alcuni dei vostri libri che però è
// protetta e permette l'ingresso solo a voi, quindi già sapete che vi sarà di aiuto un middleware.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const app = express();
const PORT = 8081;
const path = require("path");

// importo file json "books"
const books = require("./books");

// importo middlewares
const authorization = require("./authoriz");

// imposto Home Page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "assets/home.html"));
});

// imposto pagina pubblica con tutti i libri provenienti da file json
app.get("/books", (req, res) => {
  res.json(books);
});

// NON FUNZIONANTE
// imposto pagina con middleware autorizzazione
app.get("/books", authorization, (req, res) => {
  const someBooks = books.map((book) => {
    const { id, title, author } = books;
    return { id, title, author };
  });
  res.json(someBooks);
});

app.listen(PORT, () => {
  console.log(`server attivo su porta ${PORT}`);
});
