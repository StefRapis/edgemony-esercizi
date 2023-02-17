require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const subRouter = require("./routes/subscriberController");
const concertiRouter = require("./routes/concertiController");

// richiamo string in file env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

// quando il database e' attivo mi gestisco gli errori
db.on("error", (error) => console.error(error));

// una volta che il db e' aperto...
db.once("open", () => console.log("connesso al db"));

app.use(express.json());

// ROUTING
app.use("/api/v1/subscriber", subRouter);

app.use("/api/v2/concerti", concertiRouter);

app.listen(2000, () => console.log("server attivo"));
