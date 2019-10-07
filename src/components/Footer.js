import React from 'react';

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
import twitter from '../img/twitter.svg';
import address from '../img/address.svg';
import phone from '../img/phone.svg';

const Footer = () => {
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
                  <img src={facebook} width={30} alt="icon" />
                </li> 
                <li>
                  <img src={instagram} width={30} alt="icon" />
                </li> 
                <li>
                  <img src={github} width={30} alt="icon" />
                </li> 
                <li>
                  <img src={google} width={30} alt="icon" />
                </li> 
                <li>
                  <img src={twitter} width={30} alt="icon" />
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
                  Matte Lipstick
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Lip gloss
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Creame lipstick
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Early lipstick
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Lip balm
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
                <SubFooter urlImage={urlImg}>
                  Coderx.com
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Github.com
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Google.com
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Reactjs.org
                </SubFooter>
                <SubFooter urlImage={urlImg}>
                  Stackoverflow
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
                <SubFooter urlImage={address}>
                  Address: Da Nang City - Viet Nam
                </SubFooter>
                <SubFooter urlImage={facebook}>
                  Facebook: coderx.facebook.com
                </SubFooter>
                <SubFooter urlImage={google}>
                  Email: Sonqueen.no1@gmail.com
                </SubFooter>
                <SubFooter urlImage={phone}>
                  Phonenumber: 033.6511.283
                </SubFooter>
                <SubFooter urlImage={instagram}>
                  Instagram: coderx.instagram
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

export default Footer;