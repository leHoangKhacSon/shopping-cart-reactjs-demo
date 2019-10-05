import React from 'react';

import { Container, Row, Col, CardImg } from 'reactstrap';
import { Link } from "react-router-dom"; 

import './HotProduct.css';

const HotProduct = (props) => {
  const { imgsHotProduct } = props;
  console.log(imgsHotProduct);
  return (
    <Container>
      <Row>
        { imgsHotProduct.map((imgHotProduct, index) => (
          <Col key={index} md="4" className="box-img">
            <span className="border-style-left" />
            <span className="border-style-right" />
            <span className="border-style-bottom" />
            <span className="border-style-top" />
            <Link to="#">
              <CardImg top width="100%" src={ imgHotProduct } alt="Card image cap" />
             
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HotProduct;