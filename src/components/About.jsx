import { forwardRef, useContext, useEffect } from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";
import darkbg from "../assets/Img/programming-unsplash.jpg"
import lightbg from "../assets/Img/mainbg.jpg"

const About = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  useScroll(ref, "left-side-entry", 3)

  return (
    <>
      <div></div>
      <div ref={ref} className="flex flex-col justify-center items-center ">
        <h1 className={` ${darkmode ? "text-slate-200" : "text-slate-800"} mt-16 p-10 md:text-3xl lg:text-4xl text-center`}>About me</h1>
        <div style={{ backgroundImage: `url(${darkmode ? darkbg : lightbg})` }} className="relative h-60 text-slate-300 rounded-xl bg-blue-900 shadow-blue-300 shadow-sm mb-40 text-xl text-center w-[70%]">
          <div className="intro-wrapper rounded-xl absolute inset-0 p-[7%] font-medium text-2xl leading-2">{portfolioData.intro}</div>
          </div>
      </div>
    </>
  )
}
)
export default About