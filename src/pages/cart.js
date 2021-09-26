import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { sendCart } from '../store/cart-slice';
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    dispatch(sendCart(cart.items));
  }, [cart.items, dispatch]);

  return (
    <div className="cart">
      {cart.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        ></CartItem>
      ))}
      <p>Total Amount:{totalPrice}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
