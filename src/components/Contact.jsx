import { forwardRef, useContext } from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";
import useScroll from "../customhooks/useScroll.js";

const Contact = forwardRef((prop, ref) => {
  const { darkmode } = useContext(Context);
  useScroll(ref, "smooth-entry", 3)
  return (
    <>
      <div ref={ref} className="text-slate-100 p-[7%]">
        <h1 className={` text-slate-200 mt-16 p-10 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-center`}>Contact</h1>
        <div className="flex flex-col justify-center items-center">
          <h1 className={`text-slate-200 sm:text-2xl text-sm font-medium p-3`}>feel free to contact me</h1>
          <p className={`text-slate-200 sm:text-2xl text-sm p-3`}>{portfolioData.contact.email}</p>
          <p className={`text-slate-200 sm:text-2xl text-sm p-3`}>mobile - {portfolioData.contact.phone}</p>
        </div>
      </div>
    </>
  )
}
)
export default Contact