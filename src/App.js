import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';
// import Home from './Home.js';
import Contact from './Contact.js';
import Shop from './Shop.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import {Link, IndexLink} from 'react-router';

class App extends Component {

  render() {
    return (
      <aside>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <br />
          <Link to="/contact"activeClassName="active">Contact</Link>
          <br />
          <Link to="/shop"activeClassName="active">Shop</Link>
          <br />
          <Link to="/about"activeClassName="active">About</Link>
            <br />
            <Link to="/portfolio"activeClassName="active">Portfolio</Link>

        {this.props.children}
        </aside>
    );
  }
}

export default App;
