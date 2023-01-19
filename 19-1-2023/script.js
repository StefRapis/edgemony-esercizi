// Esercitazione
// Lavoriamo sempre al nostro e-commerce

// Abbelliamolo il più possibile, inserendo nuovi elementi per farlo sembrare sempre più simile ad un vero e-commerce... SIATE CREATEVI!!!
// Creiamo un secondo nuovo form per l'aggiunzione tramite il metodo POST di una nuova categoria nel nostro backend.
// Avanzato
// Nella pagina delle card proviamo a creare un filtro che visualizzi una o piu categorie... STUPITEMI!!!
// Se avete tempo e voglia provate ad aggiungere nuove features come il totale degli elementi del carrello o la somma dei prezzi

const bodyEl = document.querySelector("body");
const productsEl = document.querySelector("div");
const downloadButton = document.querySelector(".download__btn");
const loaderElement = document.querySelector(".loader");

const cart = [];

// METODO FETCH. Andiamo a prendere dal backend una lista di oggetti

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

// FUNZIONE PER CREAZIONE CARD
// Una volta presa, la mandiamo a una funzione che crea per quanti elementi, tante card.

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
