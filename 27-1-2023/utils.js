const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const BASE_URL = "https://api.themoviedb.org/3/tv/";
const API_KEY = "api_key=f443bcf0af8c5783ab55f098ca24c218";

// esempio richiesta API: https://api.themoviedb.org/3/movie/550?api_key=f443bcf0af8c5783ab55f098ca24c218
// esempio tv : // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
// type = movie o tv

export { cE, qS, GET };

const GET = async (type = "popular") => {
  const res = await fetch(BASE_URL + type + "?" + API_KEY);
  const data = await res.json();
  return data;
};
