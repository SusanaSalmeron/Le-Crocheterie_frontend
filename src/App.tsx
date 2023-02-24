import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header'
import Footer from './components/footer/footer';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
