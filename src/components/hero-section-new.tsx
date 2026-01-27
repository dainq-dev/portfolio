'use client'

import React from 'react'
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <Image
              src="https://ui-avatars.com/api/?name=Nguyen+Quoc+Dai&size=200&background=3b82f6&color=fff&bold=true"
              alt="Nguyen Quoc Dai"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
          Nguyễn Quốc Đại
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Software Engineer
        </h2>

        {/* Subtitle */}
        {/* <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          4+ years of experience in Full-Stack Development
        </p> */}

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
          <MapPin className="w-5 h-5" />
          <span>Ho Chi Minh City, Vietnam</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="https://github.com/dainguyenx3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/nguyen-quoc-dai/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:dainguyen020199@gmail.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  )
}
