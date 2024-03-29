const Navbar = () => {
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
          <div className="button" >Home</div>
          <div className="button aboutbtn">About</div>
          <div className="button projectsbtn">Projects</div>
          <div className='button contactbtn'>Contact me</div>
          <button type="button" className="button">Resume</button>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Navbar