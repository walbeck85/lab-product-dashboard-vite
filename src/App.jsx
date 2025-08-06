import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = showInStockOnly
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div>
        <button onClick={() => setShowInStockOnly(false)}>All Products</button>
        <button onClick={() => setShowInStockOnly(true)}>In Stock Only</button>
      </div>
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;