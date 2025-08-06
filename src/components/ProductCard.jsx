import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <>
      {/* Use a fragment to group elements without adding unnecessary DOM nodes */}
      <div className={product.inStock ? 'inStock' : 'outOfStockClass'}>
          {/* Display product name */}
        <h2>{product.name}</h2>

        {/* Display product price */}
        <p>Price: {product.price}</p>

        {/* Show if the product is in stock or out of stock */}
        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

        {/* Button to remove product */}
        <button onClick={() => onRemove(product.id)}>Remove</button>
      </div>
    </>
  );
};

export default ProductCard;