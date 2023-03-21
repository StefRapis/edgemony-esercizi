import "./index.scss";

const Card = ({ data, setDrinkModal }) => {
  const openDrinkModal = () => {
    setDrinkModal(true);
  };

  return (
    <div className="Card" onClick={openDrinkModal}>
      <img src={data.strDrinkThumb} alt="" />

      <div className="card_titles">
        <h3 className="card_title">{data.strDrink}</h3>
        <p className="card_alcohol">{data.strAlcoholic}</p>
      </div>
      <p>{data.strCategory}</p>

      <div className="card_instructions">
        {/* <p>{data.strInstructions}</p> */}
        {/* <span>{data.strIngredient1}</span>
        <span>{data.strIngredient2}</span>
        <span>{data.strIngredient3}</span> */}
      </div>
    </div>
  );
};

export default Card;
