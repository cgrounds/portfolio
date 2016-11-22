import React, { Component } from 'react';

class Portfolio extends Component {
  render(){
    return(
      <div id="portfolio">

      <a href="https://bakertx.github.io/travel-pins-front/">
      <img role="presentation" src="../images/travelpins.png"/></a>

      <a target="_blank" href="http://www.lillalane.com"><img role="presentation" src="../images/lillalane.png"/></a>

      <a target="_blank" href="https://www.clintgrounds.com"><img role="presentation" src="../images/clintgroundswebsite.png"/></a>
      
      <a target="_blank" href="https://bakertx.github.io/sandbox/"><img role="presentation" src="../images/sandbox.png"/></a>
      </div>
    )
  }
}

export default Portfolio;
