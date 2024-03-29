import React from 'react';

import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import { CartContext } from '../contexts/cart';

const Cart = () => {
  return (
    <Container>
      <h2>
        Shopping Cart
      </h2>
      <Row>
        <CartContext.Consumer>
         {({cartItems}) => (
            cartItems.map((cartItem, index) => (
              <Col key={index} md="4">
                <Card>
                  <CardImg top width="100%" src={ cartItem.image } alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{ cartItem.name }</CardTitle>
                    <CardText>{ cartItem.desciption }</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
         )}
        </CartContext.Consumer>
        
      </Row>
    </Container>
  )
}

export default Cart;