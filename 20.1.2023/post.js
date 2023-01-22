const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const categoryInput = document.querySelector("#category");
const imageInput = document.querySelector("#image");
const formProducts = document.querySelector("#form__products");
const addEditInput = document.querySelector("#addOrEditInput");
const justEditInput = document.querySelector("#justEditsInput");

const categoryForm = document.querySelector("#form__categories");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

const deleteForm = document.querySelector("#delete__product");
const deleteInput = document.querySelector("#productId");

// METODO POST. PRIMO FORM
// CREO UN OGGETTO PER SPEDIRLO AL BACKEND
formProducts.addEventListener("submit", (event) => {
  console.log(event.target);
  event.preventDefault();

  const obj = {
    title: titleInput.value,
    price: parseInt(priceInput.value),
    description: descriptionInput.value,
    categoryId: parseInt(categoryInput.value),
    images: [imageInput.value],
  };
  console.log(obj);
  postFunction(obj);
});

// CREO LA FUNZIONE POST PER SPEDIRE OGGETTO (trasformato in stringa) AL BACKEND
const postFunction = (objItems) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objItems),
  })
    .then((res) => res.json())
    .then((data) => console.log("LA RISPOSTA DEL POST: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};
// PRODOTTO CARICATO

// CREO UN OGGETTO CATEGORIA AL PUSH DEL PULSANTE DEL FORM
categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const categoryObj = {
    name: catName.value,
    image: catImage.value,
  };
  console.log(categoryObj);
  categoryFunction(categoryObj, "categories");
});

// CREO UNA SECONDA FUNZIONE PER SPEDIRE AL BACKEND IL NUOVO OGGETTO CATEGORIA
// SECONDO FORM
const categoryFunction = (categoryObj, parametro) => {
  fetch(`https://api.escuelajs.co/api/v1/` + parametro, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryObj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          `${parametro} L'OGGETTO NON E' STATO CARICATO: ` + data.message[0]
        );
      } else {
        alert(`${parametro} CARICATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};

// METODO DELETE - TERZO FORM
// CREO FUNZIONE "RIUTILIZZABILE" CON 2 PARAMETRI, PER CANCELLARE O UN PRODOTTO O UNA CATEGORIA
const deleteElement = (endPoint, productId) => {
  fetch("https://api.escuelajs.co/api/v1/" + endPoint + "/" + productId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data !== true) {
        alert(`${endPoint} Oggetto non eliminato: ` + data.name);
      } else {
        alert(`${endPoint} Oggetto eliminato correttamente`);
        data;
      }
    })
    .catch((e) => ("ERRORE: ", e));
};

// POI, CREO ADDEVENTLISTENER SUL FORM E INCLUDO ANCHE L'INVOCAZIONE DELLA FUNZIONE CON I DUE PARAMETRI (il primo per indicare il rif all'end point di cio che vogliamo eliminare e il secondo per dargli in pasto l'id che l'utente inserisce nel form stesso.)
deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  deleteElement("products", deleteInput.value);
  // per evitare di andare a pescare gli elementi con il QS, posso risalire all'id del prodotto tramite l'oggetto evento del form stesso.
  // event.target[0].value;
});
