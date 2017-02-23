import React, { Component } from 'react';
import './CSS/App.css';
import {Link} from 'react-router';

class App extends Component {
  // var scope = getElementsByClassName('kaleid_cont')

  render() {
    return (
      <div className="appDiv">
          <Link to="/" className="navlink">Home</Link>
          <br />
          <Link to="/contact" className="navlink">Contact</Link>
          <br />
          <Link to="/about" className="navlink">About</Link>
          <br />
          <Link to="/portfolio" className="navlink">Portfolio</Link>
          <br />
          <Link to="/resume" className="navlink">Resume</Link>
            <br />
        {this.props.children}
      </div>
    );
  }
}

export default App;
