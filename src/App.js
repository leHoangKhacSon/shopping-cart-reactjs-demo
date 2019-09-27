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
import freeShipping from './img/freeshipping.svg';
import moneyBack from './img/moneyback.svg';
import onlineSupport from './img/onlinesupport.svg';
import bonusPlus from './img/bonusplus.svg';

import { CartProvider } from './contexts/cart';

const itemsUrl = [
  slide1, slide2, slide1
]
const imgServices = [
  {
    imgService: freeShipping,
    title: "FREE SHIPPING",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  },
  {
    imgService: moneyBack,
    title: "MONEY BACK",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  },
  {
    imgService: onlineSupport,
    title: "ONLINE SUPPORT",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  },
  {
    imgService: bonusPlus,
    title: "BONUS PLUS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis odio."
  }
];
const imgsHotProduct = [
  "https://res.cloudinary.com/dcailib1d/image/upload/v1568446355/ImagesExpress/pic1_qkgxpf.jpg",
  "https://res.cloudinary.com/dcailib1d/image/upload/v1568446337/ImagesExpress/pic2_kdplhs.jpg",
  "https://res.cloudinary.com/dcailib1d/image/upload/v1568446392/ImagesExpress/pic3_ystnqg.jpg"
];

const Index = () => <Home 
                      items={ itemsUrl } 
                      services={ imgServices } 
                      imgsHotProduct={ imgsHotProduct } 
                    />;

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
