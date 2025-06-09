import React from 'react';

const themeCategories = [
  {
    title: "Healthcare",
    subtitle: "Leveraging technology and tools to build accessible and...",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Design for India",
    subtitle: "Human Centered solutions for India's unique challenges",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Robotics and Space Tech",
    subtitle: "Automating crucial tasks and unlocking space explorations",
    image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Bridging theory and practice",
    subtitle: "Building and developing a strong foundation for innovation",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Computational gastronomy",
    subtitle: "Exploring the intersection of food, technology and culture",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Sustainable mobility",
    subtitle: "Building Green, Accessible and Inclusive mobility",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "5G/6G",
    subtitle: "Powering India's Digital transformation on web connectivity",
    image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Advanced multicore systems",
    subtitle: "Building indigenous high-performance computing platforms",
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Bharat AI",
    subtitle: "Fueling homegrown solution to address and invest in India's future",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    title: "Perspectives on Time, History, and...",
    subtitle: "Exploring the interplay of lived experience, clock time, and historical...",
    image: "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  }
];

const Theme = () => {
return (
  <>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            THEME
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-black">
          </h3>
        </div>
      </div>
    </section>

    <section className="py-40 bg-gray-50 flex items-center justify-center">
      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800 text-center animate-pulse">
        REVEALING SOON
      </h2>
    </section>
  </>
);
};

export default Theme;