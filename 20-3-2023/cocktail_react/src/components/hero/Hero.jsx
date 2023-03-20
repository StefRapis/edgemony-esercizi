import "./index.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <img
        className="hero_img"
        src="https://img.freepik.com/free-photo/blend-cocktails-glasses-with-orange-fruit_23-2149384409.jpg?w=900&t=st=1679325299~exp=1679325899~hmac=9270a0fd88a1b4a12188edd5ab6d12512d64341af21d3d0315f010b2113ed0db"
        alt="cocktails"
      />
      <div className="hero_categories">
        <ul>
          <li>ALL</li>
          <li>SHOTS</li>
          <li>PUNCH</li>
          <li>OTHER</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
