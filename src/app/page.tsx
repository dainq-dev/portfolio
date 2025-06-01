'use client';

import AnimatedBackground from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";
import React, { useEffect, useState, createContext, useContext } from "react";
import InteractiveBackground from "@/components/InteractiveObject";

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved) setTheme(saved);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') localStorage.setItem('theme', next);
      return next;
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="h-[70px] bg-transparent">
        <div className="container mx-auto px-4 h-[60px] flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-white font-bold text-xl">
              Portfolio
            </a>
            <ul className="flex space-x-8">
              <li>
                <a className="text-white/80" href="#about">About</a>
              </li>
              <li>
                <a className="text-white/80" href="#projects">Projects</a>
              </li>
              <li>
                <a className="text-white/80" href="#skills">Skills</a>
              </li>
              <li>
                <a className="text-white/80" href="#resume">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-white/10 text-white border border-white/20">
              Resume
            </Button>
            <Button size="sm" className="bg-blue-600 text-white">
              Contact Me
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`z-999 fixed top-4 left-0 right-0 flex justify-center pointer-events-none transition-all duration-300`}>
        <header
          className={`z-999 w-full max-w-5xl mx-auto h-[60px] flex items-center justify-between px-6 transition-all duration-300 pointer-events-auto
            ${isScrolled ? 'bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 shadow-lg' : 'bg-transparent'}
          `}
          style={{
            boxShadow: isScrolled ? '0 4px 32px 0 rgba(0,0,0,0.18)' : 'none',
          }}
        >
          <nav className="flex items-center space-x-8">
            <a href="/" className="font-bold text-xl text-black dark:text-white">Portfolio</a>
            <ul className="flex space-x-6">
              <li><a className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200" href="#about">About</a></li>
              <li><a className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200" href="#experience">Experience</a></li>
              <li><a className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200" href="#projects">Projects</a></li>
              <li><a className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200" href="#skills">Skills</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white border border-black/20 dark:border-white/20">Resume</Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Contact Me</Button>
            <button onClick={toggleTheme} className="ml-2 p-2 rounded-full  border-none outline-none bg-black/10 dark:bg-white/10 transition-colors">
              {theme === 'dark' ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A8 8 0 1 0 18 19.25a.75.75 0 0 0-.75-.75Z"/></svg>
              ) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#fbbf24" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm10 9h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM4 12a1 1 0 0 1-1-1H2a1 1 0 1 1 0 2h1a1 1 0 0 1 1-1Zm14.95 7.07a1 1 0 0 1-1.41 0l-.7-.7a1 1 0 1 1 1.41-1.42l.7.71a1 1 0 0 1 0 1.41ZM6.11 6.11a1 1 0 0 1-1.41 0l-.7-.7A1 1 0 1 1 5.4 4l.7.7a1 1 0 0 1 0 1.41Zm12.02 0a1 1 0 0 1 0-1.41l.7-.7A1 1 0 1 1 20 5.4l-.7.7a1 1 0 0 1-1.18.01ZM4.22 19.78a1 1 0 0 1 0-1.41l.7-.71a1 1 0 1 1 1.41 1.42l-.7.7a1 1 0 0 1-1.41 0Z"/></svg>
              )}
            </button>
          </div>
        </header>
      </div>
      <main className="h-full w-full min-h-[1438px] bg-white dark:bg-[#111] transition-colors duration-300">
        <InteractiveBackground />
        <section className="max-w-5xl mx-auto w-full px-4 relative flex flex-col items-center justify-center pt-32 pb-16 text-center z-51">
          <div className="flex flex-col  items-center justify-center gap-10 w-full">
            <div className="flex flex-col items-center justify-center  flex-1 z-10 w-full">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/20 shadow-lg mb-6 bg-gradient-to-br from-blue-100/60 to-purple-100/60 dark:from-blue-500/30 dark:to-purple-500/30">
                <img src="https://ui-avatars.com/api/?name=Nguyen+Quoc+Dai&background=0D8ABC&color=fff&size=256" alt="Nguyen Van A" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-black via-blue-700 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-2 drop-shadow-lg">Nguyễn Quốc Đại</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4 tracking-wide">Software Developer</h2>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <a href="mailto:dainguyen020199@gmail.com" className="hover:scale-110 transition-transform" title="Email"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#60a5fa" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.379l8 5.334 8-5.334V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.121l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"/></svg></a>
                <a href="https://github.com/dainq-dev" target="_blank" rel="noopener" className="hover:scale-110 transition-transform" title="Github"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg></a>
                <a href="https://www.linkedin.com/in/nqd-020199hcm/" target="_blank" rel="noopener" className="hover:scale-110 transition-transform" title="LinkedIn"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#60a5fa" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a href="/NguyenQuocDai_CV_HCM.pdf" download className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Download CV</a>
                <a href="#contact" className="inline-block px-6 py-2 rounded-full border border-blue-400 text-blue-700 dark:text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-colors shadow-lg">Contact Me</a>
              </div>
              <p className="w-full mx-auto text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed animate-fade-in-up text-center md:text-left">
                Versatile and results-driven Full-Stack Software Engineer with nearly 4 years of hands-on experience designing and developing end-to-end web applications. Adept in both front-end and back-end technologies, with a strong foundation in TypeScript, React.js, Next.js, NestJS, and PostgreSQL. Proven ability to deliver high-quality, scalable solutions across various domains including healthcare, CRM, and data analytics.
              </p>
            </div>
            {/* Right: Placeholder for 3D or other element if needed later */}
            <div className="flex-1 flex items-center justify-center w-full md:w-auto h-[0px] md:h-[0px] mt-0 md:mt-0">
              {/* 3D effect is now site-wide background */}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Known for being a proactive team player with a strong problem-solving mindset, attention to detail, and a passion for clean, maintainable code. I actively participate in the full software development lifecycle, from system design and architecture to implementation and deployment. I have also led and mentored junior developers, conducted code reviews, and contributed to team growth.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <b>Career Objective:</b> To grow into a Senior Software Engineer position where I can lead complex technical initiatives, build impactful products, and foster a culture of continuous learning and innovation.
          </p>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Core Skills</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              'Full-stack development',
              'TypeScript',
              'React.js',
              'Next.js',
              'NestJS',
              'RESTful API',
              'WebSocket',
              'UI/UX',
              'Ant Design',
              'MUI',
              'Shadcn',
              'Agile/Scrum',
              'Docker',
              'Nginx',
              'CI/CD',
              'Github Action',
              'Unit Testing',
              'Jest',
              'Code Review',
              'Teamwork',
            ].map(skill => (
              <span key={skill} className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-gradient-to-r dark:from-blue-500/80 dark:to-purple-500/80 dark:text-white text-sm font-semibold shadow hover:scale-105 transition-transform cursor-default border border-blue-200 dark:border-none">{skill}</span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Languages</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Front-end</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Redux-toolkit</li>
                <li>Recoil</li>
                <li>Storybook</li>
                <li>Tailwind</li>
                <li>Sass</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Back-end</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>NestJS</li>
                <li>Express.js</li>
                <li>ASP.NET</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Databases</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQL Server</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">UI Libraries</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Ant Design</li>
                <li>MUI</li>
                <li>Shadcn</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Communication</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>WebSocket</li>
                <li>Socket.IO</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Tools</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Git</li>
                <li>Docker</li>
                <li>Jira</li>
                <li>Figma</li>
                <li>Zeplin</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">Testing & Others</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Unit Tests</li>
                <li>Jest</li>
                <li>Postman</li>
                <li>RESTful API</li>
                <li>Technical documentation</li>
                <li>Deployment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Professional Experience</h2>
          <div className="space-y-8">
            {/* Vietstats Co., Ltd */}
            <div className="bg-white/90 dark:bg-white/5 rounded-xl shadow-md p-6 border border-gray-200 dark:border-white/10 hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center text-blue-700 dark:text-white font-bold text-lg">VS</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Vietstats Co., Ltd</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Apr 2024 – Present</span>
                  </div>
                </div>
                <span className="text-blue-700 dark:text-blue-400 font-semibold mt-2 md:mt-0">Full-Stack Developer</span>
              </div>
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-2">
                <li>Developed a data visualization platform for configuring and embedding charts into external platforms such as WordPress, Node.js, and Java-based CMS</li>
                <li>Designed scalable system architecture and database schema</li>
                <li>Built dynamic front-end interfaces using React.js and Next.js 14 App Router</li>
                <li>Created secure, reusable REST APIs with NestJS and PostgreSQL</li>
                <li>Enabled data-driven storytelling for media companies and enterprises</li>
                <li>Deployed platform with Docker and Nginx in a production environment</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {['TypeScript','Next.js 14','NestJS','PostgreSQL','Firebase','WebSocket','Docker','Nginx'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200 text-xs font-semibold border border-blue-200 dark:border-none">{tech}</span>
                ))}
              </div>
            </div>
            {/* Doctor Check JSC */}
            <div className="bg-white/90 dark:bg-white/5 rounded-xl shadow-md p-6 border border-gray-200 dark:border-white/10 hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-200 to-blue-200 dark:from-green-500 dark:to-blue-500 flex items-center justify-center text-green-700 dark:text-white font-bold text-lg">DC</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Doctor Check JSC</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Apr 2022 – Apr 2024</span>
                  </div>
                </div>
                <span className="text-green-700 dark:text-green-400 font-semibold mt-2 md:mt-0">Front-end / Full-Stack Developer</span>
              </div>
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-2">
                <li>Built and maintained key modules for customer relationship management</li>
                <li>Integrated real-time chat (Facebook, Zalo), customer insights, and messaging tools</li>
                <li>Developed Zalo Mini App for appointments, test results, and promotions</li>
                <li>Enhanced internal tools for doctors and nurses (appointments, health records)</li>
                <li>Built a customer-facing portal for viewing health checkups, reports, and invoices</li>
                <li>Mentored interns and junior developers; performed code reviews</li>
                <li>Optimized performance and deployed system to production</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {['React.js','TypeScript','Redux-toolkit','WebSocket','Firebase','Next.js','NestJS','SQL Server','Ant Design','MUI'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200 text-xs font-semibold border border-blue-200 dark:border-none">{tech}</span>
                ))}
              </div>
            </div>
            {/* ViHAT Technology Co., Ltd */}
            <div className="bg-white/90 dark:bg-white/5 rounded-xl shadow-md p-6 border border-gray-200 dark:border-white/10 hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-500 dark:to-orange-500 flex items-center justify-center text-yellow-700 dark:text-white font-bold text-lg">VH</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">ViHAT Technology Co., Ltd</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2022 – Mar 2022</span>
                </div>
              </div>
              <span className="text-yellow-700 dark:text-yellow-400 font-semibold">Front-end Developer (Intern)</span>
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-2 mt-2">
                <li>Built CRM modules including multi-channel messaging and email management</li>
                <li>Participated in requirement analysis and feature implementation</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {['React.js','Next.js','Redux-saga','Firebase','Docker'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200 text-xs font-semibold border border-blue-200 dark:border-none">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Education</h2>
          <div className="bg-white/90 dark:bg-white/5 rounded-xl shadow-md p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">Ho Chi Minh City Industry and Trade College</h3>
            <p className="text-gray-700 dark:text-gray-300">Bachelor's Degree in Information Technology (2018 – 2022)</p>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Achievements</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Top 15 National Finalist – Startup Kite 2021</li>
            <li>National Encouragement Award – AI-based smart attendance system with automatic temperature detection</li>
          </ul>
        </section>
      </main>
      <AnimatedBackground/>
    </ThemeContext.Provider>
  );
}
