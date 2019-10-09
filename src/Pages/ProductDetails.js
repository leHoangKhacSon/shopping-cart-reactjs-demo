import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom"; 

import { CartContext } from '../contexts/cart';
import star from '../img/star.svg';
import './ProductDetails.css';

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
    <Row className="product-details">
      <Col md="3">
        <Card>
          <CardImg 
            top width="100%" 
            src={product.image} 
            alt="Card image cap" 
            className="product-details-img"
          />
        </Card>
      </Col>
      <Col md="3">
        <Card>    
          <CardBody>
            <p className="price-new">
              $90.00
              <span>
                $100.00
              </span>
            </p>
            <React.Fragment>
              <CardImg 
                top width={20} 
                src={star} 
                alt="Card image cap" 
                className="star"
              />
              <CardImg 
              top width={20} 
              src={star} 
              alt="Card image cap" 
              className="star"
              />
              <CardImg 
              top width={20} 
              src={star} 
              alt="Card image cap" 
              className="star"
              />
              <CardImg 
              top width={20} 
              src={star} 
              alt="Card image cap" 
              className="star"
              />
              <CardImg 
              top width={20} 
              src={star} 
              alt="Card image cap" 
              className="star"
              />
            </React.Fragment>
            
            <p>
              Brand: <span>{product.name}</span>
            </p>
            <p>
              Product code: <span>product10</span>
            </p>
            <p>
              Availability: <span>In Stock</span>
            </p>
            <p>
              Description: <span>{product.description}</span>
            </p>
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