import React, { Component } from 'react';
import './CSS/App.css';
import {Link} from 'react-router';

class App extends Component {
  // var scope = getElementsByClassName('kaleid_cont')

  render() {
    return (
      <div>
          <Link to="/" className="active">Home</Link>
          <br />
          <Link to="/contact" className="active">Contact</Link>
          <br />
          <Link to="/about" className="active">About</Link>
          <br />
          <Link to="/portfolio" className="active">Portfolio</Link>
          <br />
          <Link to="/resume" className="active">Resume</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
