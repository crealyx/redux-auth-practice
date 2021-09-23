import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.signUp({ email: email, password: password }));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Enter your e-mail</label>
        <input type="email" onChange={emailChangeHandler} />
        <label htmlFor="password">Enter your password</label>
        <input type="password" onChange={passwordChangeHandler} />
        <button>Signup</button>
        <p>Create new account</p>
      </form>
    </div>
  );
};

export default Signup;
