import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TopMenu from './components/TopMenu';
import Product from './Pages/Product';

import { CartProvider } from './contexts/cart';

const Index = () => <h2>Home</h2>
const Cart = () => <h2>Cart</h2>

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />

          <Route path="/" exact component={Index} />
          <Route path="/products/" component={Product} />
          <Route path="/cart/" component={Cart} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
