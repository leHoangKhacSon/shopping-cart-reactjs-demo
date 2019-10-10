import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../components/Footer.css';

const SubFooter = ({ children, urlImage }) => {
  return (
    <li>
      <img src={ urlImage } alt="..." width={25} />
      <span>{ children }</span>
    </li>
  )
}

export default SubFooter;

SubFooter.propTypes = {
  children: PropTypes.string,
  urlImage: PropTypes.string
}