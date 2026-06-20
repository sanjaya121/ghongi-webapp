
import './App.scss'
import Products from './components/routes/products/products'
import NavBar from './components/shared/navigation/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useFetch } from './hooks/fetch'
import { useEffect, useState } from 'react'
import { ProductContext } from './context/ProductsContext'
import UseCallbackAndUseMemo from './components/routes/useHooks/usecallback'
import Home from './components/routes/home/Home'
import Clock from './components/routes/clock/Clock'
import CssGrid from './components/routes/cssgrid/Cssgrid'

function App() {

  const products = useFetch('./data/products.json');

  const [products,setProducts]=useState([])

  useEffect(() => {

   fetch("https://api.escuelajs.co/api/v1/products")
  .then(res => res.json())
  .then(data => setProducts(data));

  }, [])

  return (
    <div>

      <ProductContext.Provider value={products}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/hooks" element={<UseCallbackAndUseMemo />} />
            <Route path="/clock" element={<Clock />} />
             <Route path="/css-grid" element={<CssGrid />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </div>
  )
}

export default App
