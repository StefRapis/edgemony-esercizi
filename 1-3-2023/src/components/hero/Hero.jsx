import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <img
        src="https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <h1>
        {" "}
        <span className="tech">Tech:</span> <br /> tutta un'altra storia.
      </h1>
    </div>
  );
};

export default Hero;
