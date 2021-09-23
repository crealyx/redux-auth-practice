import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';
const firebaseAuth = getAuth();
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: '',
    isLoggedIn: false,
  },
  reducers: {
    signUp(state, action) {
      const userInfo = action.payload;
      createUserWithEmailAndPassword(
        firebaseAuth,
        userInfo.email,
        userInfo.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
    signIn(state, action) {
      const userInfo = action.payload;
      signInWithEmailAndPassword(
        firebaseAuth,
        userInfo.email,
        userInfo.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
