import { forwardRef, useContext} from "react"
import portfolioData from "../data/PortfolioData.js"
import ProjectCard from "./Projects/ProjectCard.jsx"
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";

const Projects = forwardRef((prop, ref) => {
  const { darkmode} = useContext(Context);
  useScroll(ref,"right-side-entry",3)
  return (
    <>
      <div ></div>
      <div ref={ref} className="flex flex-col justify-center items-center">
        <h1 className={` ${darkmode ? "text-slate-200" : "text-slate-800"} mt-16 p-10 text-3xl text-center`}>Projects</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center p-10">
          {portfolioData.projects.map((item,i)=>{return <ProjectCard key={i} item={item}/>})} 
        </div>
      </div>
    </>
  )
}
)
export default Projects