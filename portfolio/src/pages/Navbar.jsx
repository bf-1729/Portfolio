"use client";
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [aosKey, setAosKey] = useState(0); // Unique key to force AOS reinitialization

  useEffect(() => {
    let AOS;
    const initAOS = async () => {
      try {
        AOS = (await import('aos')).default;
        AOS.init({
          duration: 1000,
          easing: 'ease',
          once: false, // Allow animations to trigger multiple times
          anchorPlacement: 'top-bottom',
        });
      } catch (error) {
        console.error('Failed to load AOS:', error);
      }
    };

    initAOS();

    // Force AOS to refresh
    setTimeout(() => {
      if (AOS) {
        AOS.refresh();
      }
    }, 100);

    // Clean up on unmount
    return () => {
      if (AOS) {
        AOS.refreshHard();
      }
    };
  }, []);
  // Trigger reinitialization when revisiting the page
  useEffect(() => {
    setAosKey((prev) => prev + 1);
  }, []);

  return (
    <div className="h-16 w-full text-white bg-teal-700 fixed z-10">
      <div className="h-full flex lg:items-center items-center justify-between px-4 lg:px-10">
        <div className="lg:flex w-[79%] justify-between mx-auto hidden gap-14 lg:text-lg text-md">
          <div className='lg:text-3xl text-xl bg-gradient-to-r from-cyan-400 to-gray-200 bg-clip-text text-transparent font-bold'>Portfolio</div>
          <div className='flex gap-10'>
            <div className="relative group">
              <AnchorLink className="anchor-link" href="#about">
                About Me
              </AnchorLink>
              <span className="absolute left-0 bottom-2 w-0 h-0.5 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>

            <div className='relative group'>
              <AnchorLink className='anchor-link' offset={100} href='#skill'>Skills</AnchorLink>
              <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-teal-400 transition-all duration-100 ease-in-out group-hover:w-full'></span>
              </div>
            <div className='relative group'>
              <AnchorLink className='anchor-link' offset={100} href='#projects'>Projects</AnchorLink>
              <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </div>
            <div className='hover:bg-black rounded-lg'><AnchorLink className='anchor-link hover:bg-black bg-violet-600 p-2 rounded-lg' offset={100} href='#contact'>Contact Me</AnchorLink></div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden text-2xl w-96'>Portfolio</div>
        <div className="lg:hidden flex mx-auto" onClick={() => setVisible(!visible)}>

          <div className='cursor-pointer'>
            <div className="w-6 h-0.5 bg-white mb-2"></div>
            <div className="w-6 h-0.5 bg-white mb-2"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-teal-700 transition-all ${visible ? 'w-3/5 h-screen' : 'w-0'}`}
        style={{ transitionDuration: '0.3s' }}
      >
        <div className="flex flex-col gap-4 text-white-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-3 cursor-pointer"
          >
            <p className='mt-2'><img className='w-11' src="https://img.icons8.com/ios-filled/50/1F2937/multiply.png" alt="multiply" /></p>
          </div>
          <AnchorLink className='anchor-link hover:bg-teal-400 hover:text-black h-10 pt-2' href='#about'><NavLink onClick={() => setVisible(false)} className="pl-6" to="/">
            About Me
          </NavLink></AnchorLink>
          <AnchorLink className='anchor-link hover:bg-teal-400 hover:text-black h-10 pt-2' href='#skill'><NavLink onClick={() => setVisible(false)} className="pl-6" to="/collection">
            Skills
          </NavLink></AnchorLink>
          <AnchorLink className='anchor-link hover:bg-teal-400 hover:text-black h-10 pt-2' href='#projects'><NavLink onClick={() => setVisible(false)} className="pl-6" to="/about">
            Projects
          </NavLink></AnchorLink>
          <AnchorLink className='anchor-link hover:bg-teal-400 hover:text-black h-10 pt-2' href='#contact'><NavLink onClick={() => setVisible(false)} className="pl-6" to="/contact">
            Contact
          </NavLink></AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
