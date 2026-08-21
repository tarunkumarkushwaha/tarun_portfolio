import "./App.css";
import portfolioData from "./data/PortfolioData.js";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Foot from "./components/Foot";
import { useEffect, useRef, useState } from "react";
import { Context } from "./MyContext";
import Scroll from "./components/Scroll";
import CircularProgress from "@mui/material/CircularProgress";
import darkbg from "./assets/Img/programming-unsplash.jpg";
import lightbg from "./assets/Img/mainbg.jpg";
import Cursor from "./components/Cursor.jsx";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const skills = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    fetch("/.netlify/functions/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: window.location.pathname,
        screen: `${screen.width}x${screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
      }),
    });
  }, []);

  useEffect(() => {
    document.title = portfolioData ? portfolioData.name : "loading";
  }, []);

  return (
    <>
      {portfolioData ? (
        <Context.Provider value={{ darkmode, setDarkmode }}>
          <Navbar
            skills={skills}
            home={home}
            about={about}
            contact={contact}
            projects={projects}
          />
          <main
            className={`relative min-h-screen transition-all duration-700 
    ${darkmode ? "bg-black text-slate-100" : "bg-slate-50 text-slate-900"}`}
          >
            <div
              className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-700
      ${darkmode ? "opacity-30" : "opacity-20"}`}
              style={{
                backgroundImage: `url(${darkmode ? darkbg : lightbg})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <section className="space-y-24 md:space-y-48 py-20">
                <Home ref={home} projects={projects} />
                <About ref={about} />
                <Projects ref={projects} />
                <Skills ref={skills} />
                <Contact ref={contact} />
              </section>
            </div>
          </main>
          <Cursor />
          <Foot />
          <Scroll home={home} />
        </Context.Provider>
      ) : (
        <div className="flex p-[50vh] flex-row justify-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default App;
