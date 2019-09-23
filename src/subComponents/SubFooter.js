import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

import '../components/Footer.css';

class SubFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, imgfoo } = this.props;
    return (
      <li>
        <i>{ imgfoo }</i>
        <span>{ children }</span>
      </li>
    )
  }
}

export default SubFooter;