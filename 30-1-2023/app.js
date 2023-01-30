// Prima lezione NODE

// Crea un progetto Node.js con un file chiamato app.js
// Crea un server che risponde alla porta 3000
// Crea 3 percorsi: pagina iniziale, studenti, corsi
// Nell’output puoi scrivere quello che vuoi  :mano_ok:
// Prova lo script ed esegui correttamente con il comando nel terminale
// Indica quali sono i percorsi che scriverai nella barra di ricerca del browser per raggiungere le tue pagine

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MEMORIZZO METODO "require" in VARIABILE
const serverHttp = require("http");

// CREO UNA FUNZIONE PER LA CREAZIONE DEL SERVER che prende come parametri la Richiesta e la Risposta
const server = serverHttp.createServer((req, res) => {
  if (req.url === "/") res.end("Pagina Iniziale");
  else if (req.url === "/studenti") res.end("Portale accesso studenti");
  else if (req.url === "/corsi") res.end("Guarda tutti i nostri corsi");
  else {
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

// se vado sul browser e nella barra ricerca scrivo "localhost:3000" mi spunta la pagina creata, cambiando fine url cambio pagina
server.listen(3000);
