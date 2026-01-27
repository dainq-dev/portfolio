'use client'

import React from 'react'
import AnimatedBackground from '@/components/background-animation'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section-new'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ExperienceSection from '@/components/session-experience'
import ProjectsSection from '@/components/session-projects'
import EducationCertsSection from '@/components/education-certs-section'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors relative">
      <Header />

      <HeroSection />

      <section id="about" className="py-20 px-4">
        <AboutSection />
      </section>

      <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/30">
        <SkillsSection />
      </section>

      <section id="experiences" className="py-20 px-4">
        <ExperienceSection />
      </section>

      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/30">
        <ProjectsSection />
      </section>

      <section id="certs" className="py-20 px-4">
        <EducationCertsSection />
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950/20">
        <ContactSection />
      </section>

      <AnimatedBackground />

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm">
          © {new Date().getFullYear()} Nguyen Quoc Dai. Built with Next.js 16 & Tailwind CSS
        </p>
      </footer>
    </main>
  )
}
