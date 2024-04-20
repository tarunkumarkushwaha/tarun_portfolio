import { useContext} from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";

const Foot = () => {
  const { darkmode} = useContext(Context);
  return (
    <>
      <div className={` ${darkmode ? "bg-blue-950 text-slate-100" : "bg-blue-300 text-slate-900"}`}>
        <p className="text-center font-extralight">&copy; 2024 {portfolioData.name}</p>
      </div>
    </>
  )
}

export default Foot