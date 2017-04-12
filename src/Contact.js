import React from 'react';
import './App.css';
import nodemailer from 'nodemailer';

var Contact = React.createClass({

	sendMail: function(mail){
		var email = this.refs.userEmail.value;
		var message = this.refs.userMessage.value;

		this.post('/contact', function(req,res,next){
    		var to = req.body.email;
    		var transporter = nodemailer.createTransport({
        	service:'Gmail',
        	auth:{
         	   user:'croke.college.testing@gmail.com',
         	   pass:'Crokes321'
        	}
    	});

        var mailOptions = {
    		from: email,
    		to: 'info@shadowgames-dev.com.com',
    		subject: 'Crokes Chipper Info Request',
    		text: message 
		};

		transporter.sendMail(mailOptions, function(error, info){
    		if(error){
        		console.log(error);
    		}else{
        		console.log('Message sent: ' + info.response);
    	};
		});

		});
    

	},

  render: function() {
    return (
      <div className="App">
        <div className="contactForm">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-1 text-center">
                    <h1>Contact Us</h1>
                        <form>
                            <div className="form-group ">
                                <small className="form-text text-muted">Your Email -</small>
                                <input ref="userEmail" type="text" className="form-control form-control-success"/>
                            </div>
                            <div className="input-field">
                                <small className="form-text text-muted">Your message -</small>
                                <textarea ref="userMessage" className="form-control" name="emailcontent"/><br/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick="{this.sendMail}">Send message</button>
                        </form>
                    </div>
                    <div className="col-xs-4 col-xs-offset-1 text-center">
                    <h1>Additional Contact Info</h1>
                    	<p>Some random contact information!!!</p>
                    </div>
                    </div>
                </div>
            </div>
    );
  } 
  });

  module.exports = Contact;