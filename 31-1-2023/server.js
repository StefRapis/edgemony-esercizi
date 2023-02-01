// ESERCIZIO

// Implementate l'applicazione con i percorsi per mostrare 2 pagine html, per esempio, una pagina prodotti e una pagina cliente,
// oltre alla home page che è già impostata.
// Fate attenzione a cosa vi servirà per mostrare e poi integrare le due pagine esterne.
// e poi una domanda su cui riflettere: è possibile creare nelle pagine web un collegamento fra le pagine nel modo solito,
// cioè usando <a href="#">.....</a> considerando la particolare struttura dei percorsi in Node? Provate un po' da soli,
// poi domani verifichiamo.

const http = require("http");
const fs = require("fs"); // file system

// creo collegamento a pagine HTML
const homepage = fs.readFileSync("homepage.html");
const prodotti = fs.readFileSync("prodotti.html");
const clienti = fs.readFileSync("clienti.html");

// creo server
let server = http.createServer((req, res) => {
  if (req.url === "/") res.end(homepage);
  else if (req.url === "/prodotti") res.end(prodotti);
  else if (req.url === "/clienti") res.end(clienti);
  else {
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

server.listen(4000);
