import { forwardRef, useContext } from "react";
import portfolioData from "../data/PortfolioData.js";
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";

const About = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  useScroll(ref, "left-side-entry", 3);

  return (
    <div
      ref={ref}
      className="relative min-h-[60vh] flex flex-col items-center justify-center py-2 overflow-hidden"
    >
      {/* Section Title */}
      <div className="mb-12 flex flex-col items-center">
        <h2
          className={`text-3xl md:text-5xl font-black tracking-tighter mb-2 ${darkmode ? "text-white" : "text-slate-900"}`}
        >
          About Me
        </h2>
        <div className="h-1.5 w-20 bg-blue-500 rounded-full" />
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div
          className={`relative group p-8 md:p-12 rounded-3xl border transition-all duration-500 max-w-3xl
          ${
            darkmode
              ? "bg-slate-900/40 border-white/10 shadow-2xl shadow-blue-900/20"
              : "bg-white/60 border-slate-200 shadow-xl shadow-slate-200/50"
          } 
          backdrop-blur-xl`}
        >
          <span className="absolute -top-6 -left-4 text-8xl text-blue-500/20 font-serif select-none">
            “
          </span>

          <p
            className={`text-lg md:text-xl leading-relaxed text-center lg:text-left
            ${darkmode ? "text-slate-300" : "text-slate-700"}`}
          >
            {portfolioData.aboutme}
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-slate-500/20">
            <div className="flex flex-col">
              <span className="text-blue-500 font-bold text-2xl">3+</span>
              <span
                className={`text-xs uppercase tracking-widest font-semibold ${darkmode ? "text-slate-500" : "text-slate-400"}`}
              >
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold text-2xl">15+</span>
              <span
                className={`text-xs uppercase tracking-widest font-semibold ${darkmode ? "text-slate-500" : "text-slate-400"}`}
              >
                Projects Built
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-purple-500 font-bold text-2xl">8y</span>
              <span
                className={`text-xs uppercase tracking-widest font-semibold ${darkmode ? "text-slate-500" : "text-slate-400"}`}
              >
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
