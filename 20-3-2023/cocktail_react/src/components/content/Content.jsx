import "./index.scss";

import Card from "../card";

// const obj = {
//   idDrink: "17187",
//   strDrink: "Derby",
//   strDrinkThumb:
//     "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
//   strCategory: "Ordinary Drink",
//   strAlcoholic: "Alcoholic",
//   strInstructions:
//     "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
//   strIngredient1: "gin",
//   strIngredient2: "Peach Bitters",
//   strIngredient3: "Mint",
// };

const Content = ({ data }) => {
  return (
    <div className="Content">
      {data.map((cocktail) => (
        <Card data={cocktail} key={cocktail.idDrink} />
      ))}
    </div>
  );
};

export default Content;
