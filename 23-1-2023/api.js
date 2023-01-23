const URL_BASE = "https://dummyjson.com";

// CREO FUNZIONE PER IL METODO "GET" USANDO ASYNC E AWAIT
const GET = async (endpoint) => {
  const res = await fetch(URL_BASE + endpoint);
  const data = await res.json();
  return data;
};

export { GET };
