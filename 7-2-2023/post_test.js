// Dopo aver abbondantemente parlato di GET, oggi abbiamo cominciato a introdurre gli altri metodi HTTP.
// Domani concludiamo e esaminiamo anche quello che avviene usando i form.
// Per oggi è importante che prendiate confidenza con il programma Postman.
// Quindi a parte eseguire correttamente il codice che abbiamo già visto, fate
// esercizio con il suo funzionamento facendovi aiutare dal sito:
// https://jsonplaceholder.typicode.com/ usando magari la risorsa users che contiene meno dati.
// Eseguite chiamate GET e POST. Nella chiamata POST aggiungete nuovi dati e inviate.
// Controllate sempre gli status.
// Impostate il programma per gestire in ingresso e uscita dati JSON.

const express = require("express");
const app = express();

const PORT = 3000;
const users = require("./users.json");

// middleware di applicazione per risorse statiche
app.use(express.static("./public"));

// se uso postman, devo estendere l'url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// invio i dati all' applicazione via Postman. deve analizzare il body
app.post("/api/users", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(200)
    .json({ success: true, person: { id: id, name: name } });
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
