import './App.css'
import portfolioData from "./data/PortfolioData.js"
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Foot from './components/Foot'
import { useEffect, useRef, useState } from 'react'
import { Context } from "./MyContext";
import Scroll from './components/Scroll'
import CircularProgress from '@mui/material/CircularProgress';
import darkbg from "./assets/Img/programming-unsplash.jpg"
import lightbg from "./assets/Img/mainbg.jpg"

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const skills = useRef();
  const home = useRef();
  const about = useRef();
  const projects = useRef();
  const contact = useRef();


  useEffect(() => {
    document.title = portfolioData ? portfolioData.name : "loading";
  }, []);

  return (
    <>
      {portfolioData ?
        <Context.Provider value={{ darkmode, setDarkmode }}>
          <Navbar skills={skills} home={home} about={about} contact={contact} projects={projects} />
          <main
            style={{ backgroundImage: `url(${darkmode ? darkbg : lightbg})` }}
            className='parallax'
          >
            <section className="intro-wrapper bg-contain">
              <Home ref={home} />
              <About ref={about} />
              <Projects ref={projects} />
              <Skills ref={skills} />
              <Contact ref={contact} />
            </section>
          </main>
          <Foot />
          <Scroll home={home} />
        </Context.Provider>
        :
        <div className='flex p-[50vh] flex-row justify-center'>
          <CircularProgress />
        </div>
      }
    </>
  )
}

export default App
