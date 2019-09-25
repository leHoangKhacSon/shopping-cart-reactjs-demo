import React, {Component} from 'react';

import Slide from '../components/Slide';
import SingleService from '../components/SingleService';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';

class Home extends Component {
  
  render() {
    const { items, services } = this.props;
    console.log(this.props.items);
    return (
      <div>
        <Slide items={ items } />
        <SingleService services={ services } />
        <FeatureProduct />
        <Footer />
      </div>
    )
  }
}

export default Home;