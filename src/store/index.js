import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../store/cart-slice';
import authSlice from '../store/auth-slice';

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer },
});

export default store;
