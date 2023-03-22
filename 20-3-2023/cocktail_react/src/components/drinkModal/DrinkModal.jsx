import styles from "./index.module.scss";

const obj = {
  idDrink: "11006",
  strDrink: "Daiquiri",
  strDrinkAlternate: null,
  strTags: "IBA,Classic,Beach",
  strVideo: null,
  strCategory: "Ordinary Drink",
  strIBA: null,
  strAlcoholic: "Alcoholic",
  strGlass: "Cocktail glass",
  strInstructions:
    "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
  strInstructionsES: null,
  strInstructionsDE:
    "Alle Zutaten in den Shaker mit Eiswürfel geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.",
  strInstructionsFR: null,
  strInstructionsIT:
    "Versare tutti gli ingredienti nello shaker con cubetti di ghiaccio.Filtrare in una coppetta da cocktail ghiacciata. Agitare bene",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
  strIngredient1: "Light rum",
  strIngredient2: "Lime",
  strIngredient3: "Powdered sugar",
  strIngredient4: null,

  strMeasure1: "1 1/2 oz ",
  strMeasure2: "Juice of 1/2 ",
  strMeasure3: "1 tsp ",

  strImageSource:
    "https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg",
  strImageAttribution: "Will Shenton",
  strCreativeCommonsConfirmed: "Yes",
  dateModified: "2015-08-18 15:06:37",
};

const DrinkModal = ({ setDrinkModal }) => {
  const closeModal = () => {
    setDrinkModal(false);
  };

  return (
    <div className={styles.DrinkModal}>
      <div className={styles.image}>
        <img src={obj.strDrinkThumb} alt="cocktail" />
      </div>
      <div className={styles.info}>
        <button onClick={closeModal}>X</button>
        <h2>{obj.strDrink}</h2>
        <h4>{obj.strCategory}</h4>
        <span>
          Pour in a <p>{obj.strGlass}</p>
        </span>
        <hr />
        <div className={styles.ingredients}>
          <p>{obj.strIngredient1}</p>
          <p>{obj.strIngredient2}</p>
          <p>{obj.strIngredient3}</p>
        </div>

        <h5>Instructions:</h5>
        <p>{obj.strInstructions}</p>
      </div>
    </div>
  );
};

export default DrinkModal;
