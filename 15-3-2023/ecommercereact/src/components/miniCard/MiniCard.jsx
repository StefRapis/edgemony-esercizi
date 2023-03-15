import "./index.css";

const MiniCard = ({ product }) => {
  const openImg = () => {
    window.open(product.thumbnail);
  };

  return (
    <div className="MiniCard" onClick={openImg}>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default MiniCard;
