import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../MyContext";
import { DarkMode, LightMode } from "@mui/icons-material";
import menuimg from "../assets/Img/menu.png"
import useElementIsVisible from "../customhooks/useElementIsVisible";
import portfolioData from "../data/PortfolioData"

const Navbar = ({ skills, home, about, contact, projects }) => {
  const { darkmode, setDarkmode } = useContext(Context);
  const [menu, setmenu] = useState(false)
  const [width, setwidth] = useState(false)

  let homeVisible = useElementIsVisible(home)
  let aboutVisible = useElementIsVisible(about)
  let skillsVisible = useElementIsVisible(skills)
  let projectsVisible = useElementIsVisible(projects)
  let contactVisible = useElementIsVisible(contact)

  const handleDownload = () => {
    const fileUrl = "https://drive.google.com/file/d/1i6pStZ_srxktQzNP6jzkn01sLQ56iDa9/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth)
      if (window.innerWidth > 768) {
        setmenu(true)
      }
      else { setmenu(false) }
    };
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-10 bg-gradient-to-tr ${darkmode ? " from-blue-950 via-blue-800 to-blue-700" : "from-blue-500 via-blue-400 to-blue-300"}`}>
        <div className="article-nav-container relative min-h-20">
          <button className="absolute top-5 left-4 h-8 w-8 md:hidden flex" onClick={() => setmenu(!menu)}>
            <img src={menuimg} className={` duration-200  ${menu ? "rotate-180" : "rotate-0"}`} alt="menu" />
          </button>
          {!menu && <div className="absolute right-10 bottom-4 translate-y-3 m-6 md:hidden flex text-xl font-bold text-white">{portfolioData.name.split(' ')[0]} Portfolio</div>}
          <button onClick={() => {
            darkmode ? localStorage.setItem('Theme', JSON.stringify(false)) : localStorage.setItem('Theme', JSON.stringify(true));
            setDarkmode(prev => !prev)
          }}
            title={darkmode ? "active light mode" : "active dark mode"}
            className={`absolute right-2 top-4 smooth-entry rounded-full p-2 ${darkmode ? "bg-blue-950" : "bg-blue-300"} border border-black text-white`}>
            {!darkmode ? <DarkMode /> : <LightMode />}
          </button>
          <div className="menu-items md:flex-row flex-col smooth-entry md:pr-16 pr-0" style={menu ? { display: "flex" } : { display: "none" }}>
            <div onClick={() => { home.current.scrollIntoView(); width < 768 && setmenu(!menu) }} className={`${homeVisible && "on"} button`} ><p className="button-content">Home</p></div>
            <div onClick={() => { about.current.scrollIntoView(); width < 768 && setmenu(!menu) }} className={`${aboutVisible && "on"} button aboutbtn`}><p className="button-content">About</p></div>
            <div onClick={() => { projects.current.scrollIntoView(); width < 768 && setmenu(!menu) }} className={`${projectsVisible && "on"} button projectsbtn`}><p className="button-content">Projects</p></div>
            <div onClick={() => { skills.current.scrollIntoView(); width < 768 && setmenu(!menu) }} className={`${skillsVisible && "on"} button contactbtn`}><p className="button-content">Skills</p></div>
            <div onClick={() => { contact.current.scrollIntoView(); width < 768 && setmenu(!menu) }} className={`${contactVisible && "on"} button contactbtn`}><p className="button-content">Contact</p></div>
            <a target="_blank" href="https://github.com/tarunkumarkushwaha" className='button contactbtn'><p className="button-content">GitHub</p></a>
            <button onClick={handleDownload} className='button contactbtn'><p className="button-content">Resume</p></button>

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar