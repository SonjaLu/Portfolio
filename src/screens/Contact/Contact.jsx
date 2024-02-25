
import "./Contact.css"
import LinkedinIcon from "./linkedin.svg"

function Contact() {
  return (
    <div id="contact" className="contact-container">
        <p>Sonja Lueg</p>
        <p>Leienkaul</p>
        <a href="https://www.linkedin.com/in/sonja-lueg-29a04728b" target="_blank" rel="noopener noreferrer">
        <img className="linkedin-icon" src={LinkedinIcon} alt="LinkedIn" /></a>
        <p>sl.codes4u@gmail.com</p>
      
    </div>
  )
}

export default Contact
