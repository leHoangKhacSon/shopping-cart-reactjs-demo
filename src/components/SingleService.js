import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import './SingleService.css';
import { string } from 'postcss-selector-parser';

const SingleService = ({ services }) => {

  return (
    <Container>
      <Row>
        { services.map((service, index) => (
          <Col key={index} md="3" className="border-benifit">
            <div className="single-service">
              <div className="box-item">
                <img src={ service.imgService } height="40" width="40" alt="img service" />
              </div>
              <p className="box-title">{ service.title }</p>
              <p>{ service.description }</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SingleService;

SingleService.propTypes = {
  services: PropTypes.shape([{
    imgService: string,
    title: string,
    description: string
  }])
}