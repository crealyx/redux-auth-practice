import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="header">
      <h1>Exercise</h1>
      <ul className="navbar">
        {isLoggedIn && (
          <Fragment>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </Fragment>
        )}

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
