import "./Technologies.css"
import { tech } from "./techs.js";

function Technologies() {
const techsList = tech.map((tech, idx) => (
  <div key={idx} className="tech-frames background-animation">
    <tech.image className="tech-image" alt={tech.name} />
    <h3>{tech.name}</h3>
  </div>

));

  return (
    <div id="technologies" className="technologies-container">
      <h1>My Technical Toolbox</h1>
      <div className="techs-list">
        {techsList}
      </div>
      <h3>And more...</h3>
    </div>
  )
}

export default Technologies
