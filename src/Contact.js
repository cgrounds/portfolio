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
            <a href="https://www.facebook.com/clintgrounds"><img src="../images/facebook.png"/>
            </a>
            <a href="https://www.linkedin.com/in/clintgrounds"><img src="../images/linkedin.png"/></a>
            <a href="https://pinterest.com/clintgrounds"><img src="../images/pinterest.png"/></a>
            <a href="https://open.spotify.com/user/125505429"><img src="../images/spotify.png"/></a>
            <a href="http://instagram.com/clinstagramed"></a>
            </div>

      </div>
    )
  }
}

export default Contact;
