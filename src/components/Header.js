import { APP_LOGO } from "../../utils/constants";
// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width="100px" alt="Company logo" src={APP_LOGO} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
