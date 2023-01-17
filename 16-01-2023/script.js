// Seguendo quello fatto oggi a lezione effettuate una chiamate fetch() alla seguente API web: https://api.escuelajs.co/api/v1/products e stampate in console nome e descrizione del prodotto simile a questo formato

// --------------
// Tasty Rubber Soap
// The Football Is Good For Training And Recreational Purposes
// --------------
// Modern Bronze Chair
// New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

// State molto attenti all'asincronicità della PROMISE

// Avanzato
// Crea delle card il più verosimili possibile ad un vero e-commerce e provate ad utilizzare un loader (puo anche essere un semplice messaggio) e la gestione degli errori

const bodyEl = document.querySelector("body");
const downloadButton = document.querySelector(".download__btn");
const loaderElement = document.querySelector(".loader");

//******************* PRIMO ESERCIZIO

// downloadButton.addEventListener("click", () => {
//   fetch("https://api.escuelajs.co/api/v1/products")
//     .then((res) => res.json())
//     .then((data) => {
//       manipulationFunc(data);
//     });
// });

// const manipulationFunc = (data) => {
//   data.forEach((item) => {
//     console.log(item.title);
//     console.log(item.description);
//   });
// };

//******************* SECONDO ESERCIZIO

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

    container.className = "infoContainer";
    name.className = "cardName";
    name.textContent = item.title;
    description.className = "cardDescription";
    description.textContent = item.description;
    price.className = "cardPrice";
    price.textContent = item.price + " euro";
    image.className = "cardImage";
    image.setAttribute("src", item.images);
    buyButton.className = "buyButton";
    buyButton.textContent = "Aggiungi al carrello";

    bodyEl.appendChild(container);
    container.append(image, name, description, price, buyButton);
  });
};
