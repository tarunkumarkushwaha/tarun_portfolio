const Navbar = ({ skills, home, about, contact, projects }) => {
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
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar