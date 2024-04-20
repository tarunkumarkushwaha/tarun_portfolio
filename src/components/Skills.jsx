import { forwardRef, useContext, useEffect, useState } from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";

const Skills = forwardRef((prop, ref) => {
  const [skillPercent, setskillPercent] = useState(0)
  const { darkmode } = useContext(Context);

  const scrollFill = function () {
    const elementIsInScreen = ref.current.getBoundingClientRect().top < window.innerHeight / 1.15;
    
    if (elementIsInScreen) {
      //  skillPercent(item.percentage)
    //   for (let index = 0; index < portfolioData.skillsSet.length; index++) {
    //     console.log(ref.current.nextSibling.nextSibling.childNodes[index].childNodes[1].childNodes[0]) 
      }
    // }
    //  else {
    // }
  }

  // useEffect(() => {
  //   scrollFill();
  //   window.removeEventListener('scroll', scrollFill);
  //   window.addEventListener('scroll', scrollFill, { passive: true });
  //   return () => window.removeEventListener('scroll', scrollFill);
  // }, []);

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
            <div className="h-2 w-full bg-slate-100">
              <div className={`h-2 ${darkmode ? "bg-blue-500" : "bg-blue-800"}`} style={{ width: item.percentage + '%' }}>
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