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
      <div className="flex flex-col bg-gradient-to-r from-slate-950 via-zinc-950 to-black gap-8 min-h-screen px-0 py-0">
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
