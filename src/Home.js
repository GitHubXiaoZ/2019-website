import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>WELCOME!</h2>
        <p>Find me @</p>
        <a href="https://github.com/githubxiaoz">
        <img src={window.location.origin + '/img/github.svg'} alt="GitHub" height="30" width="30"/>
        </a>

      </div>
    );
  }
}
 
export default Home;