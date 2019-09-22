import React, {Component} from 'react';
import axios from 'axios';

import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

import { CartContext } from '../contexts/cart';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products : []
    }
  }

  // install data
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
        <h2>Products</h2>
        <Row>
          { products.map(product => (
            <Col md="4">
              <Card>
                <CardImg top width="100%" src={ product.image } alt="Card image cap" />
                <CardBody>
                  <CardTitle>{ product.name }</CardTitle>
                  <CardText>{ product.desciption }</CardText>
                  <CartContext.Consumer>
                    { ({addToCart}) => (
                    <Button onClick={() => addToCart(product)}>
                      Add to cart
                    </Button> 
                    )}
                  </CartContext.Consumer> 
                  <Link to={`/products/${product.id}`}>
                    <Button>
                      Details
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          )) }
        </Row>
      </Container> 
    )
  }
}

export default Product;