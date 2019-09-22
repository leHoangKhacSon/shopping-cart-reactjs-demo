import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

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
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt"></i>
                    <span> Sliptick</span>
                  </li>
                </ul>   
              </div>
            </Col>
            <Col md="2">
              <div className="product-us">
                <p className="footer-title">
                  Resource
                </p>
                <ul>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                </ul>   
              </div>
            </Col>
            <Col md="4">
              <div className="product-us">
                <p className="footer-title">
                  Contact
                </p>
                <ul>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
                  <li>
                    <i className="fab fa-product-hunt" />
                    <span> Sliptick</span>
                  </li>
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