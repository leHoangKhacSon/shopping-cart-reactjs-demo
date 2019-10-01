import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import './SingleService.css';

const SingleService = (props) => {
  const { services } = props;
  return (
    <Container>
      <Row>
        { services.map((service) => (
          <Col md="3" className="border-benifit">
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