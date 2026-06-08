
import './App.scss'
import Products from './components/routes/products/products'
import NavBar from './components/shared/navigation/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useFetch } from './hooks/fetch'
import { useEffect } from 'react'
import { ProductContext } from './context/productsContext'

function App() {

  const products = useFetch('./data/products.json');

  useEffect(() => {


  })


  return (
    console.log("Products", products),
    <div>

      <ProductContext.Provider value={products}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </div>
  )
}

export default App
