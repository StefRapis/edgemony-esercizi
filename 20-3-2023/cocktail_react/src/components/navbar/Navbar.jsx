import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="navbar_menu">
        <li>Story</li>
        <li>Mission</li>
        <li>Cocktails</li>
        <li>Contacts</li>
      </ul>
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/minimalistic-logo-alcoholic-bar-shop-restaurant-martini-cocktail-glass-with-straw-white-background-with-inscription-cocktail-bar_450656-249.jpg"
        alt="logo"
      />

      {/* <button>Book</button> */}
      <div className="navbar_social">
        <img
          className="navbar_img"
          src="https://img.icons8.com/ios/512/facebook-new.png"
          alt="facebook logo"
        />
        <img
          className="navbar_img"
          src="https://img.icons8.com/material-outlined/512/instagram-new.png"
          alt="instagram logo"
        />
        <img
          className="navbar_img"
          src="https://img.icons8.com/ios/512/twitter.png"
          alt="twitter logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
