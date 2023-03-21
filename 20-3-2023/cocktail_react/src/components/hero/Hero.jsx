import "./index.scss";

const Hero = ({ setCocktailCategory }) => {
  return (
    <div className="Hero">
      <img
        className="hero_img"
        src="https://img.freepik.com/free-photo/blend-cocktails-glasses-with-orange-fruit_23-2149384409.jpg?w=900&t=st=1679325299~exp=1679325899~hmac=9270a0fd88a1b4a12188edd5ab6d12512d64341af21d3d0315f010b2113ed0db"
        alt="cocktails"
      />
      <div className="hero_categories">
        <ul>
          <li onClick={() => setCocktailCategory("")}>ALL</li>
          <li onClick={() => setCocktailCategory("Cocktail")}>COCKTAILS</li>
          <li onClick={() => setCocktailCategory("Punch / Party Drink")}>
            PUNCH
          </li>
          <li onClick={() => setCocktailCategory("Ordinary Drink")}>
            ORDINARY
          </li>
          <li onClick={() => setCocktailCategory("Shot")}>SHOT</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
