import React from 'react'
import Navbar from './pages/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Skill from './pages/Skill'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='text-white h-fit'>
      <Navbar />
      <div className='flex flex-col gap-16 bg-gray-800 h-fit overflow-hidden px-5'>
        
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
