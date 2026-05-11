import { useState } from 'react'
import Header from './common/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title={'Joanne\'s Market'} />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
        </Routes>
      </div>
      <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
    </>
  )
}

export default App
