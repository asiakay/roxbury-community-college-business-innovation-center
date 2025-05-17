import React from 'react';
import { Link } from './Link';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-800/50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="text-center md:text-left md:max-w-3xl lg:max-w-4xl">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Roxbury Community College</span>
            <span className="block text-green-400 mt-2">Business Innovation Center</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:mx-auto md:mx-0">
            Empowering local entrepreneurs with resources, training, and connections to build successful businesses and foster community growth.
          </p>
          <div className="mt-10 sm:flex sm:justify-center md:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-70 z-0">
        <svg className="w-72 h-72 text-blue-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M43.5,-68.4C57.9,-62.1,72.2,-52.9,78.7,-39.5C85.1,-26.1,83.7,-8.4,79.2,7.6C74.7,23.6,67.2,38,56.5,49.8C45.8,61.6,32,70.8,16.6,76.5C1.3,82.2,-15.6,84.3,-31.1,79.9C-46.7,75.5,-60.9,64.5,-70.8,50.2C-80.8,35.9,-86.5,18.3,-85.3,1.2C-84.2,-15.9,-76.2,-31.8,-65.6,-44.7C-55,-57.6,-41.9,-67.5,-28.2,-73.8C-14.5,-80.1,-0.3,-82.8,13.5,-80.1C27.3,-77.4,29.1,-74.6,43.5,-68.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;