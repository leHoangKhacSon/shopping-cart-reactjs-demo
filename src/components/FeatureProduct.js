import React from 'react';
import { TabContent, TabPane,
Nav, NavItem, NavLink,
Card, Button, CardTitle,
CardText, Row, Col 
} from 'reactstrap';
import classnames from 'classnames';

import './FeatureProduct.css';
import Product from '../Pages/Product';

export default class FeatureProduct extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <p className="feature-product">
          Feature Product
        </p>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Product Feature
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Product Special
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Product Lastest
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Product />
          </TabPane>
          <TabPane tabId="2">
            <Product />
          </TabPane>
          <TabPane tabId="3">
            <Product />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}