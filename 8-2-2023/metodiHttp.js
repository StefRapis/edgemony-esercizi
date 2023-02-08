// Ovviamente sotto con la pratica dei metodi HTTP.
// Avete a disposizione un po' di materiale su cui lavorare: o il file data.js o il file articoli.json.
// Questo ultimo file è più ricco di contenuti per gestire meglio le nostre chiamate, creando e
// modificando il dati.
// Altrimenti, se preferite la risorsa js, sarebbe il caso di aggiungere nuovi elementi all'oggetto people.
// Non fate prove con le immagini perchè ne parleremo domani.
// Quindi, create un nuovo progetto, preparate la vostra risorsa, attivate postman e buon divertimento.
// Solo un'ultima cosa: se non lo avete già fatto provate in postman la chiamata post sulla
// route /login in modo che sia pronta per domani per essere collegata alla form. Visto che ci siete,
// aggiungete anche il controllo sullo stato 400.
// Buon lavoro

////////////////////////////////////////////////////////////////////////////////////////////

// richiamo cio' che mi serve
const express = require("express");
const app = express();
const PORT = 3100;
const articoli = require("./articoli.json");

// estendo app
app.use(express.urlencoded({ extended: true })); // codifica e analizza le url, dobbiamo tener conto di tutte le forme stese di url, anche senza sorgente conoscita
app.use(express.json()); // gestiamo in maniera globale i json

// METODO PUT
// in Postman, decido di modificare record con Id = 2 e cambiarne titolo e reactions
app.put("/api/put/articles/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { reactions } = req.body;

  // con "find" mi trovo l'articolo con l'ID specificato
  const articolo = articoli.find((articolo) => articolo.id === Number(id));

  if (!articolo) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'e nessun articolo con id ${id}` });
  }

  const articoloAggiornato = articoli.map((articolo) => {
    if (articolo.id === Number(id)) {
      articolo.title = title;
      articolo.reactions = reactions;
    }
    return articolo;
  });
  res.status(200).json({ success: true, data: articoloAggiornato });
});

// METODO DELETE
// Tramite Postman, rimuovo un intero articolo dalla lista tramite il suo Id
app.delete("/api/delete/articles/:id", (req, res) => {
  const articolo = articoli.find(
    (articolo) => articolo.id === Number(req.params.id)
  );

  if (!articolo) {
    return res.status(400).json({
      success: false,
      msg: `non c'e nessun articolo con id ${req.params.id}`,
    });
  }
  const nuovaLista = articoli.filter(
    (articolo) => articolo.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: nuovaLista });
});

// METODO POST con LOGIN alla quale aggiungo gestione errore
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Benvenuto ${name}`);
  }
  return res
    .status(400)
    .send({ msg: `Ci dispiace ${name}, non hai accesso a questi contenuti` });
});

app.listen(PORT, () => {
  console.log(`server attivo su porta ${PORT}`);
});
