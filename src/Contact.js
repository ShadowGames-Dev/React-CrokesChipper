import React from 'react';
import './App.css';
import AlertContainer from 'react-alert';

var msg;

var Contact = React.createClass({

    validate: function (mail) {
        var email = this.refs.userEmail.value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        this.sendMail(mail);
    }else{
        msg.error('Please ensure you have entered a valid email address!', { time: 2000});
    }
  },

	sendMail: function(mail){
		var email = this.refs.userEmail.value;
		var message = this.refs.userMessage.value;

        if(message !== ""){
		msg.show('Your message has been sent, Thank you!', { time: 3000});

        console.log("Send Mail to :" + email);
        console.log("Message: " + message);

        this.refs.userEmail.value = "";
        this.refs.userMessage.value = "";
    }else{
        msg.error('Do not leave any form areas blank!', { time: 2000});
    }
    

	},

  render: function() {
    return (
      <div className="App">
      <AlertContainer ref={(a) => msg = a} {...this.alertOptions} />
        <div className="contactForm">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-1 text-center">
                    <h1>Contact Us</h1>
                        <form>
                            <div className="form-group ">
                                <p className="form-text text-muted">Your Email -</p>
                                <input placeholder="me@example.com" ref="userEmail" type="text" className="form-control form-control-success"/>
                            </div>
                            <div className="input-field">
                                <p className="form-text text-muted">Your message -</p>
                                <textarea placeholder="Your message..." ref="userMessage" className="form-control" name="emailcontent"/><br/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.validate}>Send message</button>
                        </form>
                    </div>
                    <div className="col-xs-4 col-xs-offset-1 text-center">
                    <h1>Additional Contact Info</h1>
                    <div className="mdTxt">
                    	<p>Currently this form does not collect any data or send any appropriate emails/messages.<br/>
                        If you experienced any issues while using this applcation please do not hesitate to contact us 
                        using the following information: </p>
                        <p><b><i>Telephone - </i></b><a href="tel:+353857420161">+353 (85) 742 0161</a></p>
                        <p><b><i>Email - </i></b><a href="mailto:info@shadowgames-dev.com">info@shadowgames-dev.com</a></p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    );
  } 
  });

  module.exports = Contact;