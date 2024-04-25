import { forwardRef} from "react"
import portfolioData from "../data/PortfolioData.js"
import TypewriterEffect from "./TypewriterEffect.jsx";

const Home = forwardRef((prop, ref) => {

  return (
    <>
      <div ref={ref} >
        <div className="md:p-[250px] p-0 md:py-64 py-52">
          <h1 className="sm:text-4xl text-xl font-medium p-4">Hi I am <strong><span className="sm:text-4xl text-xl font-medium">{portfolioData.name}</span></strong>
          </h1>
          <p className="sm:text-4xl text-xl h-2 font-medium p-4"><TypewriterEffect text={"Front-End-Developer"} delay={300}/></p>
        </div>
      </div>
    </>
  )
}
)
export default Home