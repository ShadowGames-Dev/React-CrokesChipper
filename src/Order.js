import React from 'react';
import './App.css';
import {items, discounts} from './data.json';
import { loadState, saveState } from './localStorage';

var basket = [];

var Order = React.createClass({ 

  getInitialState() {
    return { basket: basket };
  },

  render: function() {
    return (
      <div className="App">
        <br/>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">

                    <MenuDisplay/>

            </div>
          </div>
        </div>
      </div>
    );
  } 
  }) ;

var MenuDisplay = React.createClass({

  getInitialState: function() {
           return { basket: basket };
       },

  onItemClick: function(item, e) { 
    var orderItem = []; 
    var itemExist = false;

    if(item._id > 0 && item._id < items.length+1)
    {
      orderItem = {
        name: item.name+" "+item.category,
        price: item.price,
        qty: 1
      }
    }else {
      orderItem = {
        name: item.title,
        price: item.price,
        qty: 1
      }
    }

    var tempBasket = this.state.basket.slice();

    if(tempBasket.length !== 0){

    for(var i=0; i < tempBasket.length; i++){
      if(tempBasket[i].name === orderItem.name){

        orderItem = {
        name: tempBasket[i].name,
        price: tempBasket[i].price,
        qty: tempBasket[i].qty++
      }

        basket.splice(i, 1, orderItem);
        itemExist = true;
      }
    }

  }

    if(!itemExist){
      tempBasket.push(orderItem);
    }
    
    this.setState({ basket: tempBasket });
    this.forceUpdate();

  },

  onXClick: function(item, e){

    var tempBasket = this.state.basket.slice();

    for(var i=0; i < tempBasket.length; i++){
      if(tempBasket[i].name === item.name){

      if(tempBasket[i].qty !== 1){
        item = {
        name: tempBasket[i].name,
        price: tempBasket[i].price,
        qty: tempBasket[i].qty--
      }
        basket.splice(i, 1, item);
    }else {
      tempBasket.splice(i, 1);
    }

    this.setState({ basket: tempBasket });
    this.forceUpdate();

      }
    }
    
  },

  onCheckout: function(){

    saveState(this.state.basket);
    window.location.assign('/checkout');
  },

  render(){

    var chips = [];
    var sausages = [];
    var burgers = [];
    var chicken = [];
    var fish = [];

    for (var i = 0; i < items.length; i++) {
        switch(items[i].category){

          case "chips":{
            chips.push(items[i]);
          };
          break;
          case "sausages":{
            sausages.push(items[i]);
          };
          break;
          case "burgers":{
            burgers.push(items[i]);
          };
          break;
          case "chicken":{
            chicken.push(items[i]);
          };
          break;
          case "fish":{
            fish.push(items[i]);
          };
          break;
          default:{};
          break;
        }
    }


    return(
      <div>

        <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Menu</h1>



        <div className="text-left MenuItem row">
        <div className="col-xs-12">
        <br/>
        <div className="row ">
            <div className="col-xs-4">
            <p>Item -</p>
            </div>

            <div className="col-xs-4">
            <p>Price -</p>
            </div>

            <div className="col-xs-4">
            
            </div>
            </div>
          <h1>Chips - </h1>
          <hr/>

          {chips.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>{listValue.price}</p>
            </div>

            <div className="col-xs-4 text-right">
            <button className="text-right btn" onClick={boundItemClick}>Add to Order</button>
            </div>
            </div>
            </div>
            );
          }, this)}

          <h1>Sausages - </h1>
        <hr/>
          {sausages.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>{listValue.price}</p>
            </div>

            <div className="col-xs-4 text-right">
            <button className="text-right btn" onClick={boundItemClick}>Add to Order</button>
            </div>
            </div>
            </div>
            );
          }, this)}

          <h1>Burgers - </h1>
        <hr/>
          {burgers.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>{listValue.price}</p>
            </div>

            <div className="col-xs-4 text-right">
            <button className="text-right btn" onClick={boundItemClick}>Add to Order</button>
            </div>
            </div>
            </div>
            );
          }, this)}

          <h1>Chicken - </h1>
        <hr/>
          {chicken.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>{listValue.price}</p>
            </div>

            <div className="col-xs-4 text-right">
            <button className="text-right btn" onClick={boundItemClick}>Add to Order</button>
            </div>
            </div>
            </div>
            );
          }, this)}

          <h1>Fish - </h1>
        <hr/>
          {fish.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>{listValue.price}</p>
            </div>

            <div className="col-xs-4 text-right">
            <button className="text-right btn" onClick={boundItemClick}>Add to Order</button>
            </div>
            </div>
            </div>
            );
          }, this)}



        </div>
        </div>
        </div>
        </div>



