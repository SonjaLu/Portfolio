import React from 'react'
import "./Landing.css"
import AnimatedBg from '../../AnimatedBg/AnimatedBg'
import Typewriter from '../Typewriter/Typewriter'

let msgArray = [
  " ",
  "A Software Engineer",  
  "A Web Developer",
  "A Full Stack Developer",
  "A Frontend Developer",
  "A Backend Developer",
  "a Programmer",
  "a Problem Solver",
  "Or...",
  "a Coder",
  " ",
  
]

function Landing() {
  return (
    <div id="home">
     <AnimatedBg> 
      <div className="msgBox">
        <div className="des-line">My Professional Identity:</div>
      <Typewriter data={msgArray} /></div>
      </AnimatedBg>
    </div>
  )
}

export default Landing
