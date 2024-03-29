// import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Foot from './components/Foot'

function App() {

  return (
    <>
      <Navbar />
      <main className='bg-slate-900'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
      <Foot />
    </>
  )
}

export default App
