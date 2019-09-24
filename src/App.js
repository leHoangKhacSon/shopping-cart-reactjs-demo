import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TopMenu from './components/TopMenu';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import Footer from './components/Footer';
import Slide from './components/Slide';
import FeatureProduct from './components/FeatureProduct';

import slide1 from './img/slideshow1.jpg';
import slide2 from './img/slideshow2.jpg';

import { CartProvider } from './contexts/cart';

const Index = () => <h2>Home</h2>
const itemsUrl = [
  slide1, slide2, slide1
]

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Slide items={ itemsUrl } />
          <FeatureProduct />

          <Route path="/" exact component={Index} />
          <Route path="/products/" exact component={Product} />
          <Route path="/cart/" component={Cart} />
          <Route path="/products/:id" component={ProductDetails} />

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
