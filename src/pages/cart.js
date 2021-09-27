import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { cartActions, sendCart } from '../store/cart-slice';
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let totalPrice = 0;

  for (const item of cart.items) {
    totalPrice += item.totalPrice;
  }
  const checkoutHandler = () => {
    dispatch(cartActions.replaceCart([]));
    dispatch(sendCart());
  };

  useEffect(() => {
    setTotalAmount(totalPrice);
    dispatch(sendCart());
  }, [cart, dispatch, totalPrice]);

  return (
    <div className="cart">
      {cart.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        ></CartItem>
      ))}
      <p>Total Amount:{totalAmount}$</p>
      <button onClick={checkoutHandler}>Checkout</button>
    </div>
  );
};

export default Cart;
