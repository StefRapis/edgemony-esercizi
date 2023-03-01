import "./index.css";
import Button from "../button";

const Products = ({ productsInfo }) => {
  const checkAvailability = () =>
    alert(`Quantitá in magazzino: ${productsInfo.stock}`);

  return (
    <div className="Products">
      <div className="section_products">
        <img src={productsInfo.thumbnail} alt="" />
        <h3>{productsInfo.title}</h3> <hr />
        <p>{productsInfo.description}</p>
        <button className="availabilityBtn" onClick={checkAvailability}>
          Controlla disponibilitá
        </button>
        {/* <Button
          text="Controlla disponibilitá"
          onClick={checkAvailability}
          isDisabled={false}
        /> */}
      </div>
    </div>
  );
};

export default Products;
