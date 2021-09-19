import DUMMY_PRODUCTS from '../dummy_products';
const Shop = () => {
  return (
    <div>
      <ul className="shop-list">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className="shop-item">
            <p>{product.name}</p>
            <p>{product.price}$</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
