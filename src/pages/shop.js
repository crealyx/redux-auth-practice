import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DUMMY_PRODUCTS from '../dummy_products';
import { cartActions, sendCart } from '../store/cart-slice';
const Shop = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: 1,
      totalPrice: Number(product.price),
    };
    dispatch(cartActions.addItemToCart(item));
  };
  return (
    <div>
      <ul className="shop-list">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className="shop-item">
            <p>{product.name}</p>
            <p>{product.price}$</p>
            <button onClick={() => addToCartHandler(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
