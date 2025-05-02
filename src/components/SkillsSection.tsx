import React from 'react';
import { Code, Database,  GitBranch, PenTool as Tool, Cpu } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Core Technologies/Framework",
      skills: ["Java", "Java 8","OOPS", "Servlet","Hibernate", "Spring MVC","Spring Boot","Spring Security","Spring Data JPA","REST APIs", "Microservices", ]
    },

    {
      icon: <Tool className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Developer Tools",
      skills: ["Eclipse/STS", "IntelliJ IDEA", "Postman", "Swagger", "VS Code"]
    },
    {
      icon: <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      title: "Databases & Storage",
      skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]
    },
    {
      icon: <GitBranch className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Version Control & CI/CD",
      skills: ["Git", "GitHub", "Jenkins", "Docker"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Methodologies & Practices",
      skills: ["Agile/Scrum", "JIRA", "Code Review", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With 3 years of hands-on experience in Java development and Spring Framework ecosystem,
            I've cultivated a diverse skill set focused on building robust enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Spring Framework Expert",
                "Microservices Architecture",
                "RESTful API Design",
                "System Design",
                "Performance Optimization",
                "Technical Documentation",
                "Team Leadership",
                "Security Best Practices"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;