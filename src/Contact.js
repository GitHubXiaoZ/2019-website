import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <p>Send me a message @</p>
        <a href="https://github.com/githubxiaoz">
        <img src={window.location.origin + '/img/github.svg'} alt="GitHub" height="30" width="30"/>
        </a>
      </div>
    );
  }
}
 
export default Contact;