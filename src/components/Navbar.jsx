import { useContext, useEffect, useState } from "react";
import { Context } from "../MyContext";
import { DarkMode, LightMode } from "@mui/icons-material";
import menuimg from "../assets/Img/menu.png"

const Navbar = ({ skills, home, about, contact, projects }) => {
  const { darkmode, setDarkmode } = useContext(Context);
  const [menu, setmenu] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth)
      if (window.innerWidth > 768) {
        setmenu(true)
      }
      else { setmenu(false) }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`sticky bg-gradient-to-tr ${darkmode ? " from-blue-950 via-blue-800 to-blue-700" : "from-blue-500 via-blue-400 to-blue-300"}`}>
        <div className="article-nav-container relative min-h-20">
          <button className="absolute top-5 left-4 h-8 w-8 md:hidden flex" onClick={() => setmenu(!menu)}>
            <img src={menuimg} className={` duration-200  ${menu ? "rotate-90" : "rotate-0"}`} alt="menu" />
          </button>
          {!menu && <div className="absolute right-10 bottom-2 translate-y-3 m-6 md:hidden flex text-2xl text-white">Tarun Portfolio</div>}
          <button onClick={() => {
              darkmode ? localStorage.setItem('Theme', JSON.stringify(false)) : localStorage.setItem('Theme', JSON.stringify(true));
              setDarkmode(prev => !prev)
            }}
              title={darkmode ? "active light mode" : "active dark mode"}
              className={`absolute right-2 top-4 smooth-entry rounded-full p-2 ${darkmode ? "bg-blue-950" : "bg-blue-300"} border border-black text-white`}>
              {!darkmode ? <DarkMode /> : <LightMode />}
            </button>
          <div className="menu-items md:flex-row flex-col smooth-entry pr-16" style={menu ? { display: "flex" } : { display: "none" }}>
            <div onClick={() => home.current.scrollIntoView()} className="button" >Home</div>
            <div onClick={() => about.current.scrollIntoView()} className="button aboutbtn">About</div>
            <div onClick={() => skills.current.scrollIntoView()} className='button contactbtn'>Skills</div>
            <div onClick={() => projects.current.scrollIntoView()} className="button projectsbtn">Projects</div>
            <div onClick={() => contact.current.scrollIntoView()} className='button contactbtn'>Contact</div>
            <a target="_blank" href="https://github.com/tarunkumarkushwaha" className='button contactbtn'>GitHub</a>
            {/* <button type="button" className="button">Resume</button> */}
            
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar