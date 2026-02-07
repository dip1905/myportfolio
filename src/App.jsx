import React, { lazy, Suspense } from "react"; 
import Navbar from "./components/Navbar.jsx"; 
import Home from "./pages/Home.jsx";

// Lazy load components that are below the fold
const About = lazy(() => import("./pages/About.jsx"));
const Skills = lazy(() => import("./pages/Skills.jsx"));
const SoftwareProjects = lazy(() => import("./pages/SoftwareProject.jsx"));
const Education = lazy(() => import("./pages/Education.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />  
      <Home />  
      
      <Suspense fallback={<LoadingSpinner />}>
        <About />   
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Skills /> 
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <SoftwareProjects />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Education />   
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />    
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />              
      </Suspense>
    </div>
  );
}

export default App;
