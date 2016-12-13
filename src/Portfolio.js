import React, { Component } from 'react';
import './CSS/Portfolio.css';

class Portfolio extends Component {
  constructor(props){
  super(props);
  this.state={
    mouseOver: false
  }
  this._displayInfo=this._displayInfo.bind(this)
  this._hideInfo=this._hideInfo.bind(this)
}

_displayInfo(e){
  this.setState({ mouseOver: true });
}

_hideInfo(e){
  this.setState({ mouseOver: false });
}

render(){
  let cssClass = "item-info"
  if (!this.state.mouseOver) {
    cssClass += ' hidden'
  }
  return(
      <div id="portfolio">

        <a className="item" onMouseOver={(e) => this._displayInfo(e)} onMouseLeave={(e) => this._hideInfo(e)} href="https://bakertx.github.io/travel-pins-front/"><img src={require('../public/images/travelpins.png')} role="presentation"/>
        <div className={cssClass}>
          <h2>Travel Pins</h2>
          <p>Travel Pins was created using Javascript, jQuery, HTML, CSS, Auth0 and Node technologies. The app allows travelers to drop a pin and leave journal entries on destinations they have visited. Using Auth0 and two Google maps API's, we were able to allow users to sign in and render a map on the site, which then allows them to drop a pin on an area and save their journal entry.</p>
          </div>
          </a>



        <a className="item" onMouseOver={(e) => this._displayInfo(e)} onMouseLeave={(e) => this._hideInfo(e)} target="_blank" href="http://www.lillalane.com"><img src={require('../public/images/lillalane.png')} role="presentation"/>
          <div className={cssClass}>
            <h2>Lilla Lane</h2>
            <p>Rebranding and rebuilding the Lilla Lane website was one of my first tasks when starting with the company. Using the Shopify platform, along with CSS, Javascript and HTML, I constructed the website from the ground up. From shooting and editing all of the product photos to to writing the content, I was able to give Lilla Lane new exposure to clients from around 30 countries. </p>
            </div>
          </a>

        <a className="item" onMouseOver={(e) => this._displayInfo(e)} onMouseLeave={(e) => this._hideInfo(e)} target="_blank" href="https://cgrounds.github.io/zaragosa/"><img src={require('../public/images/zaragosa.png')} role="presentation"/>
          <div className={cssClass}>
            <h2>Zaragosa</h2>
            <p>The Zaragosa website was created using React, React Router, Cors, Node, Lodash, Heroku and Axios for the Etsy API. The site uses two GET requests to hit Etsy's backend through Heroku in order to translate JSONP data from Etsy's APIs. Zaragosa provides e-commerce space for artists and designers to showcase their work, and allows visitors to the site to checkout through the Etsy website.</p>
          </div>
          </a>

        <a className="item" onMouseOver={(e) => this._displayInfo(e)} onMouseLeave={(e) => this._hideInfo(e)} target="_blank" href="https://bakertx.github.io/sandbox/"><img src={require('../public/images/sandbox.png')} role="presentation"/>
          <div className={cssClass}>
            <h2>Sandbox</h2>
            <p>This app was built with React.js and acts as an educational tool that provides a real-time visual representation for the behavior of css properties. Sandbox is structured to render a component for the example box and control board depending which of the typography elements is selected. The control board then renders its corresponding properties while the example box also displays either an image or text. We separated out the control board elements to make them easily accessible if we are to add additional elements to the site.</p>
            </div>
          </a>

      </div>
    )
  }
}

export default Portfolio;
