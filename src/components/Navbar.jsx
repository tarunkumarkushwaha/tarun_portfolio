const Navbar = () => {
  return (
    <>
      <header className="sticky bg-slate-800">
    <div className="article-nav-container">
      <div className="article-nav">
        <input type="checkbox" className="nav-toggle" id="nav-toggle"/>
        <label htmlFor="nav-toggle" className="menu-btn">
          <img src="Img\menu.png" alt="menu"/>.
        </label>
        <div className="menu-items">
          {/* <div className="button" onclick="location.href='index.html';">Home</div>
          <div className="button aboutbtn" onclick="showabout()">About</div>
          <div className="button projectsbtn" onclick="showproject()">Projects</div>
          <div className='button contactbtn' onclick="showcontact()">Contact me</div>
          <button type="button" onclick="showresume()" className="button">Resume</button> */}
          {/* <button type="button" onclick="test()" className="button">Test</button> */}
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Navbar