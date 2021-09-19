import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Exercise</h1>
      <ul className="navbar">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
