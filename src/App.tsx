import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
