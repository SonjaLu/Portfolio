import './AboutMe.css'
import aboutMeImage from './SL2422.jpg';

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
     <div className="my-img"><img className="my-img img-effect"src={aboutMeImage} alt="Portrait" /></div>
      <div>
        <h1>About Me</h1>
        <p>Hello there! I'm Sonja Lueg, a Full Stack Developer with a passion for crafting seamless, efficient digital solutions. I take pride in my ability to translate complex technical challenges into user-friendly experiences.<br></br>

Driven by a relentless pursuit of excellence, I have honed my skills in both frontend and backend technologies, enabling me to bridge the gap between aesthetic appeal and technical functionality. My journey in the tech world has been fueled by a deep-rooted passion for innovation and a desire to make a tangible impact.<br></br>

Whether I'm architecting robust server-side applications or designing interactive web interfaces, my goal remains the same: to build intuitive, scalable, and dynamic applications that deliver exceptional user experiences. My approach is a blend of creativity and analytical thinking, ensuring that every line of code I write not only functions flawlessly but also contributes to the overarching vision of the project.<br></br>

I thrive in environments where I can collaborate with like-minded individuals, exchange ideas, and push the boundaries of what's possible. Let's connect and explore how we can create something extraordinary together!</p>
      </div>
    </div>
  )
}

export default AboutMe
