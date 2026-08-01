import React from 'react'

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.length === 0 ? (
          <li>No items in cart</li>
        ) : (
          items.map(item => (
            <li key={item.id}>
              {item.name} is in your cart.
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart
