/* Ciao a tutti,
nell'esercizio di oggi potete riprendere il progetto di venerdì che abbiamo reso dinamico in Node.js/Express e potete applicare il semplice sistema di autenticazione che abbiamo visto oggi.
Quindi la voce profilo la usate per la login e logout per la relativa funzione. Poi create 3 nuove pagine: una per direzionare i vostri utenti verso una pagina per non autorizzati, 
la pagina con contenuto protetto e naturalmente la pagina per fare login
Vi ricordo di gestire eventuali messaggi di controllo sui campi e di proteggere il percorso della pagina protetta.*/

///////////////////////////////////////////////////

const express = require("express");
const app = express();
const hbs = require("hbs");
const router = require("./router");

// Richiamo applicativi cookie session e body parser
const session = require("cookie-session");
app.use(session({ secret: "Sessione privata" }));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// dichiaro motore di template per HBS
app.set("view engine", "hbs");

/////////////////////////////////////////////////// togliere partials dal root?
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

// ROUTING APPLICAZIONE, tratto router come se fosse un middleware
app.use("/", router);

app.listen(3000, () => {
  console.log(`server attivo su porta 3000`);
});
