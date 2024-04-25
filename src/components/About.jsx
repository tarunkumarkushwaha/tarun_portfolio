import { forwardRef, useContext, useEffect } from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";

const About = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  useScroll(ref, "left-side-entry", 3)

  return (
    <>
      <div></div>
      <div ref={ref} className="flex flex-col justify-center items-center ">
        <h1 className={` ${darkmode ? "" : ""}text-slate-200 mt-16 p-10 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-center`}>About me</h1>
        <p className="text-slate-100 rounded-xl border border-blue-400 bg-blue-900 shadow-blue-300 shadow-md p-[5%] md:mb-40 mb-20 sm:text-xl text-sm text-center w-[70%]">{portfolioData.intro}</p>
      </div>
    </>
  )
}
)
export default About