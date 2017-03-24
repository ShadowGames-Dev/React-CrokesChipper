import React, {Component} from 'react';
import './App.css';

var Order = React.createClass({  
  render: function() {
    return (

      <div className="App">
      <div className="App-header">
        <header id="top" className="header">
          <div className="text-vertical-center">
            <h1>Order Menu</h1>
            <br />
          </div>
        </header>
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Menu</h1>
                  <ul className="list-unstyled">
                    <ItemList/>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Specials</h1>
                  <ul className="list-unstyled">
                    <SpecialList/>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Order</h1>
                  <ul className="list-unstyled">
                    <OrderList/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
  }) ;

class ItemList extends Component{
  render(){
    return(
        <div>
          <li>Sample 1</li>
          <li>Sample 2</li>
        </div>


      )
    }
  }

class SpecialList extends Component{
  render(){
    return(
        <div>
          <li>Sample 1</li>
          <li>Sample 2</li>
        </div>


      )
    }
  }

class OrderList extends Component{
  render(){
    return(
        <div>
          <li>Sample 1</li>
          <li>Sample 2</li>
        </div>


      )
    }
  }

module.exports = Order;