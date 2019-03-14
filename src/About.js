import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>ABOUT</h2>
        <p>I am a designer and developer.</p>
        <p>My Skillset: </p>
        <div>
          <ul class="skills">
          <ExperienceBar percentage = {skillset.HTML} color = {skillset.color(skillset.HTML)}/>
          <li>HTML </li> 
            
          <ExperienceBar percentage = {skillset.CSS} color = {skillset.color(skillset.CSS)}/>
          <li>CSS</li>
          
          <ExperienceBar percentage = {skillset.Javascript} color = {skillset.color(skillset.Javascript)}/>
          <li>Javascript</li>
          
          <ExperienceBar percentage = {skillset.ReactJS} color = {skillset.color(skillset.ReactJS)}/>
          <li>ReactJS</li>

          <ExperienceBar percentage = {skillset.Python} color = {skillset.color(skillset.Python)}/>
          <li>Python</li>

          <ExperienceBar percentage = {skillset.Java} color = {skillset.color(skillset.Java)}/>
          <li>Java</li>

          <ExperienceBar percentage = {skillset.CSharp} color = {skillset.color(skillset.CSharp)}/>
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
  CSharp: 30,
  color: function(value) {
    return (value <= 30) ? "default" : (value <= 50) ? "#5ee1ff" : "#00d0ff"
  },
  level: function(value) {
    return (value <= 30) ? "rusty" : (value <= 50) ? "novice" : "intermediate"
  }
}


function ExperienceBar(props) {
    return (
        <div className="experience-bar">
        <Progress percentage = {props.percentage} color = {props.color}/>
        </div>

    )
}

function Progress(props) {
    return (
        <div className="progress" style={{ width: `${props.percentage}%`, backgroundColor: `${props.color}`}} />
    )
}

export default About;