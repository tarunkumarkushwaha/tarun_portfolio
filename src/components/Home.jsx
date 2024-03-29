import { forwardRef } from "react"
import portfolioData from "../data/PortfolioData.js"
const Home = forwardRef((prop, ref) => {
  return (
    <>
      <div ref={ref} className="intro-bg mb-24">
        <div className="intro-wrapper bg-contain">
          <h1 className="text-4xl font-medium p-4">Hi I am <strong><span className="text-4xl font-medium">{portfolioData.name}</span></strong>
          </h1>
          <p className="text-4xl font-medium p-4">Front-End Developer</p>
        </div>
      </div>
    </>
  )
}
)
export default Home