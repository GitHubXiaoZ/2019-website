//imports
import React, { Component } from "react";
import {
  Route,
  Switch,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Error_404 from "./Error_404";
import BurgerIcon from "./BurgerIcon";

/*
class: Main
@No params
SPA
links to other page components via HashRouter
*/
class Main extends Component {
  //constructor
  constructor() {
    super()
    //default state
    this.state = {
      displayMenu: false
    }

    this.displayMenu = this.displayMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
  }
  //opens interface when clicked
  displayMenu(event) {
    event.preventDefault()

    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideMenu)
      })
    }
    //closes interface
  hideMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideMenu)
      })
  }
  //render main page
  render() {
    return (
      <HashRouter>
        <div className="main">
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="*" component={Error_404}/>
          </Switch>
          </div>
          <div className="logo">
          <img src={window.location.origin + '/img/sample_logo.svg'} alt="sample_logo" height="75" width="75"/>
          </div>
          <div className="license">
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" /></a><br />
          </div>
          <div> <BurgerIcon onClick = {this.displayMenu}/> </div>
              {
                  this.state.displayMenu ? (
                    <ul className="menu">
                      <li><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/projects">Projects</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                  ) : (null)
              }
        </div>
       </HashRouter>  
    )
  }
}
//export main page
export default Main;