import {useState, useEffect} from 'react'
import "./Navbar.css"
import hambtn from "../../../src/assets/hamburger-menu.svg"

function Navbar() {
   const [showLinks, setShowLinks] = useState(true);
   const [showBtn, setShowBtn] = useState(false);
const handleClick = () => {
    setShowLinks(!showLinks);
    };



useEffect(() => {
    const handleResize = (e) => {
    if(e.target.innerWidth <= 768) {
      setShowLinks(false);
      setShowBtn(true);
    } else {
        setShowLinks(true);
        setShowBtn(false);
    }
};

window.addEventListener("resize", handleResize);

handleResize({target: window})

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

return (
    <>
      <div className="navbar-container">
     <div className="owner"><div>Sonja Lueg</div>
      {showBtn && (
      <img src={hambtn} alt="hamburger menu" className="hamburger-menu" onClick={handleClick}/>
      )}</div>
      {showLinks && (
    <div className="menu">
      <a href="#home">Home</a>
      <a href="#aboutme">About Me</a>
      <a href="#technologies">Technologies</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>
    )}
    </div>
      
    </>
  );
}

export default Navbar; 
