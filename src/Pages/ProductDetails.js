import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom"; 

import { CartContext } from '../contexts/cart';

function ProductDetails(props) {
  
  const [ product, SetProduct ] = useState('')
  // fetch data use id product
  useEffect(() => {
    axios.get('https://7x5xg.sse.codesandbox.io/products', {
      params: {
        id: props.match.params.id
      }
    })
    .then(res => {
      SetProduct(res.data[0])
    })
  }, [props])

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

export default ProductDetails;