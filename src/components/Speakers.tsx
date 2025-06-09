import React from 'react';

const speakerRoles = ["Chief Guest", "Keynote Speaker"];

const Speakers = () => {
  return (
    <>
      <section id="speakers" className="bg-green-600 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {speakerRoles.map((role, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  {role}
                </h2>
                <div className="py-20">
                  <h3 className="text-4xl md:text-5xl font-extrabold animate-pulse">
                    REVEALING SOON
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Speakers;
