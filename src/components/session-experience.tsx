'use client';
import React, { useState } from 'react';

function ExperienceSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleProject = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  const experiences = [
    {
      company: 'Vietstats Co., Ltd',
      logo: 'VS',
      period: 'September 2023 – Present',
      role: 'Full-Stack Developer',
      desc: [
        'Developed portal.vietstats.vn, a data-as-a-service platform for configuring and embedding interactive economic data charts into external systems (WordPress, Node.js, Java-based CMS).',
        'Designed scalable system architecture and database schemas.',
        'Built dynamic, responsive UI with React.js and Next.js 14.',
        'Created secure RESTful APIs using Nest.js and PostgreSQL.',
        'Enabled data-driven storytelling for media and enterprises.',
        'Mentored interns/juniors and conducted code reviews.',
        'Deployed services using Docker and Nginx.',
      ],
      technologies: [
        'TypeScript',
        'Next.js 14',
        'NestJS',
        'PostgreSQL',
        'Firebase',
        'WebSocket',
        'Docker',
        'Nginx',
      ],
    },
    {
      company: 'Doctor Check JSC',
      logo: 'DC',
      period: 'Mar 2021 - Aug 2023',
      role: 'Frontend Developer, Full-Stack Developer',
      desc: [
        'Built and maintained key modules for customer relationship management',
        'Integrated real-time chat (Facebook, Zalo), customer insights, and messaging tools',
        'Developed Zalo Mini App for appointments, test results, and promotions',
        'Enhanced internal tools for doctors and nurses (appointments, health records)',
        'Built a customer-facing portal for viewing health checkups, reports, and invoices',
        'Mentored interns and junior developers; performed code reviews',
        'Optimized performance and deployed system to production',
      ],
      technologies: [
        'React.js',
        'TypeScript',
        'Redux-toolkit',
        'WebSocket',
        'Firebase',
        'Next.js',
        'NestJS',
        'SQL Server',
        'Ant Design',
        'MUI',
      ],
    },
    {
      company: 'Miniu Castis Co., Ltd',
      logo: 'MC',
      period: 'Jan 2022 – Mar 2022',
      role: 'Freelance Full-Stack Developer',
      desc: [
        'Developed APIs, participated in database system design, and led user interface development',
        'Performed code reviews.',
        'Implemented unit tests and integration tests.',
        'Deployed the system to production.',
        'Collaborated with the team to ensure code quality and performance.',

      ],
      technologies: ['TypeScript', 'React.js', 'Express.js', 'Sequelize', 'MySQL', 'Firebase', 'Storybook'],
    },
  ];

  return (
    <div className="space-y-8 relative z-998">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center text-blue-700 dark:text-white font-bold text-xl">
                {exp.logo}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
            </div>
            <span className="text-blue-700 dark:text-blue-400 font-semibold mt-2 md:mt-0">
              {exp.role}
            </span>
          </div>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-2 mt-2">
            {exp.desc.map((i, descIndex) => (
              <li key={descIndex}>{i}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200 text-xs font-semibold border border-blue-200 dark:border-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
