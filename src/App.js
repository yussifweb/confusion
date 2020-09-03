import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';

import './App.css';
import { DISHES } from './shared/dishes';
import DishDetail from './components/DishDetail';



class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       dishes: DISHES
    }
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
        {/* <DishDetail></DishDetail> */}
      </div>
    );
  }
  
}

export default App;
