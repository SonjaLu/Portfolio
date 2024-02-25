import { useState } from 'react'
import "./Portfolio.css"
import { projects} from "./projects.js"
import  { Modal } from "../index.jsx"


function Portfolio() {
  const [currentIdx, setCurrentIdx] = useState(-1)

  const handleClick = (idx) => { setCurrentIdx(idx) }
  const clearCurrent = () => { setCurrentIdx(-1) }

  const projectList = projects.map((project, idx) => (
    <div key={idx} onClick={() => handleClick(idx)} className="portfolio-projects-frame">
      <img src={project.image} alt={project.title} />
    </div>
  ));

let currentProject = currentIdx >= 0 && projects[currentIdx]

  return (
    <>
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>This is my github page <a href='https://github.com/SonjaLu' target="blank" rel="noreferrer">https://github.com/SonjaLu</a></p>
    </div>
    <div className="portfolio-grid">
    {currentProject && (
    <Modal 
    onClick={clearCurrent}
    title={currentProject.title}
    description={currentProject.description} 
    image={currentProject.image} 
    url={currentProject.url} />)}
    {projectList}
    </div>
    </>
  )
}

export default Portfolio
