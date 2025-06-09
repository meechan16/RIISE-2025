import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Theme from './components/Theme';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Theme />
      <Schedule />
      <Speakers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;