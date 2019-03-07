import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <p>Send me a message @</p>
        <a href={"mailto:48108389+GitHubXiaoz@users.noreply.github.com"}>
        <img src={window.location.origin + '/img/mail.svg'} alt="Mail" height="30" width="30"/>
        </a>

      </div>
    );
  }
}
 
export default Contact;