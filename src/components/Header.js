import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Exercise</h1>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
