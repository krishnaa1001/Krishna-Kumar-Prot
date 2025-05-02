import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Krishna<span className="text-orange-500">Kumar</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Java developer specializing in Spring Boot, Microservices,
              and enterprise application development.
            </p>
            <p className="text-gray-400">
              Based in Noida, India. Available for remote opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                'Java Backend Development', 
                'Spring Boot Applications', 
                'REST API Development', 
                'Database Design', 
                'Performance Optimization',
                'Code Review & Mentoring'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-4">
              Interested in working together or have a question?
            </p>
            <a 
              href="#contact"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 inline-block"
            >
              Contact Me
            </a>
            <p className="text-gray-400 mt-4">
              Or email me at: 
              <a href="mailto:krishnaku.prabhu1001@gmail.com" className="text-blue-400 hover:underline ml-1">
                krishnaku.prabhu1001@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Krishna Kumar. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/krishnaa1001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/krishna-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;