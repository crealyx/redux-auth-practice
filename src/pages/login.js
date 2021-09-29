import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions, signInUser } from '../store/authSlice';
import { useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
const Login = () => {
  const errorState = useSelector((state) => state.auth.errorMessage);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(authActions.resetError());
  }, [dispatch]);
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(signInUser({ email, password }));
      const result = unwrapResult(resultAction);
      dispatch(authActions.logInUser(result.idToken));
      if (!resultAction.error) {
        history.push('/shop');
      }
    } catch (err) {}
  };
  return (
    <div>
      <form className="login-form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <p className="error">{errorState}</p>
        <label htmlFor="email">Enter your e-mail</label>
        <input aria-label="email" type="email" onChange={emailChangeHandler} />
        <label htmlFor="password">Enter your password</label>
        <input
          aria-label="password"
          type="password"
          onChange={passwordChangeHandler}
        />
        <button>Login</button>
        <Link to="/signup" className="signup-button">
          Create new account
        </Link>
      </form>
    </div>
  );
};

export default Login;
