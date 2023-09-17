import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import {Routes, Route,} from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import ProductDetails from './components/Products/Products';

function App() {
  return (
    <div>
      <Navbar />
              <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
        <Route path="/products/:id" component={<ProductDetails />} />
        </Routes>
    </div>
  );
}

export default App;
