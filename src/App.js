import React, { Component } from 'react';
import './CSS/App.css';
import {Link} from 'react-router';

class App extends Component {
  // var scope = getElementsByClassName('kaleid_cont')

  render() {
    return (

      <aside>
          <Link to="/"activeClassName="home">Home</Link>
          <br />
          <Link to="/contact"activeClassName="active">Contact</Link>
          <br />
          {/* <Link to="/shop"activeClassName="active">Shop</Link>
          <br /> */}
          <Link to="/about"activeClassName="active">About</Link>
          <br />
          <Link to="/portfolio"activeClassName="active">Portfolio</Link>
          <br />
          <Link to="/resume"activeClassName="active">Resume</Link>
        {this.props.children}
        </aside>
    );
  }
}

export default App;
