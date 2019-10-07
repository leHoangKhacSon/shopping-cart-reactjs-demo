import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  Container, Row, Col,
  Card, CardImg, 
  Button
} from 'reactstrap';
import { Link } from "react-router-dom"; 

import { CartContext } from '../contexts/cart';
import imgCart from '../img/cart.svg';

function Product() {

  const [ products, SetProducts ] = useState([])

  // install data
  useEffect(() => {
    axios.get('https://7x5xg.sse.codesandbox.io/products')
    .then(res => {
      SetProducts(res.data)
    })
  }, [])

  return (
    <Container>
      <h2>Products</h2>
      <Row>
        { products.map((product, index) => (
          <Col key={index} md="3">
            <Card className="box-add-cart">
              <Link to={`/products/${product.id}`}>
                <CardImg top width="100%" height="360" src={ product.image } alt="Card image cap" />
              </Link>
              <CartContext.Consumer>
                { ({addToCart}) => (
                <Link to="/cart/">
                  <Button className="btn-add-cart" onClick={() => addToCart(product)}>
                    Add to cart
                    <img src={imgCart} alt="im" width={20} />
                  </Button> 
                </Link>
                )}
              </CartContext.Consumer> 
            </Card>
            <div className="price-cart">
              <p>{ product.name }</p>
              <p>$90.00
                <span>$100.00</span>
              </p>
            </div>
          </Col>
        )) }
      </Row>
    </Container> 
  )
}

export default Product;