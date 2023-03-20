import "./index.scss";

const Card = ({ data }) => {
  return (
    <div className="Card">
      <img src={data.strDrinkThumb} alt="" />

      <div className="card_titles">
        <h3>{data.strDrink}</h3>
        <p>{data.strAlcoholic}</p>
        <p>{data.strCategory}</p>
      </div>

      <div className="card_instructions">
        <p>{data.strInstructions}</p>
        <span>{data.strIngredient1}</span>
        <span>{data.strIngredient2}</span>
        <span>{data.strIngredient3}</span>
      </div>
    </div>
  );
};

export default Card;
