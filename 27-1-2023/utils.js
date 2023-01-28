const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const qSA = (type) => document.querySelectorAll(type);

const BASE_URL = "https://api.themoviedb.org/3/tv/";
const BASE_URL2 = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=f443bcf0af8c5783ab55f098ca24c218";

// esempio richiesta API: https://api.themoviedb.org/3/movie/550?api_key=f443bcf0af8c5783ab55f098ca24c218
// esempio tv : // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
// type = movie o tv

export { cE, qS, qSA, GET, GET3, tvCardGenerator, modalCreator };

const GET = async (type = "popular") => {
  const res = await fetch(BASE_URL + type + "?" + API_KEY);
  const data = await res.json();
  return data;
};

const GET3 = async (type, id) => {
  const res = await fetch(BASE_URL2 + type + "/" + id + "?" + API_KEY);
  const data = await res.json();
  return data;
};

const tvCardGenerator = (data) => {
  const tvCardEl = cE("div");
  const tvImage = cE("img");

  tvCardEl.className = "card_element";
  tvCardEl.setAttribute("id", data.id);
  tvImage.className = "tv_image";

  if (data.poster_path) {
    tvImage.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }

  tvImage.setAttribute("alt", data.title);

  tvCardEl.appendChild(tvImage);
  return tvCardEl;
};

const modalCreator = (data) => {
  const modalContainer = cE("div");
  const modalImage = cE("img");
  const wrapperTextEl = cE("div");
  const modalTitle = cE("h2");
  const modalEpisodes = cE("p");
  const modalSeasons = cE("p");
  const modalOverview = cE("p");

  modalContainer.className = "modal_container";
  wrapperTextEl.className = "modal_wrapper";

  modalImage.className = "modal_image";
  modalImage.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  modalTitle.textContent = data.name;
  modalEpisodes.textContent = data.number_of_episodes;
  modalSeasons.textContent = data.number_of_seasons;
  modalOverview.textContent = data.modalOverview;

  wrapperTextEl.append(modalTitle, modalEpisodes, modalSeasons, modalOverview);
  modalContainer.append(modalImage, wrapperTextEl);

  return modalContainer;
};
