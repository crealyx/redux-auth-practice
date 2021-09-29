import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react';
import { authActions } from '../store/authSlice';
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const logOutHandler = () => {
    dispatch(authActions.signOutUser());
  };
  return (
    <header className="header">
      <h1>Redux Exercise</h1>
      <ul className="navbar">
        {isLoggedIn ? (
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
            <li>
              <Link to="/" onClick={logOutHandler}>
                Logout
              </Link>
            </li>
          </Fragment>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
