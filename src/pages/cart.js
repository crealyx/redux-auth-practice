import CartItem from '../components/CartItem';
const Cart = () => {
  return (
    <div className="cart">
      <CartItem></CartItem>
      <p>TotalQuantity</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
