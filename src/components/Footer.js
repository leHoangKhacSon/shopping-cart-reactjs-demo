import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col
} from 'reactstrap';

import SubFooter from '../subComponents/SubFooter';
import './Footer.css';
import urlImg from '../img/tick.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import github from '../img/github.svg';
import google from '../img/google.svg';

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
                    <img src={facebook} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={instagram} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={github} width="20" alt="icon" />
                  </li> 
                  <li>
                    <img src={google} width="20" alt="icon" />
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
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Matte Lipstick
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Lip gloss
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Creame lipstick
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Early lipstick
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Lip balm
                    </SubFooter>
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
                    <SubFooter urlImage={urlImg}>
                      Coderx.com
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Github.com
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Google.com
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Reactjs.org
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Stackoverflow
                    </SubFooter>
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
                    <SubFooter urlImage={urlImg}>
                      Address: Da Nang City - Viet Nam
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={facebook}>
                      Facebook: coderx.facebook.com
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={google}>
                      Email: Sonqueen.no1@gmail.com
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={urlImg}>
                      Phonenumber: 033.6511.283
                    </SubFooter>
                  </li>
                  <li>
                    <SubFooter urlImage={instagram}>
                      Instagram: coderx.instagram
                    </SubFooter>
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