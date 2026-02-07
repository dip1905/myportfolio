import React, { useEffect } from "react"; 
import AOS from "aos";                    
import "aos/dist/aos.css";               

import Home from "./pages/Home";         
import Navbar from "./components/Navbar"; 
import About from "./pages/About";       
import SoftwareProjects from "./pages/SoftwareProject"; 
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; 
import Skills from "./pages/Skills";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });        // AOS animation is initialized when component mounts
  }, []);

  return (
    <div>
      <Navbar />  
      <Home />  
      <About />   
      <SoftwareProjects />
      <Skills /> 
      <Education />   
      <Experience />    
      <Contact />
      <Footer />              
    </div>
  );
}

export default App;                      // makes App available to other files (like index.js)
