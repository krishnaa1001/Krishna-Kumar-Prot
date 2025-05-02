import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Java Developer",
      company: "Webearn Solution Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      period: "May 2023 - Present",
      description: [
        "Collaborated with agile teams to design, develop, and deploy scalable software solutions",
        "Automated processes to improve efficiency and reduce manual effort",
        "Assisted in API development and integration, enhancing system interoperability",
        "Implemented best practices including continuous integration, automated testing, and performance optimization",
        "Coordinated with cross-functional teams for smooth deployments and troubleshooting"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "Microservices", "Agile"]
    },
    {
      id: 2,
      role: "Java Developer Intern",
      company: "Webearn Solution Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      period: "Dec 2022 - May 2023",
      description: [
        "Designed robust backend features using Spring Boot and Java",
        "Implemented RESTful APIs for various business functionalities",
        "Enhanced system performance through innovative solutions",
        "Participated in code reviews and debugging sessions",
        "Collaborated with senior developers on project deliverables"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey as a Java developer, focusing on building
            scalable enterprise solutions and microservices architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:mr-auto md:ml-0 md:text-right' : 'md:pl-8 md:ml-auto md:mr-0 md:text-left'
                } md:w-1/2 z-10`}
              >
                <div className="absolute top-6 left-0 md:left-auto md:right-0 md:translate-x-0 transform -translate-x-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                
                <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow ${
                  index % 2 === 0 ? 'md:rounded-tr-none' : 'md:rounded-tl-none'
                }`}>
                  <div className="flex flex-col items-start md:items-end gap-1 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <Briefcase size={16} className="mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2 pl-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm mb-6">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">B.Tech in Computer Science and Engineering</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Veer Madho Singh Bhandari Uttarakhand Technical University
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Graduated 2021 | Percentage: 70.3%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;