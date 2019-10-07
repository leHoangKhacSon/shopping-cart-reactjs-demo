import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import { Link } from "react-router-dom";  

import { CartContext } from '../contexts/cart';

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return  (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">CoderX</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/products/">Products</Link>
              </NavItem>
              <NavItem>
                <Link to="#">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="#">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/login/">Login</Link>
              </NavItem>
              <NavItem>
                <CartContext.Consumer>
                  {({ cartItems }) => (
                    <Link to='/cart/'>Cart ({cartItems.length})</Link>
                  )}
                </CartContext.Consumer>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}