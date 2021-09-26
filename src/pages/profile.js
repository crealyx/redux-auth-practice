import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../store/auth-slice';

const Profile = () => {
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const changePasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changePassword(newPassword));
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
