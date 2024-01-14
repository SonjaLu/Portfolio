

import './App.css'
import { Navbar, Landing, AboutMe, Technologies, Portfolio } from './screens'



function App() {
  

  return (
    <>
    <div className="main-container">
    <Navbar />
    <Landing />
    <AboutMe />
    <Technologies />
    <Portfolio />
    </div>
    </>
  );
}

export default App
