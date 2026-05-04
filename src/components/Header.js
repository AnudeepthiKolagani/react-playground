import { useContext, useState } from "react";

import { APP_LOGO } from "../../utils/constants";
import { Link } from "react-router";
import UserContext from "../../utils/UserContext";
// Header component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="header flex justify-between items-center p-4 bg-gray-100">
      <div className="logo w-16">
        <img alt="Company logo" src={APP_LOGO} />
      </div>
      <div className="navItems ">
        <ul className="flex m-2">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="loginBtn px-4" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
