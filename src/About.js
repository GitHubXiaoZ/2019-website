import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT</h2>
        <p>I am a designer and developer.</p>
        <p>My Skillset: </p>
        <div>
          <ul class="skills">
          <ExperienceBar percentage = {skillset.HTML} />
          <li>HTML</li> 
            
          <ExperienceBar percentage = {skillset.CSS} />
          <li>CSS</li>
          
          <ExperienceBar percentage = {skillset.Javascript} />
          <li>Javascript</li>
          
          <ExperienceBar percentage = {skillset.ReactJS} />
          <li>ReactJS</li>

          <ExperienceBar percentage = {skillset.Python} />
          <li>Python</li>

          <ExperienceBar percentage = {skillset.Java} />
          <li>Java</li>

          <ExperienceBar percentage = {skillset.CSharp} />
          <li>C#</li>
          </ul>
        </div>
      </div>
    );
  }
}

const skillset = {
  HTML: 45,
  CSS: 50,
  Javascript: 60,
  ReactJS: 55,
  Python: 75,
  Java: 25,
  CSharp: 30
}


function ExperienceBar(props) {
    return (
        <div className="experience-bar">
        <Progress percentage = {props.percentage} />
        <div className="text"> {props.text} </div>
        </div>

    )
}

function Progress(props) {
    return (
        <div className="progress" style={{ width: `${props.percentage}%`}} />
    )
}

export default About;