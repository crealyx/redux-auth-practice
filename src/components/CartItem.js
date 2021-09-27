import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>{props.price}$</p>
      <p>Quantity:{props.quantity}</p>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
};

export default CartItem;
