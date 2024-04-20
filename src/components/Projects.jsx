import { forwardRef, useContext, useRef} from "react"
import portfolioData from "../data/PortfolioData.js"
import ProjectCard from "./Projects/ProjectCard.jsx"
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";

const Projects = forwardRef((prop, ref) => {
  const { darkmode} = useContext(Context);
  const firstHalfref = useRef()
  const secondHalfref = useRef()
  useScroll(firstHalfref,"right-side-entry",1)
  useScroll(secondHalfref,"left-side-entry",1)
  const mid = Math.floor(portfolioData.projects.length / 2);
  const firstHalf = portfolioData.projects.slice(0, mid);
  const secondHalf = portfolioData.projects.slice(mid);
  // console.log(firstHalf,secondHalf)
  return (
    <>
      <div ></div>
      <div ref={ref} className="flex flex-col justify-center items-center">
        <h1 className={` ${darkmode ? "text-slate-200" : "text-slate-800"} mt-16 p-10 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-center`}>Projects</h1>
        <div ref={firstHalfref} className="flex flex-row flex-wrap gap-8 justify-center items-center p-10">
          {/* {portfolioData.projects.map((item,i)=>{return <ProjectCard key={i} item={item}/>})}  */}
          {firstHalf.map((item,i)=>{return <ProjectCard key={i} item={item}/>})} 
        </div>
        <div ref={secondHalfref} className="flex flex-row flex-wrap gap-8 justify-center items-center p-10">
          {secondHalf.map((item,i)=>{return <ProjectCard key={i} item={item}/>})} 
        </div>
      </div>
    </>
  )
}
)
export default Projects