// Allora, sfruttando i file della app di oggi, dovete aggiungere alle pagine già esistenti: una pagina
// login e una pagina mi-presento. Poi dovete aggiungere un partials con una immagine che potete interpolare
// in qualsiasi pagina vogliate.
// Poi dovete creare un oggetto chiamato myPreferences nel quale gestite questi elementi: pet, color,
// season.
// Questo oggetto deve essere caricato nella route radice, quindi nella home page. Ovviamente richiamate
// nella pagina stessa gli elementi dell'oggetto.
// Ai percorsi / e /about deve essere passata una variabile titolo ovviamente diversa a seconda della pagina.
// Come ultima cosa, ma è più facoltativa anche se credo siate in grado di farlo, nella pagina mi-presento
// dovete creare un form che invia un dato, come nell' esempio già fatto, in relazione ad una chiamata POST
// che andrete a configurare in app.
// Questa volta però il response non a semplice stringa da metodo send ma atterrerà su una pagina login che
// dovrete configurare con render() nel metodo POST.
// Forza, che è facile.
// Comunque, se su questo ultimo punto avrete difficoltà, domani vedremo insieme.

/////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 4000;

// Dichiaro il motore di template
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

// creo oggetto per la route radice
const myPreferences = {
  pet: "dog",
  color: "forest green",
  season: "summer",
};

app.get("/", (req, res) => {
  res.render("home", {
    nome: "Stefania",
    titolo: "Prima prova Template",
    miePreferenze: `${myPreferences.pet}, ${myPreferences.color}, ${myPreferences.season}`,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "Prima prova Template",
  });
});

// creo form
app.post("/mi-presento", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Benvenuto ${name}`);
  }
  res.status(400).send("per favore aggiungi il dato");
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
