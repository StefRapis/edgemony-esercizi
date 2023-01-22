const bodyEl = document.querySelector("body");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");

const btn1 = document.querySelector("#btn_1");
const btn2 = document.querySelector("#btn_2");
const btn3 = document.querySelector("#btn_3");

const img1 = document.querySelector("#img_1");
const img2 = document.querySelector("#img_2");
const img3 = document.querySelector("#img_3");

const productsEl = document.querySelector(".products");
const downloadButton = document.querySelector(".product__link");
const loaderElement = document.querySelector(".loader");

const cart = [];

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img2.classList.add("show");
  img1.classList.remove("show");
  img3.classList.remove("show");

  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img3.classList.add("show");
  img1.classList.remove("show");
  img2.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

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
    const card = document.createElement("div");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    const buyButton = document.createElement("button");

    card.className = "infoCard";

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

    // DENTRO LE CARD DINAMICHE AGGIUNGO EV.LIST SUL PULSANTE AGGIUNGI AL CARRELLO CHE MI PUSHA L'ARTICOLO NELL'ARRAY "CART" E INVOCA LA
    // FUNZIONE "cartTendina"........
    buyButton.addEventListener("click", () => {
      cart.push(item);
      cartTendina();
      console.log(cart);
      alert("Oggetto aggiunto nel carrello");
    });

    bodyEl.append(productsEl);
    productsEl.appendChild(card);
    card.append(image, name, description, price, buyButton);
  });
};

//......CHE PER OGNI OGGETTO PUSHATO, (svuotando la tendina ogni volta) MI CREA UN p CON IL TITLE DELL'OGGETTO E LO APPENDE ALLA TENDINA
const cartTendina = () => {
  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.innerHTML = `<p class="cartTitle">${item.title}</p><p>${item.price} euro </p>`;
    cartEl.className = "cart_element";
    const eraseButton = document.createElement("button");
    eraseButton.textContent = "X";
    eraseButton.className = "erase_button";

    eraseButton.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(index, 1);
    });

    cartEl.appendChild(eraseButton);
    tendina.appendChild(cartEl);
  });
};
