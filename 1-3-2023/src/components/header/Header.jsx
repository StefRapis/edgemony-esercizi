import "./index.css";

// creo componente funzionale
const Header = () => {
  return (
    <div className="Header">
      <img
        src="https://s3.amazonaws.com/www-inside-design/uploads/2019/05/woolmarkimagelogo-1024x576.png"
        alt=""
      />

      <div className="social">
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=it">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
