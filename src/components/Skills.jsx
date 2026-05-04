import { forwardRef, useContext } from "react";
import { Context } from "../MyContext";
import portfolioData from "../data/PortfolioData.js";
import useElementIsVisible from "../customhooks/useElementIsVisible.js";
// Icons to make categories pop
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BuildIcon from '@mui/icons-material/Build';

const Skills = forwardRef((props, ref) => {
  const { darkmode } = useContext(Context);
  const isVisible = useElementIsVisible(ref);

  const categories = [
    { title: "Frontend", key: "frontend", color: "from-blue-500 to-cyan-400", icon: <TerminalIcon /> },
    { title: "Backend", key: "backend", color: "from-emerald-500 to-teal-400", icon: <StorageIcon /> },
    { title: "Mobile", key: "mobile", color: "from-purple-500 to-pink-400", icon: <SmartphoneIcon /> },
    { title: "Tools", key: "tools", color: "from-orange-500 to-yellow-400", icon: <BuildIcon /> },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20 pointer-events-none ${darkmode ? 'bg-blue-600' : 'bg-blue-200'}`} />

      <div className="text-center mb-20 relative z-10">
        <h2 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${darkmode ? "text-white" : "text-slate-900"}`}>
          Tech Stack
        </h2>
        {/* <p className={`max-w-2xl mx-auto ${darkmode ? "text-slate-400" : "text-slate-500"} text-lg`}>
          I've spent 2000 years honing my skills across these core technologies to build robust, modern products.
        </p> */}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {categories.map((category, index) => (
          <div
            key={category.key}
            className={`
              group p-8 rounded-[2rem] border transition-all duration-700
              ${darkmode 
                ? "bg-slate-900/50 border-white/10 hover:border-white/20 shadow-2xl" 
                : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"}
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
              hover:-translate-y-3
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-lg shadow-inherit`}>
              {category.icon}
            </div>
            
            <h3 className={`font-black text-2xl mb-6 tracking-tight ${darkmode ? "text-white" : "text-slate-800"}`}>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {portfolioData.skillsSet[category.key]?.map((skill) => (
                <span
                  key={skill}
                  className={`
                    px-4 py-1.5 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-300
                    ${darkmode 
                      ? "bg-slate-800 text-slate-300 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400" 
                      : "bg-slate-50 text-slate-600 border border-slate-100 group-hover:border-blue-200 group-hover:text-blue-600"}
                  `}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${category.color}`} />
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;