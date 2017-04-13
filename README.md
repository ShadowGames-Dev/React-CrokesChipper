# Assignment 1 - ReactJS app - Crokes Chipper.

Name: William Croke

## Overview.

This application is a simple online takeway ordering service. The application allows users to land on the homepage which is the menu for this chipper. From the menu, users are able to select items to add to there order. Once they add an item to an order they are give a confirmation of this. Users can add as many items as they wish to there order. Users also have the ability to remove individual items from their order or to clear the order list completely. 

Users can choose items individually or select a speccial. There is a search box for individual items to assist users in finding exactily what they want much quicker. 

Once a user has choosen their order they can proceed to the order confirmation.
Once in the order confirmation screen they can confirm all is correct, if not, they can go back and edit there order.
If the user is happy with their order they can proceed to make payment with their card through the embedded Stripe payment system. Here they enter their name and address followed by their card details. If all is valid, the order is taken, the user is given confirmation of this and they are redirected back to the home screen/menu.

The screens from order menu to confirmation and payment are Stateful, they log and keep track of the users order throughout.

The other two pages of this site are stateless. They are a simple information page detailing the use and reason for this applications existance. The other is a simple contact page. This form has simple input and validation but does not currently send any emails/messages as the application is currently designed to run locally.


 . . . . . List of user features . . . . .
 
 + Selection of items from order menu, add to order/basket.
 + Confirmation of order and checkout with Stripe payment.
 + Stateful basket.
 + Simple Contact form with validation.

## Installation requirements.

+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ react-alert
+ react-stripe-checkout

After cloning this application you must run npm install to insatll all node modules. Once this is complete you can run npm start to start the local server. This shouldopen your browser on the applications landing page, if it does not, navigate to localhost:3000 in your browser.

## Data Model.

Below shows the basic JSON data model for all of the menu items, these are split into individual items and discounts.

Individual items - 

![][image8]

Discount Items (Specials) - 

![][image9]


## App Component Design.

Below shows the design of the app components and how they interact with one another.

![][image4]

## UI Design.

The following images show the UI design and use of the application.

Adding items to order, confirmation and payment.

Adding items - 

![][image1]

Order Confirmation -

![][image2]

Payment for order - 

![][image3]

Below shows the basic information page, contact page and the navigation bar.

Info page - 

![][image6]

Contact page - 

![][image5]

Nav bar - 

![][image7]

## Routing.

+ / - Landing page/Order menu
+ /Checkout - Checkout page gottent to by adding items to order and continuing to checkout from Landing page
+ /Info - Basic information page on applications purpose
+ /contact - Basic contact form

## Extra features

This application uses React Alert for notifying the user of changes and giving confirmations. 

This applicaion also uses Stripe Checkout for taking the users name, address and payment.

## Independent learning.

The use of the above mentioned extra features were learned independintly. The implimentation of React Alert for notifications and the implimentation of a Stripe Checkout for the user of taking user information and payment. 



[image1]: ./1.JPG
[image2]: ./2.JPG
[image3]: ./3.JPG
[image4]: ./design.JPG
[image5]: ./contact.JPG
[image6]: ./info.JPG
[image7]: ./nav.JPG
[image8]: ./d1.JPG
[image9]: ./d2.JPG