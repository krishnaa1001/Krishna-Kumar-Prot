import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import krishImage from '../images/krishna-kumar.jpg';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-orange-200 dark:bg-orange-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-6 animate-fadeIn">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white">
              Krishna <span className="text-blue-600 dark:text-blue-400">Kumar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200">
              Java <span className="text-orange-500">Developer</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Passionate Java developer with 3 years of experience in building enterprise applications.
              Specializing in Spring Boot, Microservices, and RESTful APIs. Currently based in Noida, India.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 inline-flex items-center font-medium"
              >
                Get in Touch
              </a>
              <a 
                href="#"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg transition-colors duration-300 inline-flex items-center font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Download size={18} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 p-1">
              <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={krishImage} 
                  alt="Krishna Kumar - Java Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;