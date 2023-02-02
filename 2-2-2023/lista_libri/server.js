// Perciò, procedi alla creazione di una tua cartella progetto dal nome lista_libri
// Lista libri è una app che offre anche una comoda API per prelevare i dati di alcuni volumi interessanti
// Quindi, dopo la creazione del progetto, crea un file json nel quale inserirai la tua lista, bastano 5-6 elementi nei
// quali puoi gestire titolo, autore, genere, prezzo
// Chiama il tuo file json come vuoi
// Ora crea due file html: un per il percorso di root della home page e uno chi-sono
// Crea ora un server e ricordati che dovrai gestire dei file esterni quindi aggiungi tutti i moduli nativi di cui hai
// bisogno e il collegamento alla risorsa JSON
// Ora il server dovrà impostare 4 percorsi: root, percorso chi-sono, percorso della tua api che puoi chiamare come vuoi
// Nel percorso api dovrai mostrare i dati del tuo file json
// Nella pagina home crea un menù con i corretti collegamenti alle tue pagine.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require("http");

// Aggiungo moduli nativi per la gestione dei file esterni
const fs = require("fs");
const books = require("./books");

// Creo server e collego pagine html esterne e file json
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const home = fs.readFileSync("home.html");
    res.end(home);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const about = fs.readFileSync("about.html");
    res.end(about);
  } else if (req.url === "/api/books") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(books));
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(3000);
