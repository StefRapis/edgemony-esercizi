const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

export { cE, qS, userCreator, userDelete };

// CREO CARD DINAMICHE DENTRO UNA FUNZIONE
const userCreator = (data) => {
  // DESTRUCTURING: prendo il nome delle chiavi dentro l'array e lo uso come valori dei text content
  const { firstName, lastName, age, gender, email } = data;

  const card = cE("div");
  const userName = cE("h2");
  const userSurname = cE("h2");
  const userAge = cE("p");
  const userGender = cE("p");
  const userEmail = cE("p");

  card.className = "card";

  userName.className = "user_name";
  userName.textContent = firstName;

  userSurname.className = "user_surname";
  userSurname.textContent = lastName;

  userAge.className = "user_age";
  userAge.textContent = age;

  userGender.className = "user_gender";
  userGender.textContent = gender;

  userEmail.className = "user_email";
  userEmail.textContent = email;

  card.append(userName, userSurname, userAge, userGender, userEmail);
  return card;
};

// FUNZIONE PER RIMUOVERE LE CARD
const userDelete = () => {
  const cardEl = document.querySelectorAll(".card");
  cardEl.forEach((card) => card.remove());
};
