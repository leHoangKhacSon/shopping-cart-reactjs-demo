import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../components/Footer.css';

class SubFooter extends Component {
  render() {
    const { children, urlImage } = this.props;
    return (
      <li>
        <img src={ urlImage } alt="..." width="20"/>
        <span>{ children }</span>
      </li>
    )
  }
}

export default SubFooter;