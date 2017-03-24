import React, {Component} from 'react';
import './App.css';
import {category, items, discounts} from './data.json';

var Order = React.createClass({ 

  render: function() {
    return (
      <div className="App">
        <br/>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Menu</h1>
                  
                    <ItemList/>

                </div>
              </div>
              <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Specials</h1>
                  
                    <SpecialList/>
                  
                </div>
              </div>
              <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Order</h1>
                  
                    <OrderList/>
                  
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

    for (var i = 0; i < items.length; i++) {
        console.log("Item - "+items[i].name);
    }

    return(
        <div>
        <ul className="list-unstyled">

          {items.map(function(listValue, _id){
            return <li key={_id}>{listValue.name} {listValue.category_id}</li>;
          })}

        </ul>
        </div>
      )
    }
  }

class SpecialList extends Component{
  render(){
    return(
        <div>
        <ul className="list-unstyled">
          
          {discounts.map(function(listValue, _id){
            return <li key={_id}>{listValue.title}</li>;
          })}

        </ul>
        </div>
      )
    }
  }

class OrderList extends Component{
  render(){
    return(
        <div>
        <ul className="list-unstyled">
          <li>None</li>
        </ul>
        </div>
      )
    }
  }

var Checkout = React.createClass({  
  render: function() {
    return (
      <div className="App">
       
      </div>

    );
  } 
  }) ;

module.exports = { orComp1: Order, orComp2: Checkout}