import React, { Component } from 'react';
import axios from 'axios';

import {
  Container, Row, Col,
  Card, CardImg, 
  Button
} from 'reactstrap';
import { Link } from "react-router-dom"; 

import './SubProduct.css';
import imgCart from '../../img/cart.svg';
import { CartContext } from '../../contexts/cart';

class SubProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://7x5xg.sse.codesandbox.io/products')
         .then(res => {
           this.setState({
             products: res.data
           });
         });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Row>
          { products.slice(0, 4).map(product => (
            <Col md="3">
              <Card className="box-add-cart">
                <Link to={`/products/${product.id}`}>
                  <CardImg top width="100%" height="360" src={ product.image } alt="Card image cap" />
                  <CartContext.Consumer>
                    { ({addToCart}) => (
                    <Button className="btn-add-cart" onClick={() => addToCart(product)}>
                      Add to cart
                      <img src={imgCart} alt="im" width={20} />
                    </Button> 
                    )}
                  </CartContext.Consumer> 
                </Link>
              </Card>
              <div className="price-cart">
                <p>{ product.name }</p>
                <p>$90.00
                  <span>$100.00</span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default SubProduct;