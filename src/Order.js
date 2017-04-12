import React from 'react';
import './App.css';
import {items, discounts} from './data.json';
import { loadState, saveState } from './localStorage';
import AlertContainer from 'react-alert';
import StripeCheckout from 'react-stripe-checkout';

var chips = [];
var burgers = [];
var sausages = [];
var chicken = [];
var fish = [];
var basket = [];
var msg;

var Order = React.createClass({ 

  getInitialState() {
    return { basket: basket };
  },

  render: function() {
    return (
      <div className="App">
        <br/>
        <AlertContainer ref={(a) => msg = a} {...this.alertOptions} />
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
    } return {chips: chips, sausages: sausages, burgers: burgers, chicken: chicken, fish: fish, basket: loadState()};
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
    msg.show(orderItem.name + ' added to order!', { time: 1500});

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
    msg.error(item.name + ' removed from order!', { time: 1500});

      }
    }
    
  },

  onClear: function(){
    this.setState({basket: []});
    saveState(this.state.basket);
  },

  onCheckout: function(){

    saveState(this.state.basket);
    if(loadState().length === 0)
    {
      msg.show('No items added to order!', { time: 3000});
    }else {
      window.location.assign('/checkout');
    }
  },

  onSearch: function(event){
    var test

    if(event === ""){
      test = event;
    }else{
      test = event.target.value;
    }

    chips = [];
    burgers = [];
    sausages = [];
    chicken = [];
    fish = [];
    basket = [];

    for (var i = 0; i < items.length; i++) {
        switch(items[i].category){

          case "chips":{
            if(items[i].name.includes(test) || items[i].category.includes(test)){
            chips.push(items[i]);
          }
          };
          break;
          case "sausages":{
            if(items[i].name.includes(test) || items[i].category.includes(test)){
            sausages.push(items[i]);
          }
          };
          break;
          case "burgers":{
            if(items[i].name.includes(test) || items[i].category.includes(test)){
            burgers.push(items[i]);
          }
          };
          break;
          case "chicken":{
            if(items[i].name.includes(test) || items[i].category.includes(test)){
            chicken.push(items[i]);
          }
          };
          break;
          case "fish":{
            if(items[i].name.includes(test) || items[i].category.includes(test)){
            fish.push(items[i]);
          }
          };
          break;
          default:{};
          break;
        }
    } 
      this.setState({chips: chips, sausages: sausages, burgers: burgers, chicken: chicken, fish: fish});

  },

  clearSearch: function(){
      this.refs.searchField.value="";
      this.onSearch("");
  },

  render(){

    var total = 0;

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
            <br/>
            <input ref="searchField" type="text" placeholder="Search" onChange={this.onSearch} />
            &nbsp;
            <button className="btn btn-danger" onClick={this.clearSearch}>X</button>
            <hr/>
          <h1>Chips - </h1>
          <hr/>

          {this.state.chips.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>&euro; {listValue.price.toFixed(2)}</p>
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
          {this.state.sausages.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>&euro; {listValue.price.toFixed(2)}</p>
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
          {this.state.burgers.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>&euro; {listValue.price.toFixed(2)}</p>
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
          {this.state.chicken.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>&euro; {listValue.price.toFixed(2)}</p>
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
          {this.state.fish.map(function(listValue, _id){
            let boundItemClick = this.onItemClick.bind(this, listValue);
            return (
            <div key={_id}>
            <br/>
            <div className="row ">
            <div className="col-xs-4">
            <p>{listValue.name} {listValue.category}</p>
            </div>

            <div className="col-xs-4 text-center">
            <p>&euro; {listValue.price.toFixed(2)}</p>
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
            <p>&euro; {listValue.price.toFixed(2)}</p>
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
            total += (basketValue.price*basketValue.qty);
            return (
            <div key={_id}>
            <br/>
            <div className="row">
            <div className="col-xs-4">
            <p>{basketValue.name}</p>
            </div>

            <div className="col-xs-3 text-center">
            <p>&euro; {basketValue.price.toFixed(2)}</p>
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
          <hr/>
            <div className="text-right">

            <h3>Total Cost = &euro; {total.toFixed(2)} </h3><br/>
            <button className="text-right btn btn-danger text-center" onClick={this.onClear}>Clear Order</button> &emsp;
            <button className="text-right btn btn-success text-center" onClick={this.onCheckout}>Proceed to Checkout</button>

            </div>
        </div>
        </div>



  </div>
      )
    }
  })

var Checkout = React.createClass({

  onToken: function(token) {
    this.setState({basket: []});
    saveState(this.state.basket);
    alert("Thank you, your order has been taken!");
    window.location.assign('/');
  },

  getInitialState: function() {
           return { basket: loadState() };
       },

  onPay: function(){
      if(loadState().length === 0)
    {
      msg.show('No items in order, please go back to order page!', { time: 3000});
    }else {

    }
  },

  onBack: function(){
      window.location.assign('/');
  },

  render: function() {

    var total = 0;

    return (
      <div className="row">
      <AlertContainer ref={(a) => msg = a} {...this.alertOptions} />
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
      <div className="col-xs-12">
                <div className="bord">
                  <h1 className="text-center">Confirm Order</h1>


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
            total += (basketValue.price*basketValue.qty);
            return (
            <div key={_id}>
            <br/>
            <div className="row">
            <div className="col-xs-4">
            <p>{basketValue.name}</p>
            </div>

            <div className="col-xs-3 text-center">
            <p>&euro; {basketValue.price.toFixed(2)}</p>
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

          <div className="row">
          <hr/>
            <div className="col-xs-12 text-right">

            <p>Total Cost = &euro; {total.toFixed(2)} </p>
            <button className="text-right btn btn-danger text-center" onClick={this.onBack}>Back and Edit</button><br/><br/>

            <StripeCheckout
              name="Shadow Games and Development"
              description="Crokes Chipper"
              image="https://shadowgames-dev.com/img/logo/main_black.png"
              ComponentClass="div"
              panelLabel="Pay Order: "
              amount={total*100}
              currency="EUR"
              stripeKey="pk_test_UCbXbCNsbdNCk4WfTNuJ0qje"
              locale="auto"
              email="info@shadowgames-dev.com"
              shippingAddress
              billingAddress={true}
              zipCode={false}
              allowRememberMe
              token={this.onToken}
              reconfigureOnUpdate={false}
              >
                <button className="btn btn-primary">
                    Pay with Card
                </button>
              </StripeCheckout>
            
            </div>
            </div>

        </div>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-xs-12 text-center">
        <h4><b><i>For the purpose of testing, card number is 4242 4242 4242 4242, expiration date 10/17, Security No. 000</i></b></h4>
        </div>
        </div>
        </div>

    );
  } 
  }) ;

module.exports = { orComp1: Order, orComp2: Checkout}