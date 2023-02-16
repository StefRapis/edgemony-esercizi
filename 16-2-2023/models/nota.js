const mongoose = require("mongoose");

// Creo un oggetto della classe schema con la quale gestisco i miei dati
var tavoloSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  text: {
    type: String,
  },
});

// dichiaro il nome del modello
mongoose.model("notaModel", tavoloSchema);
