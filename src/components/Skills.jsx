import { forwardRef, useContext } from "react";
import portfolioData from "../data/PortfolioData.js";
import { Context } from "../MyContext";
import useElementIsVisible from "../customhooks/useElementIsVisible.js";

const Skills = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  const isVisible = useElementIsVisible(ref);

  return (
    <section ref={ref} className="py-20 px-6">

      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-black tracking-tighter mb-2 ${darkmode ? "text-white" : "text-slate-900"}`}>
          Technical Proficiency
        </h2>
        <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {portfolioData.skillsSet.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-end mb-2">
              <span className={`font-bold tracking-tight ${darkmode ? "text-slate-200" : "text-slate-700"}`}>
                {item.name}
              </span>
              <span className="text-sm font-mono text-blue-500 font-bold">
                {item.percentage}%
              </span>
            </div>
            

            <div className={`h-3 w-full rounded-full overflow-hidden border ${darkmode ? "bg-slate-800 border-white/5" : "bg-slate-100 border-slate-200"}`}>
  
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${darkmode ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-blue-600"}`}
                style={{ 
                  width: isVisible ? `${item.percentage}%` : "0%" 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;