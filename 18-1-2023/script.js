// ## Esercitazione
// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Creiamo una nuova pagina al nostro e-commerce che includa un form
// Questo form dovrà contenere i seguenti campi:
// title
// price
// category
// image (dove inseriremo un url ad immagine presente nel web)
// description
// aggiungiamo poi un addEventlistner al form che venga triggherato al submit. Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori

// {
//   title: -valore preso dal form-,
//   price: -valore preso dal form-,
//   description: -valore preso dal form-,
//   categoryId: -valore preso dal form-,
//   images: -valore preso dal form-
// }
// NB: per evitare che si riaggiorni al pagine utilizzare il metodo preventDefault()

// Avanzato
// Inviare l'oggetto creato in precedenza ad una funzione che faccia una fetch() con il metodo POST per caricare il nuovo elemento al database
// Gestite le risposte del POST in modo da dare un feedback all'utente
// NB: ricordate di stringhificare l'oggetto con il metodo JSON.stringify()

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

// AGGIUNGO EVENT LISTENER AL FORM, SCATENATO TRAMITE PULSANTE "INVIA"
