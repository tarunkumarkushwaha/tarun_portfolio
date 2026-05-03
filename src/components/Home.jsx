import { forwardRef } from "react";
import portfolioData from "../data/PortfolioData.js";
import TypewriterEffect from "./TypewriterEffect.jsx";

const Home = forwardRef((prop, ref) => {
  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="container mx-auto px-16 relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {portfolioData.name}
            </span>
          </h1>

          <div className="min-h-[40px] flex items-center">
            <h2 className="text-2xl md:text-4xl font-light ">
              I build{" "}
              <TypewriterEffect text={portfolioData.profession} delay={150} />
            </h2>
          </div>

          <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed border-l-2 border-slate-800 pl-6">
            {portfolioData.intro}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Home;
