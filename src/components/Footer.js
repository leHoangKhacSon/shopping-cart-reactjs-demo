import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col
} from 'reactstrap';

import SubFooter from '../subComponents/SubFooter';
import './Footer.css';
import urlImg from '../img/tick.svg';

const urlImage = urlImg;
    

class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="footer">
          <Row>
            <Col md="4">
              <div className="about-us">
                <p className="footer-title">
                  About us
                </p>
                <p>
                  Lorem ipsum dolor sit, amet cons ectetur adipis icing elit. 
                </p>
                <ul>
                  <li>
                    <img src={urlImage} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={urlImage} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={urlImage} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={urlImage} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={urlImage} width="20" alt="icon" />
                  </li> 
                </ul>
              </div>
            </Col>
            <Col md="2">
              <div className="product-us">
                <p className="footer-title">
                  Product
                </p>
                <ul>
                  <SubFooter urlImage={urlImg}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                </ul>   
              </div>
            </Col>
            <Col md="2">
              <div className="product-us">
                <p className="footer-title">
                  Resource
                </p>
                <ul>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                </ul>   
              </div>
            </Col>
            <Col md="4">
              <div className="product-us">
                <p className="footer-title">
                  Contact
                </p>
                <ul>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                  <SubFooter urlImage={urlImage}>
                    Sliptick
                  </SubFooter>
                </ul>   
              </div>
            </Col>
          </Row>
        </div>
        
        <Row>
          <div className="copyright">
            <p>
              Copyright 2019 CodersTokyo. All Rights Reserved
            </p>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Footer;