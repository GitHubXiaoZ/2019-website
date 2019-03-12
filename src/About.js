import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
        percentage: 50
    }
  }

  render() {
    return (
      <div>
        <h2>ABOUT</h2>
        <p>I am a designer and developer.</p>
        <p>My Skillset: </p>
        <div>
          <ul class="skills">
          <li>HTML</li> 
          <ExperienceBar percentage = {this.state.percentage} />
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          </ul>
        </div>
      </div>
    );
  }
}

function ExperienceBar(props) {
    return (
        <div className="experience-bar">
        <Progress percentage = {props.percentage} />
        </div>

    )
}

function Progress(props) {
return <div className="progress" style={{ width: `${props.percentage}%`}} />
}
 
export default About;