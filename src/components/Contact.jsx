import { forwardRef } from "react"
import portfolioData from "../data/PortfolioData.js"

const Contact = forwardRef((prop, ref) => {
  return (
    <>
      <div ref={ref} className="text-slate-100">
        <h1 className="text-center text-slate-200 p-10 text-3xl">contact</h1>
        <h1 className="text-center text-slate-300 p-3 text-xl">feel free to contact me</h1>
        <p className="text-center p-3">{portfolioData.contact.email}</p>
        <p className="text-center p-3">mobile - {portfolioData.contact.phone}</p>
      </div>
    </>
  )
}
)
export default Contact