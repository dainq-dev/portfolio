'use client';

import AnimatedBackground from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    <React.Fragment>
      <div className={`fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${isScrolled ? '' : ''}`}>
        <header
          className={`w-full max-w-6xl mx-auto h-[60px] flex items-center justify-between px-6 transition-all duration-300 pointer-events-auto
            ${isScrolled ? 'bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg' : 'bg-transparent'}
          `}
          style={{
            boxShadow: isScrolled ? '0 4px 32px 0 rgba(0,0,0,0.18)' : 'none',
          }}
        >
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-white font-bold text-xl">
              Portfolio
            </a>
            <ul className="flex space-x-6">
              <li>
                <a className="text-white/80 hover:text-white transition-colors duration-200" href="#about">About</a>
              </li>
              <li>
                <a className="text-white/80 hover:text-white transition-colors duration-200" href="#experience">Experience</a>
              </li>
              <li>
                <a className="text-white/80 hover:text-white transition-colors duration-200" href="#projects">Projects</a>
              </li>
              <li>
                <a className="text-white/80 hover:text-white transition-colors duration-200" href="#skills">Skills</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Resume
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Me
            </Button>
          </div>
        </header>
      </div>
      <main className="h-screen w-screen flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
        <section className="hero relative h-full w-full min-h-[1438px] bg-[#111] overflow-hidden bg-grey-1 flex justify-center items-center">
          <div>
            <div className="container-main relative flex h-full flex-col items-center w-xxl min-h-[800px]">
              <h1
                className="relative z-30 w-full bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-title text-[76px] font-bold leading-[1] tracking-tight text-transparent "
              >

              </h1>
            <p className="relative z-30 mt-5 max-w-md text-[18px] leading-snug tracking-tight  text-white">
            </p>
            <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
              <GradientButton>
                <span className="text-[#5A250A]">Explore now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-[9px] w-[17px] text-[#5A250A]"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  />
                </svg>
              </GradientButton>
            </div>
          </div>
          </div>
        </section>
      </main>
      <AnimatedBackground/>
    </React.Fragment>
  );
}
