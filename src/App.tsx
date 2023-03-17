import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import ProductList from './components/productList/productList';
import ProductDetails from './components/productDetails/productDetails';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="products/:productId/details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
