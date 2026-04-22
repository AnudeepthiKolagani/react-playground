import { useState } from "react";

import { APP_LOGO } from "../../utils/constants";
import { Link } from "react-router";
// Header component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img width="100px" alt="Company logo" src={APP_LOGO} />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li className="loginBtn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
