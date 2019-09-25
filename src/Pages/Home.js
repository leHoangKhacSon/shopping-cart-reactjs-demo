import React, {Component} from 'react';

import Slide from '../components/Slide';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';

class Home extends Component {
  
  render() {
    const { items } = this.props;
    console.log(this.props.items);
    return (
      <div>
        <Slide items={ items } />
        <FeatureProduct />
        <Footer />
      </div>
    )
  }
}

export default Home;