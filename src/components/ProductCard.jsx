// ProductCard.jsx
import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={`card ${!product.inStock ? 'outOfStock' : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Unavailable'}
      </button>
    </div>
  )
}

export default ProductCard
