import "./index.css";
import Button from "../button";

const Products = ({ productsInfo }) => {
  const checkAvailability = () =>
    alert(`Quantitá in magazzino: ${productsInfo.stock}`);

  const openImg = () => window.open(productsInfo.images[0], "_self");

  return (
    <div className="Products">
      <div className="section_products">
        <img onClick={openImg} src={productsInfo.thumbnail} alt="" />
        <h3>{productsInfo.title}</h3> <hr />
        <p>{productsInfo.description}</p>
        {/* <button className="availabilityBtn" onClick={checkAvailability}>
          Controlla disponibilitá
        </button> */}
        <Button
          testo="Controlla disponibilitá"
          btnFunc={checkAvailability}
          isDisabled={false}
        />
      </div>
    </div>
  );
};

export default Products;
