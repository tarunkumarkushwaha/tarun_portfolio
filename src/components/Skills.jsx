import { forwardRef } from "react"
import portfolioData from "../data/PortfolioData.js"

const Skills = forwardRef((prop, ref) => {

  return (
    <>
      <div ref={ref}></div>
      <h1 className="text-center text-slate-200 p-10 mt-16 text-3xl">Skills</h1>
      <div className="mx-auto px-4 w-2/3 flex flex-col justify-center items-center">
        {portfolioData.skillsSet.map((item, index) => {
          return <div key={index} className="w-full mb-4">
            <div className="pt-1">
              <span className="pt-4 text-slate-200" style={{ float: "left" }}>{item.name}</span>
              <span className="pt-4 text-slate-200" style={{ float: "right" }}>{item.percentage}%</span></div>
            <div className="h-2 w-full bg-slate-100">
              <div className="h-2 bg-slate-500" style={{ width: item.percentage + '%' }}>
              </div>
            </div>
          </div>
        })}
      </div>
    </>
  )
}
)
export default Skills