import { forwardRef, useContext } from "react";
import portfolioData from "../data/PortfolioData.js";
import ProjectCard from "./Projects/ProjectCard.jsx";
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";

const Projects = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);

  useScroll(ref, "smooth-entry", 1);

  const mid = Math.floor(portfolioData.projects.length / 2);
  const featureProjects = portfolioData.projects.slice(0, mid);
  const uiProjects = portfolioData.projects.slice(mid);

  const SectionHeading = ({ children }) => (
    <div className="flex flex-col items-center mb-10 mt-20">
      <h2
        className={`text-2xl md:text-3xl font-bold tracking-tight ${darkmode ? "text-blue-400" : "text-blue-600"}`}
      >
        {children}
      </h2>
      <div className="h-1 w-12 bg-blue-500/30 rounded-full mt-2" />
    </div>
  );

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-20 px-6 min-h-screen"
    >
      <div className="text-center mb-16">
        <h1
          className={`text-4xl md:text-6xl font-black tracking-tighter ${darkmode ? "text-white" : "text-slate-900"}`}
        >
          My Work
        </h1>
        <p
          className={`mt-4 text-lg ${darkmode ? "text-slate-400" : "text-slate-600"}`}
        >
          A collection of projects ranging from Full-stack apps to UI
          experiments.
        </p>
      </div>

      <SectionHeading>Feature Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureProjects.map((item, i) => (
          <ProjectCard key={`feat-${i}`} item={item} />
        ))}
      </div>

      <SectionHeading>User Interface Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {uiProjects.map((item, i) => (
          <ProjectCard key={`ui-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
});

export default Projects;
