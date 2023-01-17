// Esercitazione
// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Con il metodo giusto per la manipolazione delle stringe limitiamo il titolo della card a solo 10 caratteri e la descrizione della card a soli 30.
// Dovremo crere anche un addEventListner al pulsante di aggiunta al carrello, in modo da aggiungere l'elemento al vostro carrello const cart = [] facendo apparire un alert() che indichi l'avvenuta aggiunta al carrello dell'elemento.
// NB: è gradita sempre la gestione degli errori per il metodo fetch() ed un loader

// Avanzato
// Fare in modo che gli elementi dentro l'array const cart = [] vengano visualizzati nel DOM creando i rispettivi elementi e prevedere un pulsante che rimuova l'elemento selezionato dal carrello

const bodyEl = document.querySelector("body");
const productsEl = document.querySelector("div");
const downloadButton = document.querySelector(".download__btn");
const loaderElement = document.querySelector(".loader");

const cart = [];

downloadButton.addEventListener("click", () => {
  loaderElement.textContent = "sto caricando...";

  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      manipulationFunc(data);
    })
    .catch((error) => {
      loaderElement.textContent = "errore!";
    });
});

const manipulationFunc = (data) => {
  loaderElement.textContent = "";

  data.forEach((item) => {
    const container = document.createElement("div");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    const buyButton = document.createElement("button");
    const tendina = document.createElement("div");

    container.className = "infoContainer";

    name.className = "cardName";
    name.textContent = item.title.substr(0, 11);

    description.className = "cardDescription";
    description.textContent = item.description.substr(0, 31);

    price.className = "cardPrice";
    price.textContent = item.price + " euro";

    image.className = "cardImage";
    image.setAttribute("src", item.images);

    buyButton.className = "buyButton";
    buyButton.textContent = "Aggiungi al carrello";

    tendina.className = "tendinaCart";

    buyButton.addEventListener("click", () => {
      cart.push(item);
      console.log(cart);
      alert("Oggetto aggiunto nel carrello");
    });

    bodyEl.append(productsEl, tendina);
    productsEl.appendChild(container);
    container.append(image, name, description, price, buyButton);
  });
};
