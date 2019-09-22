import React, {Component} from 'react';
import axios from 'axios';

import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

import { CartContext } from '../contexts/cart';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: ''
    }
  }
  // fetch data use id product
  componentDidMount() {
    axios.get('https://7x5xg.sse.codesandbox.io/products', {
      params: {
        id: this.props.match.params.id
      }
    })
    .then(res => {
      this.setState({
        product: res.data[0]
      })
    })
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <Row>
        <Col md="4">
          <Card>
            <CardImg top width="100%" src={product.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{product.name}</CardTitle>
              <CardText>{product.desciption}</CardText>
              <Link to="/cart/">
                <CartContext.Consumer>
                  {({addToCart}) => (
                    <Button onClick={ () => addToCart(product) }>
                      Add to cart
                    </Button>
                  )}
                </CartContext.Consumer>
              </Link>
              
            </CardBody>
        </Card>
    
        </Col>
      </Row>
     
    )
  }
}

export default ProductDetails;