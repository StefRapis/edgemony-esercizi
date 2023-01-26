// Avanzato
// Creare un grafico a piacere basato su una api a scelta oppure su un mock costruito ad hoc.

// *************************************  AVANZATO  ***********************************************

const BASE_URL = "https://dummyjson.com/";

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

const weightGenerator = (value, weight) => {
  const title = document.createElement("h3");
  const tower = document.createElement("div");
  const statusBar = document.createElement("div");

  tower.className = "tower_container";

  title.className = "title_container";
  title.textContent = value;

  statusBar.className = "status_bar";
  // statusBar.style.height = 0;
  // statusBar.style.height = weight * 10;

  tower.append(title, statusBar);
  return tower;
};

const bodyEl = document.querySelector("body");
const container = document.querySelector(".container_grafico");
let 

// container.append(weightGenerator("30-40", 80));

GET ("users").then((data) => {
  const userWeight = data.users.map((user) => user.weight);
  const firstTower = data.users.filter((weight) => weight <= 20);
  const secondtTower = data.users.filter((weight) => weight <= 30);
  const thirdTower = data.users.filter((weight) => weight <= 40);
  const fourthTower = data.users.filter((weight) => weight <= 50);
});
