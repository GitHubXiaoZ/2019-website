//imports
import React, { Component } from "react";

/*
class: Home
@no params
welcome page- includes link to social medias
 */
class Home extends Component {
  //renders welcome page
  render() {
    return (
      <div className="home">
        <h2>WELCOME!</h2>
        <p>o(〃＾▽＾〃)o</p>
        <p>Find me @</p>
        <a href="https://github.com/githubxiaoz">
        <img src={window.location.origin + '/img/github.svg'} alt="GitHub" height="30" width="30"/>
        </a>

      </div>
    );
  }
}

//exports welcome page
export default Home;