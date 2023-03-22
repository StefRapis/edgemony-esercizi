import styles from "./index.module.scss";

import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = ({ setBurgerMenu }) => {
  const openBurgerMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  return (
    <div className={styles.Navbar}>
      <HiOutlineMenuAlt1 className={styles.burger} onClick={openBurgerMenu} />
      <ul className={styles.menu}>
        <li>Story</li>
        <li>Mission</li>
        <li>Cocktails</li>
        <li>Contacts</li>
      </ul>

      <img
        className={styles.logo}
        src="https://img.freepik.com/premium-vector/minimalistic-logo-alcoholic-bar-shop-restaurant-martini-cocktail-glass-with-straw-white-background-with-inscription-cocktail-bar_450656-249.jpg"
        alt="logo"
      />

      {/* <button>Book</button> */}
      <div className={styles.social}>
        <img
          className={styles.img}
          src="https://img.icons8.com/ios/512/facebook-new.png"
          alt="facebook logo"
        />
        <img
          className={styles.img}
          src="https://img.icons8.com/material-outlined/512/instagram-new.png"
          alt="instagram logo"
        />
        <img
          className={styles.img}
          src="https://img.icons8.com/ios/512/twitter.png"
          alt="twitter logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
