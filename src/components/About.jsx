import { forwardRef } from "react"
import portfolioData from "../data/PortfolioData.js"

const About = forwardRef((prop, ref) => {
  return (
    <>
      <div ref={ref}></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-slate-200 mt-16 p-10 text-3xl text-center">About me</h1>
        <p className="text-slate-300 p-[5%] mb-40 text-xl text-center w-[70%]">{portfolioData.intro}</p>
      </div>
    </>
  )
}
)
export default About