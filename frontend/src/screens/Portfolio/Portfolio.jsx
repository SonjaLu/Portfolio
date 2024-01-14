import React from 'react'
import "./Portfolio.css"
import { projects} from "./projects.js"

function Portfolio() {
const projectList = projects.map((project, idx) => {
<div key={idx} className="portfolio-projects-frame"></div>
<img src={project.image} alt={project.title} />
  return (
    <>
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>This is my github page <a href='https://github.com/SonjaLu' target="blank" rel="nonreferrer">https://github.com/SonjaLu</a></p>
    </div>
    <div className="portfolio-grid"></div>
    </>
  )
}

export default Portfolio
