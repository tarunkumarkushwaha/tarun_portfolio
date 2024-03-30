import { useContext } from "react";
import { Context } from "../MyContext";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navbar = ({ skills, home, about, contact, projects }) => {
  const { darkmode, setDarkmode } = useContext(Context);
  return (
    <>
      <header className="sticky bg-blue-950">
        <div className="article-nav-container">
          <div className="article-nav">
            {/* <input type="checkbox" className="nav-toggle" id="nav-toggle"/> */}
            {/* <label htmlFor="nav-toggle" className="menu-btn">
          <img src="src/assets/Img/menu.png" alt="menu"/>.
        </label> */}
            <div className="menu-items">
              <div onClick={() => home.current.scrollIntoView()} className="button" >Home</div>
              <div onClick={() => about.current.scrollIntoView()} className="button aboutbtn">About</div>
              <div onClick={() => skills.current.scrollIntoView()} className='button contactbtn'>Skills</div>
              <div onClick={() => projects.current.scrollIntoView()} className="button projectsbtn">Projects</div>
              <div onClick={() => contact.current.scrollIntoView()} className='button contactbtn'>Contact me</div>
              <button type="button" className="button">Resume</button>
              <button onClick={() => {
                darkmode ? localStorage.setItem('Theme', JSON.stringify(false)) : localStorage.setItem('Theme', JSON.stringify(true));
                setDarkmode(prev => !prev)
              }}
              title={darkmode ? "active light mode":"active dark mode"}
                className="rounded-full p-2 bg-blue-950 border border-black text-white">
                {darkmode ? <DarkMode />  : <LightMode />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar