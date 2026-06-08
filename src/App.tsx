
import './App.scss'
import Products from './components/routes/products/products'
import NavBar from './components/shared/navigation/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div>


      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
