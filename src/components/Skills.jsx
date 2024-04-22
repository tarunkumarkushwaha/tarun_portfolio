import { forwardRef, useContext, useEffect, useState } from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";

const Skills = forwardRef((prop, ref) => {
  const [position, setposition] = useState(false)
  const { darkmode } = useContext(Context);

  const scrollFill = function () {
    let currentposition = ref.current.getBoundingClientRect().top
    setposition(currentposition < window.innerHeight / 1.15 && currentposition + window.innerHeight > 0)
  }

  useEffect(() => {
    scrollFill();
    window.removeEventListener('scroll', scrollFill);
    window.addEventListener('scroll', scrollFill, { passive: true });
    return () => window.removeEventListener('scroll', scrollFill);
  }, []);

  useEffect(() => {
    if (position) {
      for (let index = 0; index < portfolioData.skillsSet.length; index++) {
        let targetWidth = portfolioData.skillsSet[index].percentage
        let progressWidth = 0
        const intervalId = setInterval(() => {
          progressWidth = progressWidth + 1
          if (progressWidth >= targetWidth) clearInterval(intervalId);
          ref.current.nextSibling.nextSibling.childNodes[index].childNodes[1].childNodes[0].style.width = progressWidth + "%"
          // console.log(progressWidth,portfolioData.skillsSet[index].name)
        }, 25);
      }
    }
  }, [position]);

  return (
    <>
      <div ref={ref}></div>
      <h1 className={` ${darkmode ? "text-slate-200" : "text-slate-800"} mt-16 p-10 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-center`}>Skills</h1>
      <div className="mx-auto px-4 w-2/3 flex flex-col justify-center items-center">
        {portfolioData.skillsSet.map((item, index) => {
          return <div key={index} className="w-full mb-4">
            <div className="pt-1">
              <span className={`${darkmode ? "text-slate-200" : "text-slate-800"} pt-4`} style={{ float: "left" }}>{item.name}</span>
              <span className={`${darkmode ? "text-slate-200" : "text-slate-800"} pt-4`} style={{ float: "right" }}>{item.percentage}%</span></div>
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