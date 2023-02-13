const express = require("express");

const router = express.Router();

router.use(express.static("./public"));

// faccio ROUTING dei vari percorsi

router.get("/", (req, res) => {
  res.render("index", {
    titolo: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    titolo: "Su di me",
  });
});

router.get("/contatti", (req, res) => {
  res.render("contatti", {
    titolo: "Contattami",
  });
});

router.get("/formazione", (req, res) => {
  res.render("formazione", {
    titolo: "Cosa offro",
  });
});

router.get("/web-design", (req, res) => {
  res.render("web-design", {
    titolo: "Web design",
  });
});

// pagina per effettuare accesso
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`);

  if (!req.body.name || !req.body.password) {
    // req.statusCode(400);
    res.render("login", {
      message: "per favore aggiungi tutti i dati richiesti",
    });
  } else {
    let name = "Stefania";
    let password = "2222";
    let userAuth = { name: name, password: password };

    if (name === req.body.name && password === req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

// CREO FUNZIONE DI CONTROLLO PER LA PROTEZIONE DELL'AREA RISERVATA
const protection = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
};

// pagina per accesso autorizzati
router.get("/private", protection, (req, res) => {
  res.render("private");
});

// pagina per accesso negato
router.get("/warning", (req, res) => {
  res.render("warning");
});

// pagina per Logout
router.get("/logout", (req, res) => {
  console.log("Logout riuscito");
  req.session = null;
  res.redirect("/login");
});

// PAGINA 404
router.get("*", (req, res) => {
  res.render("404"),
    {
      titolo: "Pagina non trovata.",
    };
});

module.exports = router;
