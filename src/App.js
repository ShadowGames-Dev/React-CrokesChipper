import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
//import Order, {Checkout} from './Order.js';
import Contact from './Contact.js'

var Order = require('./Order.js').orComp1;
var Checkout = require('./Order.js').orComp2;

var Info = React.createClass({  
  render: function() {
    return (
      <div className="App">
        
      </div>
    );
  } 
  }) ;

ReactDOM.render((
    <Router>
    <div>
      <Route exact path="/" component={Order}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/info" component={Info}/>
      <Route exact path="/contact" component={Contact}/>
    </div>
  </Router>
), document.getElementById('root')) ;