<div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Specials</h1>


                    <div className="text-left MenuItem row">
        <div className="col-xs-12">
        <br/>
        <div className="row ">
            <div className="col-xs-4">
            <p>Item -</p>
            </div>

            <div className="col-xs-4">
            <p>Price -</p>
            </div>

            <div className="col-xs-4">
            
            </div>
            </div>
            <hr/>
          
          {discounts.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.title}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>{listValue.price}</p>
            </div>

            <div className="col-xs-4 text-right">
            <button className="text-right btn" onClick={boundItemClick}>Add to Order</button>
            </div>
            </div>
            <hr />
            </div>
            );
          }, this)}

        </div>
        </div>
        </div>
        </div>


        <div className="col-xs-4">
                <div className="bord">
                  <h1 className="text-center">Order</h1>


                  <div className="text-left MenuItem row">
        <div className="col-xs-12">
        <br/>
        <div className="row ">
            <div className="col-xs-4">
            <p>Item -</p>
            </div>

            <div className="col-xs-4">
            <p>Price -</p>
            </div>

            <div className="col-xs-4">
            <p>Quantity -</p>
            </div>
            </div>
          <hr/>
          {this.state.basket.map(function(basketValue, _id){
            let boundXClick = this.onXClick.bind(this, basketValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row">
            <div className="col-xs-4">
            <p>{basketValue.name}</p>
            </div>

            <div className="col-xs-3 text-center">
            <p>{basketValue.price}</p>
            </div>

            <div className="col-xs-3 text-center">
            <p>{basketValue.qty}</p>
            </div>

            <div className="col-xs-2 text-center">
            <button className="text-right btn" onClick={boundXClick}>X</button>
            </div>

            </div>
            </div>
            );
          }, this)}

        </div>
        </div>
        <button className="text-right btn btn-success text-center" onClick={this.onCheckout}>Checkout</button>
        </div>
        </div>



  </div>
      )
    }
  })

var Checkout = React.createClass({ 

  getInitialState: function() {
           return { basket: loadState() };
       },

  onGetBasket: function(){
      //console.log(loadState());
  },

  render: function() {
    return (
      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
      <div className="col-xs-12">
                <div className="bord">
                  <h1 className="text-center">Checkout</h1>


                  <div className="text-left MenuItem row">
        <div className="col-xs-12">
        <br/>
        <div className="row ">
            <div className="col-xs-4">
            <p>Item -</p>
            </div>

            <div className="col-xs-4">
            <p>Price -</p>
            </div>

            <div className="col-xs-4">
            <p>Quantity -</p>
            </div>
            </div>
          <hr/>
          {this.state.basket.map(function(basketValue, _id){
            return (
            <div key={_id}>
            <br/>
            <div className="row">
            <div className="col-xs-4">
            <p>{basketValue.name}</p>
            </div>

            <div className="col-xs-3 text-center">
            <p>{basketValue.price}</p>
            </div>

            <div className="col-xs-3 text-center">
            <p>{basketValue.qty}</p>
            </div>

            <div className="col-xs-2 text-center">
            </div>

            </div>
            </div>
            );
          }, this)}

        </div>
        </div>
        <button className="text-right btn btn-success text-center" onClick={this.onCheckout}>Checkout</button>
        </div>
        </div>
        </div>
        </div>
        </div>

    );
  } 
  }) ;

module.exports = { orComp1: Order, orComp2: Checkout}