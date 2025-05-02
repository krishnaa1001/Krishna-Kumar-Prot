import React from 'react';
import { Code, Server, Database, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const focusAreas = [
    {
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Java, Spring Boot, and RESTful APIs.'
    },
    {
      icon: <Server size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Enterprise Solutions',
      description: 'Developing scalable enterprise applications with focus on performance and reliability.'
    },
    {
      icon: <Database size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Database Design',
      description: 'Creating efficient database schemas and implementing ORM solutions with Hibernate.'
    },
    {
      icon: <Globe size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs with comprehensive documentation using Swagger.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate Java developer with 3 years of experience building enterprise applications.
            My journey in software development started with a deep fascination for solving complex problems
            and creating efficient solutions. I specialize in backend development with Spring Boot and
            have a strong foundation in Java 8 features and object-oriented programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 inline-flex mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently working at Webearn Solution Pvt. Ltd. as a Java Developer, where I collaborate
              with agile teams to design and develop scalable software solutions. I've been instrumental
              in automating processes and improving system efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Previously, I worked as a Java Developer Intern, where I gained hands-on experience in
              designing robust backend features, implementing RESTful APIs, and enhancing system
              performance through innovative solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I hold a B.Tech in Computer Science and Engineering from Veer Madho Singh Bhandari
              Uttarakhand Technical University, where I developed a strong foundation in computer
              science principles and software engineering practices.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Coding Java" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white/90 text-sm font-medium">Building enterprise-grade Java solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;