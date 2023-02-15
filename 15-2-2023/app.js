// Vi ricorso di creare un nuovo progetto node installando la versione 4.5 di mongodb con il comando npm i mongodb@4.5
// Gli script che avete nel file vi servono per creare le vostre richieste dalla connessione alla cancellazione dei dati.
// Quindi create e connettetevi ad un db chiamato school, dentro create 2 collection: students e courses. La collection student raccoglie, nome, cognome, matricola (scegliete un codice numerico), corsi ai quali lo studente è iscritto, esami da sostenere. Nella collection courses: nome del corso, materia, docenti.
// Inserite per ogni collections un discreto numero di documenti sui quali dovrete applicare le 4 operazioni CRUD: Creo, Leggo, Modifico/aggiorno, Cancello.
// Utilizzate le opzioni di find => One / Many e così di insert.

const MongoClient = require("mongoDb").MongoClient;
let url =
  "mongodb+srv://stefiRapis:mongodb91@cluster0.gljmwnn.mongodb.net/school?retryWrites=true";

////////////////////////////////////////////////////////////// connetto mongo all'url
/*MongoClient.connect(url)
  .then((db) => {
    accountDb = db;
    collection = accountDb.db("school"); // le collezioni sono nel database che ho scelto
    console.log("database connesso");
  })
  .catch((err) => {
    console.log(err);
  });*/

/////////////////////////////////////////////////////////// CREO PRIMA COLLEZIONE "STUDENTS"

/*MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("students", function (err, res) {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});*/

////////////////////////////////////////////////////////// CREO SECONDA COLLEZIONE "COURSES"

/*MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("courses", function (err, res) {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});*/

////////////////////////////////////////////////////////// AGGIUNGO DATI ALLA COLLEZIONE "STUDENTS" - insertMany()

/*MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");

  let studentId = [
    {
      nome: "Giulia",
      cognome: "Marchesini",
      matricola: "768943",
      corsi: ["matematica", "scienze", "biologia"],
      esami: "3",
    },
    {
      nome: "Fabiana",
      cognome: "Nicoletti",
      matricola: "123456",
      corsi: ["italiano", "storia", "inglese"],
      esami: "1",
    },
    {
      nome: "Alice",
      cognome: "Vespri",
      matricola: "097845",
      corsi: ["Algebra", "storia", "arte"],
      esami: "2",
    },
    {
      nome: "Mario",
      cognome: "Rossi",
      matricola: "563412",
      corsi: ["Arte", "scienze", "biologia"],
      esami: "3",
    },
    {
      nome: "Gabriele",
      cognome: "Mazza",
      matricola: "463867",
      corsi: ["musica", "scienze", "matematica"],
      esami: "1",
    },
  ];

  dbase.collection("students").insertMany(studentId, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});*/

////////////////////////////////////////////////////////// AGGIUNGO DATI ALLA COLLEZIONE "COURSES" - insertMany()

/*MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");

  let coursesId = [
    {
      nome: "Scienze della musica",
      materia: "Musica",
      docenti: [" Ariana Grande", "Shakira", "Beyonce"],
    },
    {
      nome: "Scienze della comunicazione",
      materia: "Sociologia",
      docenti: [" Maria Alberti", "Ludovico Piscopo", "Matilde Arena"],
    },
    {
      nome: "Economia e Management",
      materia: "Statistica",
      docenti: [" Marco Medi", "Alessandro Barone", "Giorgia Arietti"],
    },
    {
      nome: "Scienze e tecniche psicologiche",
      materia: "Pedagogia",
      docenti: ["Alberto Angela", "Piero Medici", "Anna Valle"],
    },
  ];

  dbase.collection("courses").insertMany(coursesId, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});*/

///////////////////////////////////////////////// MOSTRO UN SOLO DATO - FindOne()

/*MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.collection("students").findOne({}, (err, res) => {
    if (err) throw err;
    console.log(res.nome);
    db.close();
  });
});*/

//////////////////////////////////////////////// MOSTRO TUTTI I DATI - Find()

/*MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase
    .collection("courses")
    .find({})
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});*/

/////////////////////////////////////////////////// NE MODIFICO UNO - updateOne()

/*MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let query = { nome: "fabiana" };
  let newValue = { $set: { cognome: "Mariotti" } };
  dbase.collection("students").updateOne(query, newValue, function (err, res) {
    if (err) throw err;
    console.log(`record(s) aggiornati`);
    db.close();
  });
});*/
