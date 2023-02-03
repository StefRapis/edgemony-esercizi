// Bene, quindi per oggi vi lascio con l'incarico di sviluppare una semplice applicazione Express, quindi avviate
// tutto il processo di
// installazione generale, create e avviate il server.
// La vostra app  deve gestire risorse statiche perchè lavoriamo con interfacce in html.
// Il sito riguarda un vostro hobby, quindi piena libertà del tema.
// Gestite 4 pagine html fra cui la 404
// Sviluppate un menu con i giusti collegamenti relativi al routing della vostra app. Ovviamente la 404 non va collegata
// a livello di menu
// Le cartelle che contengono fogli di stile e immagini devono essere posti in una sottocartella di public
// denominata assets => quindi occhio ai link relativi

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// invoco frame Express e creo un'app basata su di esso
const express = require("express");
const app = express();

const PORT = 5000;

// uso metodo static per la gestione delle risorse statiche
app.use(express.static("assets"));

// creo percorsi di routing per le pagine html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/assets/index.html");
});

app.get("/painting", (req, res) => {
  res.sendFile(__dirname + "/assets/painting.html");
});

app.get("/brushes", (req, res) => {
  res.sendFile(__dirname + "/assets/brushes.html");
});

// gestisco pagina 404
app.get("*", (req, res) => {
  res.send("404 | pagina non trovata");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
