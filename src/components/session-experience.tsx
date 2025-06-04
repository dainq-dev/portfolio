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
      period: 'Apr 2024 – Present',
      role: 'Full-Stack Developer',
      desc: [
        'Developed a data visualization platform for configuring and embedding charts into external platforms such as WordPress, Node.js, and Java-based CMS',
        'Designed scalable system architecture and database schema',
        'Built dynamic front-end interfaces using React.js and Next.js 14 App Router',
        'Created secure, reusable REST APIs with NestJS and PostgreSQL',
        'Enabled data-driven storytelling for media companies and enterprises',
        'Deployed platform with Docker and Nginx in a production environment',
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
      period: 'Apr 2022 – Apr 2024',
      role: 'Front-end / Full-Stack Developer',
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
      company: 'ViHAT Technology Co., Ltd',
      logo: 'VH',
      period: 'Jan 2022 – Mar 2022',
      role: 'Front-end Developer (Internship)',
      desc: [
        'Built CRM modules including multi-channel messaging and email management',
        'Participated in requirement analysis and feature implementation',
      ],
      technologies: ['React.js', 'Next.js', 'Redux-saga', 'Firebase', 'Docker'],
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
