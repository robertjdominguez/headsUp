import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';


class NavBar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() {
    return (
      <div>
        <Navbar color="dark" expand="md" className='shadow-lg'>
          <NavbarBrand>
          <Link to='/'>HeadsUP</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <LinkContainer to='/levels'>
            <NavLink>levels</NavLink>
          </LinkContainer>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;