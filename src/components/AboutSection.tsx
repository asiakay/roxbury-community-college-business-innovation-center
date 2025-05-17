import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-green-600 rounded-lg transform -rotate-3 scale-105 opacity-10"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Entrepreneurs collaborating" 
                className="relative rounded-lg shadow-xl w-full object-cover h-full max-h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-2xl">Since 2023</p>
                <p className="text-green-100">Supporting local businesses</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">About Us</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Local Entrepreneurs
            </h3>
            <div className="mt-6 text-gray-600 space-y-6">
              <p>
                The Roxbury Community College (RCC) Business Innovation Center (BIC) is a dedicated resource hub for local entrepreneurs and businesses, providing comprehensive support to launch and grow successful ventures.
              </p>
              <p>
                Our center addresses systemic disparities in access to resources by identifying gaps and working with community partners to find solutions. We're not just a business center—we're a launchpad for entrepreneurial success and a catalyst for community growth.
              </p>
              <p>
                With a focus on high-growth industries like green technology and energy, we align our initiatives with RCC's existing strong programming to provide entrepreneurs with cutting-edge resources and training.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="text-blue-800 font-bold text-4xl">7+</div>
                <div className="text-gray-600">Workstations</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="text-blue-800 font-bold text-4xl">15+</div>
                <div className="text-gray-600">Workshops per month</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="text-blue-800 font-bold text-4xl">50+</div>
                <div className="text-gray-600">Entrepreneurs supported</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="text-blue-800 font-bold text-4xl">10+</div>
                <div className="text-gray-600">Community partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;