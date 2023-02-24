// FUNZIONE GENERATRICE DI SINGOLE CARD
const contactsGen = (data) => {
  //   const { name, username, email, phone, website, points } = data;

  const wrapper = cE("div");
  const idWrap = cE("div");
  const nameField = cE("h2");

  const usernameWrap = cE("div");

  const usernameField = cE("h3");
  const subWrap = cE("div");
  const scoreWrap = cE("div");
  const scorePoints = cE("h2");
  const infoWrap = cE("div");
  const emailField = cE("p");
  const phoneField = cE("p");
  const websiteField = cE("p");

  wrapper.className = "wrapper";

  idWrap.className = "id_wrap";

  nameField.className = "name_field";
  nameField.textContent = data.name;

  usernameWrap.className = "username_wrap";

  usernameField.className = "username_field";
  usernameField.textContent = data.username;

  subWrap.className = "sub_wrap";

  scoreWrap.className = "score_wrap";

  scorePoints.className = "score_points";
  scorePoints.textContent = data.points;

  infoWrap.className = "info_wrap";

  emailField.className = "email_field";
  emailField.textContent = data.email;

  phoneField.className = "phone_field";
  phoneField.textContent = data.phone;

  websiteField.className = "website_field";
  websiteField.textContent = data.website;

  wrapper.append(idWrap, subWrap);

  idWrap.append(nameField, usernameWrap);
  usernameWrap.appendChild(usernameField);
  subWrap.append(scoreWrap, infoWrap);
  scoreWrap.appendChild(scorePoints);
  infoWrap.append(emailField, phoneField, websiteField);

  // AGGIUNGO COLORI IN BASE AL PUNTEGGIO
  if (data.points < 6) {
    wrapper.style.backgroundColor = "#F9DEDB";
    scorePoints.style.color = "#F7A4A4";
  } else if (data.points >= 6 && data.points <= 8) {
    wrapper.style.backgroundColor = "#FFD8A9";
    scorePoints.style.color = "#F7A76C";
  } else {
    wrapper.style.backgroundColor = "#EFFEC0";
    scorePoints.style.color = "#A7DE02";
    scoreWrap.style.backgroundColor = "#FFFDD6";
  }

  return wrapper;
};

// FUNZIONE PER CANCELLARE TUTTE LE SCHEDE A OGNI FILTRO
const removeCards = () => {
  const wrapperEls = document.querySelectorAll(".wrapper");

  wrapperEls.forEach((wrapper) => wrapper.remove());
};

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);

const bodyEl = qS("body");
const bigContainer = qS(".big_container");
const scoreFilter = qS(".score");

// OGGETTO PROVA PER RENDER SCHEDA
// const obj = {
//   id: 3,
//   name: "Clementine Bauch",
//   username: "Samantha",
//   email: "Nathan@yesenia.net",
//   address: {
//     street: "Douglas Extension",
//     suite: "Suite 847",
//     city: "McKenziehaven",
//     zipcode: "59590-4157",
//     geo: {
//       lat: "-68.6102",
//       lng: "-47.0653",
//     },
//   },
//   phone: "1-463-123-4447",
//   website: "ramiro.info",
//   company: {
//     name: "Romaguera-Jacobson",
//     catchPhrase: "Face to face bifurcated interface",
//     bs: "e-enable strategic applications",
//   },
// };

// FETCH

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

GET("users").then((data) => {
  // con Map creo nuovo array con aggiunta dei punteggi
  const newData = data.map((user) => {
    let userScore = Math.random() * 11;
    user.points = Math.floor(userScore) + 1;
    return user; // se non metti questo return, non puoi procedere con il codice successivo perché non ti sei ritornata nulla
  });

  // con Sort(), ordino l'array creato prima
  const sortedArray = newData.sort((a, b) => a.points - b.points);

  // faccio un Map del nuovo array ordinato e appendo ogni oggetto al contenitore
  sortedArray.map((item) => {
    // console.log(item);
    bigContainer.appendChild(contactsGen(item));
  });
});

// STESSA COSA MA CON LOOP FOR
// GET("users").then((data) => {
//   for (let user of data) {
//     let userScore = Math.random() * 11;
//     user.points = Math.floor(userScore) + 1;
//     bigContainer.appendChild(contactsGen(user));
//   }
// });

// AGGIUNGO RICERCA PER FILTRO SU TAG "SELECT"
scoreFilter.addEventListener("change", (event) => {
  // LOW
  if (`${event.target.value}` === "low") {
    removeCards();
    GET("users").then((data) => {
      data.map((user) => {
        let userScore = Math.random() * 11;
        user.points = Math.floor(userScore) + 1;
      });
      data.filter((user) => {
        if (user.points < 6) {
          bigContainer.appendChild(contactsGen(user));
        }
      });
    });
  }
  // MID
  if (`${event.target.value}` === "mid") {
    removeCards();
    GET("users").then((data) => {
      data.map((user) => {
        let userScore = Math.random() * 11;
        user.points = Math.floor(userScore) + 1;
      });
      data.filter((user) => {
        if (user.points >= 6 && user.points <= 8) {
          bigContainer.appendChild(contactsGen(user));
        }
      });
    });
  }
  // HIGH
  if (`${event.target.value}` === "high") {
    removeCards();
    GET("users").then((data) => {
      data.map((user) => {
        let userScore = Math.random() * 11;
        user.points = Math.floor(userScore) + 1;
      });
      data.filter((user) => {
        if (user.points > 8) {
          bigContainer.appendChild(contactsGen(user));
        }
      });
    });
  }
});
