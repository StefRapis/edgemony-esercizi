import "./index.css";

const ProductModal = ({ product }) => {
  return (
    <div className="ProductModal">
      <div className="modalOverlay">
        <img src={product.images[0]} alt={product.title} />
      </div>
    </div>
  );
};

export default ProductModal;
