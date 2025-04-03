import React from 'react'
import img1 from "../images/profile.png"

const About = () => {
  return (
    <div id='about' className='container mt-[4rem] lg:-mb-8 mb-16 mx-auto lg:w-4/5 w-5/6 h-screen'>

      <div className='flex items-center lg:flex-row flex-col-reverse lg:border-none border-2 border-gray-500 lg:h-5/6 h-fit mt-4 rounded-lg lg:p-0 p-0 gap-4'>
        <div data-aos='fade-right' className='flex flex-col justify-center lg:items-start items-center lg:ml-10 gap-4 w-full h-full flex-1'>
        <h1 className='font-bold lg:text-4xl text-4xl bg-gradient-to-r bg-clip-text text-transparent from-teal-400 to-blue-600'>
          About Me
        </h1>          
        <p data-aos='fade-right' data-aos-delay="300" className='lg:text-left text-center lg:text-lg text-md tracking-wide text-gray-300'>
            I'm Lakshmi Narasimha Manti, a results-driven Full Stack Developer skilled in React.js, Node.js, Express.js, and MongoDB. With a strong grasp of Data Structures, and problem-solving, I build scalable, high-performance applications with a focus on security and seamless functionality.

            I've developed real-world projects like an E-commerce platform with secure authentication and a Pizza ordering system with real-time updates. Passionate about optimization, innovation, and Agile development, I thrive on solving complex challenges and creating impactful digital experiences.
          </p>

          <div className='flex gap-8 -ml-1.5'>
            <a href='https://www.linkedin.com/in/manti-lakshmi-narasimha'><img data-aos="zoom-in" data-aos-delay="100" className='w-12 hover:shadow-[0_0_10px_#00ff95] cursor-pointer' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" /></a>
            <a href='https://github.com/bf-1729'><img data-aos="zoom-in" data-aos-delay="200" className='w-12 hover:shadow-[0_0_10px_#00ff95] cursor-pointer' src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" /></a>
            <a href='https://www.hackerrank.com/profile/mlakshminarasim1'><img data-aos="zoom-in" data-aos-delay="300" className='w-11 h-11 hover:shadow-[0_0_10px_#00ff95] cursor-pointer' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" alt="external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo" /></a>
            <a href='https://leetcode.com/u/Narasimha-7'><img data-aos="zoom-in" data-aos-delay="400" className='w-10 h-10 hover:shadow-[0_0_10px_#00ff95] cursor-pointer' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo" /></a>
          </div>
        </div>
        <div data-aos="fade-left" className='flex flex-col items-center justify-start flex-1 lg:-mt-8'>
          <img className='lg:h-[370px] lg:w-80 h-64 w-58 p-4 rounded-full' src={img1}></img>
        </div>
      </div>
    </div>
  )
}

export default About
