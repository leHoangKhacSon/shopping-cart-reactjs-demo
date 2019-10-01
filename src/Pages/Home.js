import React from 'react';

import Slide from '../components/Slide';
import SingleService from '../components/SingleService';
import HotProduct from '../components/HotProduct';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';

const Home = (props) => {
  const { items, services, imgsHotProduct } = props;
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

export default Home;