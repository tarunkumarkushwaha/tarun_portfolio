import { useContext} from "react"
import portfolioData from "../data/PortfolioData.js"
import { Context } from "../MyContext";

const Foot = () => {
  const { darkmode} = useContext(Context);
  return (
    <>
      <div className={`"text-center ${darkmode ? "bg-blue-950 text-slate-100" : "bg-blue-300 text-slate-900"} font-light"`}>
        &copy; 2024 {portfolioData.name}
      </div>
    </>
  )
}

export default Foot