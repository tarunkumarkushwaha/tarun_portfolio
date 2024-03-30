import { forwardRef } from "react"
import portfolioData from "../data/PortfolioData.js"
import ProjectCard from "./Projects/ProjectCard.jsx"

const Projects = forwardRef((prop, ref) => {
  return (
    <>
      <div ref={ref}></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-slate-200 pt-10 mt-16 text-3xl text-center">Projects</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center p-10">
        {portfolioData.projects.map((item,i)=>{return <ProjectCard key={i} item={item}/>})}
        </div>
      </div>
    </>
  )
}
)
export default Projects