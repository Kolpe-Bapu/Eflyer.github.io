import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Products from './components/Products';
import Ship from './components/Ship';
import Order from './components/Order';
import Payment from './components/Payment';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/ship' element={<Ship/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
