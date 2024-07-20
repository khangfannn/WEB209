/* eslint-disable no-unused-vars */
import './assets/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeProducts from './components/HomeProducts';
import { Route, Routes } from 'react-router-dom';
import DetailedProducts from './components/DetailedProducts';
import ProductsByCategory from './components/ProductsByCategory';
function App() {
  return (
    <>
    {/* <SignUp/> */}
      <Header/>
      <Routes>
        <Route path="/product/:id"   element={<DetailedProducts/>}/>
        <Route path="/products/:categoryName" element={<ProductsByCategory/>}/>
        <Route path="" element={<HomeProducts/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
