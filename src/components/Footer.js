import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

import SubFooter from '../subComponents/SubFooter';
import './Footer.css';

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
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </li>
                  <li>
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </li>
                  <li>
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </li>
                  <li>
                    <i className="fab fa-facebook-square fa-2x"></i>
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
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
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
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
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
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
                    Sliptick
                  </SubFooter>
                  <SubFooter imgfoo="iconFoo">
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