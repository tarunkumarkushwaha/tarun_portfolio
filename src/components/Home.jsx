import { forwardRef, useContext } from "react"
import { Context } from "../MyContext";
import portfolioData from "../data/PortfolioData.js"
import darkbg from "../assets/Img/programming-unsplash.jpg"
import lightbg from "../assets/Img/mainbg.jpg"
import TypewriterEffect from "./TypewriterEffect.jsx";

const Home = forwardRef((prop, ref) => {
  const { darkmode} = useContext(Context);

  return (
    <>
      <div ref={ref} style={{backgroundImage : `url(${darkmode ? darkbg :lightbg})`}} className={`shadow-xl shadow-slate-500 bg-no-repeat bg-cover mb-24`}>
        <div className="intro-wrapper bg-contain md:p-[250px] p-0 py-72">
          <h1 className="sm:text-4xl text-xl font-medium p-4">Hi I am <strong><span className="sm:text-4xl text-xl font-medium">{portfolioData.name}</span></strong>
          </h1>
          <p className="sm:text-4xl text-xl h-2 font-medium p-4"><TypewriterEffect text={"Front-End-Developer"} delay={300}/></p>
        </div>
      </div>
    </>
  )
}
)
export default Home