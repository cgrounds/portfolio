import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './CSS/index.css';
import Home from './Home.js'
import Shop from './Shop.js'
import Contact from './Contact.js'
import About from './About.js'
import Portfolio from './Portfolio.js'
import NotFound from './NotFound'
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="shop" component={Shop}/>
      <Route path="contact" component={Contact}/>
      <Route path="about" component={About}/>
      <Route path="portfolio" component={Portfolio}/>
    </Route>

  </Router>,
  document.getElementById('root')
);
// <Route path="*" component={NotFound}/>