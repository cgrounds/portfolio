import React, { Component } from 'react';

class Portfolio extends Component {
  render(){
    return(
      <div id="portfolio">
      <a href="https://bakertx.github.io/travel-pins-front/"><img src={require('../public/images/travelpins.png')} role="presentation"/></a>
      <a target="_blank" href="http://www.lillalane.com"><img src={require('../public/images/lillalane.png')} role="presentation"/></a>
      <a target="_blank" href="https://www.clintgrounds.com"><img src={require('../public/images/clintgroundswebsite.png')} role="presentation"/></a>
      <a target="_blank" href="https://bakertx.github.io/sandbox/"><img src={require('../public/images/sandbox.png')} role="presentation"/></a>
      </div>
    )
  }
}

export default Portfolio;
