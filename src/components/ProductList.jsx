import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true }
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  const filteredProducts =
    selectedCategory === 'All'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      )}
    </div>
  )
}

export default ProductList
