import "./index.css";

const Products = ({ productsInfo }) => {
  return (
    <div className="Products">
      <div className="section_products">
        <img src={productsInfo.thumbnail} alt="" />
        <h3>{productsInfo.title}</h3> <hr />
        <p>{productsInfo.description}</p>
      </div>
    </div>
  );
};

export default Products;
