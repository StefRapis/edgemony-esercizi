import "./index.css";
// import Pictures from "./mocks/pictures.js";

const Gallery = () => {
  return (
    // <Pictures />
    <div className="Gallery">
      <img
        src="https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80"
        alt="hand holding a tablet"
      />
      <img
        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        alt="macbook pro"
      />
      <img
        src="https://images.unsplash.com/photo-1621330396167-b3d451b9b83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="smartphone between hands"
      />
    </div>
  );
};

export default Gallery;
