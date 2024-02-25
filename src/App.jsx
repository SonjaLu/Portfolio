

import './App.css'
import { Navbar, Landing, AboutMe, Technologies, Portfolio, Contact } from './screens'



function App() {
  

  return (
    <>
    <div className="main-container">
    <Navbar />
    <Landing />
    <AboutMe />
    <Technologies />
    <Portfolio />
    <Contact />
    </div>
    </>
  );
}

export default App
