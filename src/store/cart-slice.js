import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const sendCart = createAsyncThunk(
  'cart/sendCart',
  async (cart, thunkApi) => {
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
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const matchedItem = state.items.find((item) => newItem.id === item.id);
      console.log(matchedItem);
      if (matchedItem) {
        matchedItem.quantity++;
        matchedItem.totalPrice += matchedItem.price;
      } else {
        state.items.push(newItem);
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase((sendCart.rejected = (state, actions) => {}));
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
