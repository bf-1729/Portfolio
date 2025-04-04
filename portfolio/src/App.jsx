import React from 'react'
import Navbar from './pages/Navbar'
import Skill from './pages/Skill'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="text-white h-fit overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col gap-8 bg-gray-800 min-h-screen px-4 py-0">
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
