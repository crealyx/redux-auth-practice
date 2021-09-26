import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { changePassword, authActions } from '../store/auth-slice';
import { unwrapResult } from '@reduxjs/toolkit';
const Profile = () => {
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const changePasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(changePassword(newPassword));
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
        <label htmlFor="password">New Password</label>
        <input type="text" onChange={changePasswordHandler} />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default Profile;
