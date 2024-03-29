const Projects = () => {
  return (
    <>
    <div className="flex flex-col bg-slate-900">
      <div className="projects"> </div>
      <h2 className="sub-heading flex-row-center align-center">My projects</h2>
      
      <div className="slideshow-container ">
        <div className="mySlides fade">
          <div className="projectcardcontainer bg-slate-900">
            <div className="projectcard">
              <img className="cardimg" src="Img\Utilitybox.png" alt="Utilitybox"/>
              <h3 className="font-semibold text-lg align-center margin10">Utility Box</h3>
              <p className="align-center margin10">utility box is a multi-purpose web app. It has many useful features
                like
                notepad, calculator, and todos.</p>
              <a className="button" target="_blank" rel="noopener" href="https://utilityboxreactor.netlify.app/">View
                Project</a>
            </div>
            <div className="projectcard">
              <img className="cardimg" src="Img\Quiztime.png" alt="QuizTime"/>
              <h3 className="font-semibold text-lg align-center margin10">QuizTime</h3>
              <p className="align-center margin10">quiz time is a web app to test your JavaScript knowledge with
                features including improvement calculator</p>
              <a className="button" target="_blank" rel="noopener" href="https://quiztimejavascripttests.netlify.app/">View
                Project</a>
            </div>
            <div className="projectcard">
              <img className="cardimg" src="Img\movieselector.png" alt="movieselector"/>
              <h3 className="font-semibold text-lg align-center margin10">Movie selector</h3>
              <p className="align-center margin10">Movie and show description site with details fetched from free API</p>
              <a className="button" target="_blank" rel="noopener" href="https://selectyourshow.netlify.app/">View
                Project</a>
            </div>
          </div>
        </div>
        <div className="mySlides fade">
          <div className="projectcardcontainer bg-slate-900">
            <div className="projectcard">
              <img className="cardimg" src="Img\logo.png" alt="Net dictionary"/>
              <h3 className="font-semibold text-lg align-center margin10">Quiz OTG</h3>
              <p className="align-center margin10">Quiz otg is a moct test react app</p>
              <a className="button" target="_blank" rel="noopener"
                href="https://quizotg.netlify.app/">View Project</a>
            </div>
            <div className="projectcard">
              <img className="cardimg" src="Img\Streamflowz.png" alt="Streamflowz"/>
              <h3 className="font-semibold text-lg align-center margin10">Streamflowz</h3>
              <p className="align-center margin10">It is a music player which a well-designed UI.</p>
              <a className="button" target="_blank" rel="noopener" href="https://streamflowzz.netlify.app/">View Project</a>
            </div>
            <div className="projectcard">
              <img className="cardimg" src="Img\Funphoto.png" alt="Funphoto"/>
              <h3 className="font-semibold text-lg align-center margin10">Funphoto</h3>
              <p className="align-center margin10">Funphoto is a free Unsplash image site. It has a search option to
                search in
                various categories.</p>
              <a className="button" target="_blank" rel="noopener"
                href="https://tarunkumarkushwaha.github.io/imagegenerator.github.io/">View Project</a>
            </div>
          </div>
        </div>
        <div className="mySlides fade">
          <div className="projectcardcontainer bg-slate-900">
            <div className="projectcard">
              <img className="cardimg" src="Img\Clockbox.png" alt="Clockbox"/>
              <h3 className="font-semibold text-lg align-center margin10">Clockbox</h3>
              <p className="align-center margin10">clock box is a alarm clock app</p>
              <a className="button" target="_blank" rel="noopener" href="https://clockbox.netlify.app/">View Project</a>
            </div>
            <div className="projectcard">
              <img className="cardimg" src="Img\Netdictionary.png" alt="Net dictionary"/>
              <h3 className="font-semibold text-lg align-center margin10">Net dictionary</h3>
              <p className="align-center margin10">It is a Dictionary app that uses free Dictionary api</p>
              <a className="button" target="_blank" rel="noopener"
                href="https://tarunkumarkushwaha.github.io/DictionarYonWEB/">View Project</a>
            </div>
          </div>
        </div>


        {/* <button className="prev" onclick="plusSlides(-1)">❮</button>
        <button className="next" onclick="plusSlides(1)">❯</button> */}
      </div>
    </div>
    </>
  )
}

export default Projects