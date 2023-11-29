import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTo from './components/BackToTo';

const App = () => {
  return (
  <div>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <BackToTo/>
  </div>
  );
};

export default App;
