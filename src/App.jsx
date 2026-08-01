
import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './index.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)
  const addToCart = (product) => setCart(prevCart => [...prevCart, product])
  const removeFromCart = (id) => setCart(prevCart => prevCart.filter(item => item.id !== id))

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select
        aria-label="Category Filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      

      <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} />
      <Cart items={cart} onRemove={removeFromCart} />
    </div>
  )
}

export default App
