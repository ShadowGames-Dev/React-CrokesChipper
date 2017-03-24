import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import Order from './Order.js';

var App = React.createClass({
  render : function() {
    return (
      <div className="App">
        <div className="App-header">
       <header id="top" className="header">
        <div className="text-vertical-center">
          <h1>Crokes Chipper</h1>
          <br />
        </div>
      </header>
      </div>
      </div>
    )
  }
});

var About = React.createClass({  
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
      <header id="top" className="header">
        <div className="text-vertical-center">
          <h1>About</h1>
          <br />
        </div>
      </header>
      </div>
      </div>
    );
  } 
  }) ;

var Contact = React.createClass({  
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
      <header id="top" className="header">
        <div className="text-vertical-center">
          <h1>Contact</h1>
          <br />
        </div>
      </header>
      </div>
      </div>
    );
  } 
  }) ;

ReactDOM.render((
    <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/order" component={Order}/>
    </div>
  </Router>
), document.getElementById('root')) ;