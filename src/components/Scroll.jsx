import React, { useEffect, useRef, useState,useContext } from 'react'
import { Context } from "../MyContext";

const Scroll = ({home}) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const { darkmode } = useContext(Context);
    const backTopBtn = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const bodyHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollEndPos = bodyHeight - windowHeight;
            const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;
            setScrollPercentage(totalScrollPercent.toFixed(0));
            if (totalScrollPercent > 5) {
                backTopBtn.current.classList.add("show");
            } else {
                backTopBtn.current.classList.remove("show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div onClick={()=>home.current.scrollIntoView()} className={`back-top-btn rounded-xl ${darkmode ? "text-slate-100" :"text-slate-950"}`} aria-label="back to top"
             ref={backTopBtn}>{scrollPercentage}%</div>
        </>
    )
}

export default Scroll