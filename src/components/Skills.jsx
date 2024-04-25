import { forwardRef, useContext, useEffect, useState } from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";
import useElementIsVisible from "../customhooks/useElementIsVisible.js";

const Skills = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  let position = useElementIsVisible(ref)

  useEffect(() => {
    if (position) {
      for (let index = 0; index < portfolioData.skillsSet.length; index++) {
        let targetWidth = portfolioData.skillsSet[index].percentage
        let progressWidth = 0
        const intervalId = setInterval(() => {
          progressWidth = progressWidth + 1
          if (progressWidth >= targetWidth) clearInterval(intervalId);
          ref.current.nextSibling.nextSibling.childNodes[index].childNodes[1].childNodes[0].style.width = progressWidth + "%"
        }, 25);
      }
    }
  }, [position]);

  return (
    <>
      <div ref={ref}></div>
      <h1 className={`text-slate-200 mt-16 p-10 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-center`}>Skills</h1>
      <div className="mx-auto px-4 w-2/3 flex flex-col justify-center items-center">
        {portfolioData.skillsSet.map((item, index) => {
          return <div key={index} className="w-full mb-4">
            <div className="pt-1">
              <span className={`text-slate-200 pt-4`} style={{ float: "left" }}>{item.name}</span>
              <span className={`text-slate-200 pt-4`} style={{ float: "right" }}>{item.percentage}%</span></div>
            <div className="h-2 w-full rounded-md bg-slate-100 border border-black">
              <div className={`h-[6px] rounded-md ${darkmode ? "bg-blue-500" : "bg-blue-800"}`} >
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