import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './Pages/Home';
import TopMenu from './components/TopMenu';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';

import slide1 from './img/slideshow1.jpg';
import slide2 from './img/slideshow2.jpg';

import { CartProvider } from './contexts/cart';

const itemsUrl = [
  slide1, slide2, slide1
]
const imgServices = [
  {
    imgService: slide1,
    title: "FREE SHIPPING",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  },
  {
    imgService: slide1,
    title: "MONEY BACK",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  },
  {
    imgService: slide1,
    title: "ONLINE SUPPORT",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  },
  {
    imgService: slide1,
    title: "BONUS PLUS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  }
]

const Index = () => <Home items={ itemsUrl } services={ imgServices } />;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          

          <Route path="/" exact component={Index} />
          <Route path="/products/" exact component={Product} />
          <Route path="/cart/" component={Cart} />
          <Route path="/products/:id" component={ProductDetails} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
