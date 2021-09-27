import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const sendCart = createAsyncThunk(
  'cart/sendCart',
  async (_, thunkApi) => {
    const cartState = thunkApi.getState().cart;
    try {
      const response = await fetch(
        'https://react-auth-practice-b646a-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartState.items),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        return thunkApi.rejectWithValue(data.err.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
);
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const matchedItem = state.items.find((item) => newItem.id === item.id);
      if (matchedItem) {
        matchedItem.quantity++;
        matchedItem.totalPrice += matchedItem.price;
      } else {
        state.items.push(newItem);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const matchedItem = state.items.find((item) => item.id === id);
      if (matchedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        matchedItem.quantity--;
        matchedItem.totalPrice = matchedItem.totalPrice - matchedItem.price;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase((sendCart.rejected = (state, actions) => {}));
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
