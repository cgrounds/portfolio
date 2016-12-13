import React, { Component } from 'react';

class Contact extends Component {
  render(){
    return(
      <div className="nav" id="contact">
          <h2 id="contactHeader">contact</h2>
          <h3>
            usa 1.812.798.2406
            <br />
            bali +62.812.3636.8255
            <br />
          </h3>
            <a id="email" className="active" href="mailto:clintgrounds@gmail.com">clintgrounds@gmail.com</a>
            <br />
            <div id="socialMedia">
            <a target="_blank" href="https://www.facebook.com/clintgrounds">
            <img className="active" src={require('../public/images/facebook.png')} role="presentation"/>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/clintgrounds">
            <img className="active" src={require('../public/images/linkedin.png')} role="presentation"/></a>

            <a target="_blank" href="http://instagram.com/clinstagramed"><img className="active" src={require('../public/images/instagram.png')} role="presentation"/></a>

            <a target="_blank" href="https://open.spotify.com/user/125505429">
            <img className="active" src={require('../public/images/spotify.png')} role="presentation"/></a>

            <a target="_blank" href="https://github.com/cgrounds">
            <img className="active" src={require('../public/images/github.png')} role="presentation"/></a>

            </div>

      </div>
    )
  }
}

export default Contact;
