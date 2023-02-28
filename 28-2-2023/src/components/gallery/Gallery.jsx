import "./index.css";

const Gallery = ({ galleryInfo }) => {
  return (
    <div className="Gallery">
      <div className="section_gallery">
        <img src={galleryInfo.thumbnail} alt="" />
        <h3>{galleryInfo.title}</h3> <hr />
        <p>{galleryInfo.description}</p>
      </div>
    </div>
  );
};

export default Gallery;
