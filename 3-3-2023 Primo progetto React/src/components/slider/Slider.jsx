import "./index.css";
import { useState } from "react";

const Slider = () => {
  const sliderImages = [
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1552960394-c81add8de6b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    "https://images.pexels.com/photos/7241569/pexels-photo-7241569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  // uso useState per la prima volta.
  // setto come valore iniziale la terza foto dell'array alla posizione 2

  const [image, setImage] = useState(2);

  const forward = () => {
    if (image < sliderImages.length - 1) {
      // se l'img é minore della lunghezza dell'array (ci sei dentro) allora aggiungine un'altra
      setImage(image + 1);
    }
  };

  const backword = () => {
    if (image > 0) {
      // se l'img non é la prima dell'array, vai indietro di una img.
      setImage(image - 1);
    }
  };

  return (
    <div className="Slider">
      <img src={sliderImages[image]} alt="technology" />
      <div className="controlBtn">
        <button onClick={() => backword()} className="sliderBtn">
          {"<"}
        </button>

        <button onClick={() => forward()} className="sliderBtn">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
