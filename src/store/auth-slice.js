import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import '../firebase';
const auth = getAuth();

export const createAccount = createAsyncThunk(
  'users/auth/signUp',
  ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
);
export const signIn = createAsyncThunk(
  'users/auth/signIn',
  ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: '',
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.rejected, (state, action) => {
        console.log('rejected');
      })
      .addCase(createAccount.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        console.log('fulfilled');
      })
      .addCase(signIn.rejected, (state, action) => {
        console.log('rejected');
      })
      .addCase(signIn.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        console.log(action);
        console.log('fulfilled');
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice;
