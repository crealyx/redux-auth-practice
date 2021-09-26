import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { authActions, createAccount } from '../store/auth-slice';
import { unwrapResult } from '@reduxjs/toolkit';

const Signup = () => {
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
      const resultAction = await dispatch(createAccount({ email, password }));
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
        <h2>Signup</h2>
        <label htmlFor="email">Enter your e-mail</label>
        <input type="email" onChange={emailChangeHandler} />
        <label htmlFor="password">Enter your password</label>
        <input type="password" onChange={passwordChangeHandler} />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
