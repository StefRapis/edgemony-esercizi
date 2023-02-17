/*
ultimo esercizio del nostro viaggio in Node.js.
A partire dallo starter che qui vi allego e che ha la corretta impostazione dei percorsi, concludete con le funzioni di CRUD nel relativo router. 
Inoltre potreste aggiungere una ulteriore risorsa alla vostra app ma passata ad api come abbiamo fatto oggi nella lezione.
Intanto nel repo ho già caricato il codice di oggi così avete tutto per lavorare senza problemi in un esercizio che vi permette di ricapitolare
 i fondamenti visti in questi giorni.
Dopo vi creo anche la soluzione completa e la aggiungo al repo.
Intanto, buon divertimento.


Siamo arrivati alla fine di un percorso formativo ma non alla fine della conoscenza di Node.js che è un mondo davvero vasto e in cui ci sono un milione di cose ancora da scoprire.
Ma è vero che in questi giorni avete fatto tanto e siete stati davvero bravi. Se ci pensate, 3 settimane fa a malapena sapevate cos'era Node e oggi siete in grado di sviluppare 
semplici app dinamiche che gestiscono database e web server che offrono api.  Siatene fieri!  Vi siete anche resi conto di quali sono le dinamiche che si muovono dietro
le quinte ma anche quelle che sono le difficoltà  e, a volte, le incognite del backend. Spero di essere riuscita ad agevolare il vostro percorso formativo e fatto scoprire il lato 
creativo del web con Node.js. Non mi resta che augurarvi una buona continuazione e che si avverino tutto i sogni che inseguite e continuate a farlo col medesimo interesse e
 partecipazione che avete dimostrato in questi giorni di lezione. Un abbraccio a tutti voi e...happy coding!*/

require("./models/DBconfig");

const express = require("express");
const hbs = require("hbs");
const bodyparser = require("body-parser");
const routes = require("./controllers/routes");

const concertiRouter = require("./controllers/concertiController");
const routerLibri = require("./controllers/routesLibri");
let app = express();
const PORT = 3000;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use("/libro", routerLibri);
app.use("/", routes);

app.use("/api/v2/concerti", concertiRouter);

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${3000}`);
});
