import React from 'react'
import img1 from "../images/profile.png"

const About = () => {
  return (
    <div id='about' className='container mx-auto lg:w-4/5 lg:mt-0 mt-4 w-full min-h-screen flex items-center justify-center'>

      <div className='flex flex-col-reverse lg:flex-row items-center border border-gray-600 bg-gray-900 shadow-lg shadow-teal-500/30 lg:h-5/6 w-full min-h-[85vh] rounded-xl p-6 lg:p-10 gap-8'>
        
        
        <div data-aos='fade-right' className='flex flex-col justify-center lg:items-start items-center flex-1 space-y-6 text-center lg:text-left'>
          
          <h1 className='font-extrabold text-4xl lg:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>
            About Me
          </h1>          

          <p data-aos='fade-up' data-aos-delay="300" className='lg:text-lg text-md text-gray-300 leading-relaxed'>
            I'm <span className="text-teal-400 font-semibold">Lakshmi Narasimha Manti</span>, a dedicated Full Stack Developer with a passion for building modern, scalable, and high-performance web applications. I specialize in the MERN stack—React, Node.js, Express.js, and MongoDB—along with strong front-end skills using HTML, CSS, Bootstrap, and Tailwind CSS.
            <br /><br />
            My development journey is backed by a solid foundation in Data Structures and Algorithms, enabling me to write efficient, optimized code that performs under pressure. 
          </p>

          <div className='flex space-x-6 mt-4'>
            <a href='https://www.linkedin.com/in/manti-lakshmi-narasimha' data-aos="zoom-in" data-aos-delay="100">
              <img className='w-12 transition-transform transform hover:scale-110' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
            </a>
            <a href='https://github.com/bf-1729' data-aos="zoom-in" data-aos-delay="200">
              <img className='w-12 transition-transform transform hover:scale-110' src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" />
            </a>
            <a href='https://www.hackerrank.com/profile/mlakshminarasim1' data-aos="zoom-in" data-aos-delay="300">
              <img className='w-11 h-11 transition-transform transform hover:scale-110' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" alt="hackerrank" />
            </a>
            <a href='https://leetcode.com/u/Narasimha-7' data-aos="zoom-in" data-aos-delay="400">
              <img className='w-10 h-10 transition-transform transform hover:scale-110' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="leetcode" />
            </a>
          </div>

        </div>

        <div data-aos="fade-left" className='flex flex-col items-center justify-start flex-1'>
          <img className='lg:h-72 lg:w-72 h-56 w-56 rounded-full object-cover shadow-md shadow-teal-400/50 border-4 border-teal-500 p-2' src={img1} alt="Profile" />
        </div>

      </div>

    </div>
  )
}

export default About
