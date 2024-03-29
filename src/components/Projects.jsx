import { forwardRef } from "react"
import portfolioData from "../data/PortfolioData.js"

const Projects = forwardRef((prop, ref) => {
  return (
    <>
      <div ref={ref}></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-slate-200 p-10 mt-16 text-3xl text-center">Projects</h1>



      </div>
    </>
  )
}
)
export default Projects