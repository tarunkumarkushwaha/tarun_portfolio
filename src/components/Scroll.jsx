import React, { useEffect, useRef, useState, useContext } from 'react';
import { Context } from "../MyContext";

const Scroll = ({ home }) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const { darkmode } = useContext(Context);
    const backTopBtn = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const bodyHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollEndPos = bodyHeight - windowHeight;
            const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;
            
            setScrollPercentage(Math.min(100, Math.max(0, totalScrollPercent.toFixed(0))));

            if (totalScrollPercent > 5) {
                backTopBtn.current.style.opacity = "1";
                backTopBtn.current.style.transform = "translateY(0)";
            } else {
                backTopBtn.current.style.opacity = "0";
                backTopBtn.current.style.transform = "translateY(20px)";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollPercentage / 100) * circumference;

    return (
        <div 
            ref={backTopBtn}
            onClick={() => home.current.scrollIntoView({ behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 z-50 cursor-pointer transition-all duration-300 ease-in-out`}
            style={{ opacity: 0, transform: "translateY(20px)" }}
        >
            <div className="relative flex items-center justify-center group">
   
                <svg className="w-14 h-14 transform -rotate-90">
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className={`${darkmode ? "text-slate-800" : "text-slate-200"}`}
                    />
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        style={{ strokeDashoffset: offset, transition: "stroke-dashoffset 0.1s" }}
                        className="text-blue-500"
                    />
                </svg>

                <span className={`absolute text-[10px] font-black tracking-tighter ${darkmode ? "text-white" : "text-slate-900"}`}>
                    {scrollPercentage}%
                </span>

                <div className="absolute animate-bounce -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase">
                    Top
                </div>
            </div>
        </div>
    );
}

export default Scroll;