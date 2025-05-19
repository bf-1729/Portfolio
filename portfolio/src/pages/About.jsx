import React from 'react';
import img1 from '../images/profile.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start justify-center px-6 py-20 text-white overflow-hidden"
    >
      {/* Glowing Background Gradient Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-2xl opacity-20 animate-ping"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-teal-500/30 rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.1)] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 animate-fadeIn">
        
        {/* Profile Image with Neon Glow */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group w-60 h-60 md:w-72 md:h-72 transform transition-transform duration-500 group-hover:rotate-2">
            <img
              src={img1}
              alt="Lakshmi Narasimha"
              data-aos="zoom-in"
              className="rounded-full object-fit w-full h-full border-4 border-teal-500 shadow-[0_0_25px_rgba(20,255,255,0.5)] transition-all duration-500 group-hover:scale-105"
              draggable="false"
            />
            <div className="absolute inset-0 rounded-full bg-teal-400 blur-3xl opacity-20 group-hover:opacity-40 z-[-1]" />
          </div>
        </div>

        {/* About Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-4.5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent" data-aos="zoom-in">
            Lakshmi Narasimha
          </h1>
          <p data-aos="fade-left" className="text-gray-300 text-lg leading-relaxed">
            <p>I'm a driven Full Stack Developer specializing in React, Node.js, and modern web technologies. I build efficient, scalable, and user-focused applications that solve problems and deliver value.

With a sharp eye for detail and a passion for clean code, I'm constantly learning and pushing boundaries to create impactful digital experiences. Ready to innovate and collaborate on cutting-edge projects.</p>
            
          </p>

          {/* Social Icons with Hover Glow */}
          <div className="flex justify-center md:justify-start gap-6 pt-4 flex-wrap">
            <div className='flex items-center'>
              <a target='_blank' href='https://drive.google.com/file/d/1fbjVBjWGWChTl5_VYwnoZDGsAGO3xPEB/view?usp=drive_link' className='bg-teal-400 p-3 rounded-md hover:border-cyan-400'>Download CV</a>
            </div>
            {[
              {
                href: 'https://www.linkedin.com/in/manti-lakshmi-narasimha',
                src: 'https://img.icons8.com/color/48/linkedin.png',
                alt: 'LinkedIn',
              },
              {
                href: 'https://github.com/bf-1729',
                src: 'https://img.icons8.com/glyph-neue/64/github.png',
                alt: 'GitHub',
              },
              {
                href: 'https://www.hackerrank.com/profile/mlakshminarasim1',
                src: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png',
                alt: 'HackerRank',
              },
              {
                href: 'https://leetcode.com/u/Narasimha-7',
                src: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png',
                alt: 'LeetCode',
              },
            ].map(({ href, src, alt }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                data-aos="zoom-in"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 hover:border-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
              >
                <img src={src} alt={alt} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
