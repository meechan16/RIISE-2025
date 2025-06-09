import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
    {/* Logo */}
<div className="flex items-center">
  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
    <img
      src="/logo.svg"
      alt="Logo"
      className="w-6 h-6"
    />
  </div>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('schedule')}
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('speakers')}
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Speakers
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Contact Us
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                Register
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('schedule')}
                className="block text-white hover:text-green-400 transition-colors duration-200 font-medium w-full text-left px-3 py-2"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('speakers')}
                className="block text-white hover:text-green-400 transition-colors duration-200 font-medium w-full text-left px-3 py-2"
              >
                Speakers
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white hover:text-green-400 transition-colors duration-200 font-medium w-full text-left px-3 py-2"
              >
                Contact Us
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 mx-3 mt-4">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;