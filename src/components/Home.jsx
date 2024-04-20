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
        <div className="intro-wrapper bg-contain">
          <h1 className="text-4xl font-medium p-4">Hi I am <strong><span className="text-4xl font-medium">{portfolioData.name}</span></strong>
          </h1>
          <p className="text-4xl h-2 font-medium p-4"><TypewriterEffect text={"Front-End-Developer"} delay={300}/></p>
        </div>
      </div>
    </>
  )
}
)
export default Home