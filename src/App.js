import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent />
    </div>
  );
}

export default App;
