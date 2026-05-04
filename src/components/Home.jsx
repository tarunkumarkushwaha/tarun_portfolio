import { forwardRef,useContext } from "react";
import portfolioData from "../data/PortfolioData.js";
import TypewriterEffect from "./TypewriterEffect.jsx";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Shop2Icon from "@mui/icons-material/Shop2";
import DevicesIcon from "@mui/icons-material/Devices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Context } from "../MyContext";

const Home = forwardRef((prop, ref) => {
    const { darkmode } = useContext(Context);
  // console.log(prop)
  return (
    <div
      ref={ref}
      className="relative animate-fadeInUp min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-16 relative z-10">
        <div className="max-w-7xl">
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-3">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {portfolioData.name}
            </span>
          </h1>

          <div className="min-h-[40px] flex items-center">
            <h2 className="text-2xl md:text-4xl font-light ">
              {" "}
              <TypewriterEffect text={portfolioData.profession} delay={150} />
            </h2>
          </div>

          <p className="mt-6 zoom text-lg md:text-xl max-w-4xl leading-relaxed border-l-2 border-slate-800 pl-6">
            {portfolioData.intro}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-105 ${darkmode ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
            >
              <RocketLaunchIcon className="text-blue-500" fontSize="small" />
              <span className="text-xs md:text-sm font-bold tracking-wide">
                5+ Projects Built
              </span>
            </div>

            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-105 ${darkmode ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
            >
              <Shop2Icon className="text-orange-500" fontSize="small" />
              <span className="text-xs md:text-sm font-bold tracking-wide">
                Apps on Amazon Appstore
              </span>
            </div>

            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-105 ${darkmode ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
            >
              <DevicesIcon className="text-emerald-500" fontSize="small" />
              <span className="text-xs md:text-sm font-bold tracking-wide">
                Web + Mobile + Extensions
              </span>
            </div>

            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-105 ${darkmode ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
            >
              <PsychologyIcon className="text-purple-500" fontSize="small" />
              <span className="text-xs md:text-sm font-bold tracking-wide">
                AI-powered Features
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                prop.projects.current.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md 
              hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              View Projects
            </button>

            <a
              href={portfolioData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl 
              hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
