import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { cartActions, sendCart } from '../store/cartSlice';
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.totalPrice;
  });

  const checkoutHandler = () => {
    dispatch(cartActions.replaceCart([]));
    dispatch(sendCart());
  };

  useEffect(() => {
    setTotalAmount(totalPrice);
    dispatch(sendCart());
  }, [cartItems, dispatch, totalPrice]);

  return (
    <div className="cart">
      {cartItems.map((item) => (
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
