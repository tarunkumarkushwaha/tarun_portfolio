// import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Foot from './components/Foot'
import { useRef, useState } from 'react'
import { Context } from "./MyContext";
import Scroll from './components/Scroll'

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const skills = useRef();
  const home = useRef();
  const about = useRef();
  const projects = useRef();
  const contact = useRef();

  return (
    <>
      <Context.Provider value={{ darkmode, setDarkmode }}>
        <Navbar skills={skills} home={home} about={about} contact={contact} projects={projects} />
        <main className={`${darkmode ? "bg-slate-900" : "bg-slate-600"}`}>
          <Home ref={home} />
          <About ref={about} />
          <Skills ref={skills} />
          <Projects ref={projects} />
          <Contact ref={contact} />
        </main>
        <Foot />
        <Scroll/>
      </Context.Provider>
    </>
  )
}

export default App
