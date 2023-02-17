const express = require('express');
let routerLibri = express.Router();

//const mongoose = require('mongoose');

//const Libro = mongoose.model('libroModel');

routerLibri.get('/', (req, res) => {
    res.render("addupbook", {
        viewTitle: "Inserisci un libro"
    });
});


routerLibri.get('/bookList', (req, res) => {
            res.render("listBook", {
                viewTitle: "vedi i libri"
            })
});


module.exports = routerLibri;