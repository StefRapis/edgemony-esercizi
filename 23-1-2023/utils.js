const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

// ESPORTO FUNZIONI cE e qS in FILE SCRIPT.JS
export { cE, qS, cardCreator };

// CREO FUNZIONE PER GENERAZIONE CARD QUOTE E LE CHIEDO DI RITORNARMI LA CARD CREATA
const cardCreator = (data) => {
  const card = cE("div");
  const cardQuote = cE("h2");
  const cardAuthor = cE("p");

  card.className = "card";
  cardQuote.className = "card_quote";
  cardQuote.textContent = data.quote;
  cardAuthor.className = "card_author";
  cardAuthor.textContent = data.author;

  card.append(cardQuote, cardAuthor);
  return card;
};
