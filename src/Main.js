import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false
    }

    this.displayMenu = this.displayMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
  }
  
  displayMenu(event) {
    event.preventDefault()

    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideMenu)
      })
    }
  
    hideMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener("click", this.hideMenu)
      })
  
  }

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
          <span className="buttonMenu" onClick = {this.displayMenu}>Menu</span>
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
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
       </HashRouter>  
       
    )
  }
}
 
export default Main;