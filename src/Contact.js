import React, { Component } from 'react';

class Contact extends Component {
  render(){
    return(
      <div className="nav">
          <h2 id="contactHeader">contact</h2>
          <h3>
            usa 1.812.798.2406
            <br />
            bali +62.812.3636.8255
            <br />
            <a id="email" href="mailto:clintgrounds@gmail.com">clintgrounds@gmail.com</a>
            </h3>
            <div id="socialMedia">
            <a href="https://www.facebook.com/clintgrounds">
            <img src={require('../public/images/facebook.png')} role="presentation"/>
            </a>

            <a href="https://www.linkedin.com/in/clintgrounds">
            <img src={require('../public/images/linkedin.png')} role="presentation"/></a>

            <a href="http://instagram.com/clinstagramed"><img src={require('../public/images/instagram.png')} role="presentation"/></a>

            <a href="https://open.spotify.com/user/125505429">
            <img src="/images/spotify.png" role="presentation"/></a>
            </div>

      </div>
    )
  }
}

export default Contact;
