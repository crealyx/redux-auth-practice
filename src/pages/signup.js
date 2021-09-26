import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions, createAccount } from '../store/auth-slice';
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
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createAccount({ email, password }));
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
