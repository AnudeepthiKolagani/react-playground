// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          width="100px"
          alt="Company logo"
          src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg"
        />
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

export default Header