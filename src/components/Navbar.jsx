import { useContext, useEffect, useState } from "react";
import { Context } from "../MyContext";
import { DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import useElementIsVisible from "../customhooks/useElementIsVisible";
import portfolioData from "../data/PortfolioData";

const Navbar = ({ skills, home, about, contact, projects }) => {
  const { darkmode, setDarkmode } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: "Home", ref: home, active: useElementIsVisible(home) },
    { name: "About", ref: about, active: useElementIsVisible(about) },
    { name: "Projects", ref: projects, active: useElementIsVisible(projects) },
    { name: "Skills", ref: skills, active: useElementIsVisible(skills) },
    { name: "Contact", ref: contact, active: useElementIsVisible(contact) },
  ];

    const handleDownload = () => {
    const fileUrl = "https://drive.google.com/file/d/1i6pStZ_srxktQzNP6jzkn01sLQ56iDa9/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navName = portfolioData?.name?.split(" ")[0] || "DEVELOPER";
  // console.log(useElementIsVisible(projects))

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-[100] px-4">
      <nav
        className={`
          relative flex items-center justify-between p-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          rounded-3xl border backdrop-blur-xl shadow-2xl
          ${scrolled ? "max-w-[550px] px-4 md:px-6" : "max-w-7xl w-full px-6 md:px-8"}
          ${
            darkmode
              ? "bg-slate-900/80 border-white/10 shadow-blue-500/10"
              : "bg-white/80 border-slate-200 shadow-slate-400/20"
          }
        `}
      >
        <div
          onClick={() => scrollTo(home)}
          className={`font-black tracking-tighter cursor-pointer transition-all duration-500 flex items-center
            ${scrolled ? "w-0 opacity-0 -translate-x-10 invisible" : "w-auto opacity-100 translate-x-0 mr-4 md:text-xl text-xl"}
            ${darkmode ? "text-white" : "text-slate-900"}`}
        >
          {navName}
          <span className="text-blue-500 ml-1"> portfolio </span>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => scrollTo(section.ref)}
              className={`
                relative px-2 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300
                ${
                  section.active
                    ? "text-blue-500 scale-125"
                    : darkmode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-500 hover:text-blue-600"
                }
              `}
            >
              <span className="relative z-10">{section.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkmode(!darkmode)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white hover:scale-110 transition-all shadow-lg active:scale-95"
          >
            {darkmode ? (
              <DarkMode fontSize="small" />
            ) : (
              <LightMode fontSize="small" />
            )}
          </button>

          {!scrolled && (
            <a
              href="https://github.com/tarunkumarkushwaha"
              target="_blank"
              className={`hidden md:block p-2 rounded-lg transition-colors ${darkmode ? "hover:bg-white/10" : "hover:bg-slate-200"}`}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {!scrolled && (
            <button
              onClick={handleDownload}
              className={`
    relative hidden md:block px-3 py-2 text-xs font-bold uppercase tracking-widest group transition-all duration-300
    ${ darkmode
          ? "text-slate-400 hover:text-white"
          : "text-slate-500 hover:text-blue-600 hover:scale-125"
    }
  `}
            >
              <span className="relative z-10">Resume</span>
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-2xl transition-colors
              ${darkmode ? "bg-white/5 text-white" : "bg-slate-100 text-slate-900"}`}
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>

        <div
          className={`
          absolute top-[110%] left-0 w-full p-4 rounded-3xl border backdrop-blur-2xl transition-all duration-500
          md:hidden flex flex-col gap-2
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
          ${darkmode ? "bg-slate-900/95 border-white/10 shadow-2xl" : "bg-white/95 border-slate-200 shadow-xl"}
        `}
        >
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => scrollTo(section.ref)}
              className={`
    relative px-3 py-2 text-xs font-bold uppercase tracking-widest group transition-all duration-300
    ${
      section.active
        ? "text-blue-500 scale-125"
        : darkmode
          ? "text-slate-400 hover:text-white"
          : "text-slate-500 hover:text-blue-600 hover:scale-125"
    }
  `}
            >
              <span className="relative z-10">{section.name}</span>

              
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
