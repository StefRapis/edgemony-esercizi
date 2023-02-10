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

// PAGINA 404
router.get("*", (req, res) => {
  res.render("404"),
    {
      titolo: "Pagina non trovata.",
    };
});

module.exports = router;
