import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './App.css';
import Contact from './Contact.js'

var Order = require('./Order.js').orComp1;
var Checkout = require('./Order.js').orComp2;

var Info = React.createClass({  

  render: function() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 text-center">
            <h1 className="lgHd">Application Information</h1>
            <div className="lgTxt">
            <p>This application was built for the purpose of development for a college module!<br/>
            This application does not store any private infromatoin, any information submitted through this application 
            is immediatly destroyed!</p>
            <p>If you have any questions or queries please do not hesitate to contact us using any of the information in the 
            footer of this application on all pages or through the additional contact information on our Contact page</p>
            </div>
          </div>
        </div>
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