import React from 'react';
import bgImage from '../images/iiitdrndblock.jpeg';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url(${bgImage})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-wider">
          RIISE
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-2 font-light tracking-wide">
          IIIT Delhi's Annual Research Expo
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-12 font-light">
          Sept, 2025
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-500/90 backdrop-blur-sm hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 min-w-[200px]">
            Register Here
          </button>
          <button className="bg-green-400/90 backdrop-blur-sm hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 min-w-[200px]">
            Call for Posters
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;