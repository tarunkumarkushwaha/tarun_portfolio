import portfolioData from "../data/PortfolioData.js"
const Foot = () => {
  return (
    <>
      <div className="text-center bg-blue-950 text-slate-100 font-light">
        &copy; 2024 {portfolioData.name}
      </div>
    </>
  )
}

export default Foot