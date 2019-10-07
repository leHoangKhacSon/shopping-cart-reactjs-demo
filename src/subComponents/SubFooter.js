import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../components/Footer.css';

const SubFooter = (props) => {
  const { children, urlImage } = props;
  return (
    <li>
      <img src={ urlImage } alt="..." width={25} />
      <span>{ children }</span>
    </li>
  )
}

export default SubFooter;