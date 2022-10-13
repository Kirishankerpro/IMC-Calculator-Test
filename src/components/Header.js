import "../assets/style/Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-items">
        <div className="header-title">
          <Link to="/">
            <h1> IMC Calculator </h1>
          </Link>
        </div>
        <div className="header-nav">
          <ul>
            <Link to="/">
              <li> Accueil </li>
            </Link>
            {/* <Link to="/about">
              <li> En cours </li>
            </Link>
            <Link to="/other">
              <li> En cours </li>
            </Link>
            <Link to="/login">
              <li> En cours </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
