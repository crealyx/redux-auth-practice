import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions, signInUser } from '../store/auth-slice';
import { useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <label htmlFor="email">Enter your e-mail</label>
        <input type="email" onChange={emailChangeHandler} />
        <label htmlFor="password">Enter your password</label>
        <input type="password" onChange={passwordChangeHandler} />
        <button>Login</button>
        <Link to="/signup" className="signup-button">
          Create new account
        </Link>
      </form>
    </div>
  );
};

export default Login;
