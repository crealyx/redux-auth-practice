import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const changePassword = createAsyncThunk(
  'users/auth/changePassword',
  async (newPassword, thunkApi) => {
    const authState = thunkApi.getState().auth;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authState.idToken,
          password: newPassword,
          returnSecureToken: true,
        }),
        header: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      return thunkApi.rejectWithValue(data.error.message);
    } else {
      return data;
    }
  }
);
export const createAccount = createAsyncThunk(
  'users/auth/signUp',
  async ({ email, password }, thunkApi) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        header: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      return thunkApi.rejectWithValue(data.error.message);
    } else {
      return data;
    }
  }
);
export const signInUser = createAsyncThunk(
  'users/auth/signIn',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          header: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.log(data);
        return thunkApi.rejectWithValue(data.error.message);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    idToken: '',
    isLoggedIn: false,
    errorMessage: '',
  },
  reducers: {
    signOutUser(state, action) {
      state.isLoggedIn = false;
      localStorage.removeItem('idToken');
      state.idToken = null;
    },
    logInUser(state, action) {
      state.isLoggedIn = true;
      state.idToken = action.payload;
    },
    resetError(state, action) {
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(changePassword.pending, (state, action) => {})
      .addCase(changePassword.fulfilled, (state, action) => {
        localStorage.setItem('idToken', action.payload.idToken);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(createAccount.pending, (state, action) => {})
      .addCase(createAccount.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.idToken = action.payload.idToken;
        localStorage.setItem('idToken', action.payload.idToken);
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(signInUser.pending, (state, action) => {})
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.idToken = action.payload.idToken;
        localStorage.setItem('idToken', action.payload.idToken);
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice;
