import React, {Component} from 'react';

import Slide from '../components/Slide';
import SingleService from '../components/SingleService';
import HotProduct from '../components/HotProduct';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';

class Home extends Component {
  
  render() {
    const { items, services, imgsHotProduct } = this.props;
    return (
      <div>
        <Slide items={ items } />
        <SingleService services={ services } />
        <HotProduct imgsHotProduct={ imgsHotProduct } />
        <FeatureProduct />
        <Footer />
      </div>
    )
  }
}

export default Home;