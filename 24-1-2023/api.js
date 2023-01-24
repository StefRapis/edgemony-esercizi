// URL BASE PER CONTATTARE IL SERVER
const URL_BASE = "https://dummyjson.com/";

// MI CREO FUNZIONE RIUTILIZZABILE PER CHIAMATA "GET", COMPRENSIVA DI FETCH.

const GET = async (endpoint) => {
  const res = await fetch(URL_BASE + endpoint);
  const data = await res.json();
  return data;
};

export { GET };
