//import
import React, { Component } from "react";

/*
class: Contact
@no params
displays ways to contact me- through email
*/
class Contact extends Component {
  //renders contact page
  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <p>Send me a message @</p>
        <a href={"mailto:xiao.developer@gmail.com"}>
        <img src={window.location.origin + '/img/mail.svg'} alt="Mail" height="30" width="30"/>
        </a>

      </div>
    );
  }
}

//exports contact page
export default Contact;