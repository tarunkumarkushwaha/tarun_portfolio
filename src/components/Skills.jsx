const Skills = () => {
  const skillsSet = [
  {
    "enabled": true,
    "name": "Figma",
    "sequence": 15,
    "percentage": 95
  },
  {
    "enabled": true,
    "name": "Node.js",
    "sequence": 7,
    "percentage": 92
  },
  {
    "enabled": true,
    "name": "MongoDB",
    "sequence": 13,
    "percentage": 70
  },
  {
    "enabled": true,
    "name": "Redux",
    "sequence": 7,
    "percentage": 95
  },
  {
    "enabled": true,
    "name": "Javascript",
    "sequence": 3,
    "percentage": 95
  },
  {
    "enabled": true,
    "name": "Git",
    "sequence": 5,
    "percentage": 95
  },
  {
    "enabled": true,
    "name": "Github",
    "sequence": 11,
    "percentage": 95
  },
  {
    "enabled": true,
    "name": "Next.js",
    "sequence": 6,
    "percentage": 90
  },
  {
    "enabled": true,
    "name": "React",
    "sequence": 5,
    "percentage": 90
  },
  {
    "enabled": true,
    "name": "Tailwind",
    "sequence": 4,
    "percentage": 99
  },
  {
    "enabled": true,
    "name": "CSS",
    "sequence": 2,
    "percentage": 97
  },
  {
    "name": "HTML",
    "sequence": 1,
    "percentage": 98
  }
  ]
  return (
    <>
      <h1 className="text-xl">Skills</h1>
      <div className="progress-container">
        {skillsSet.map((item, index) => {return <div key={index} className="progress-wrap">
            <div><span style={{ float: "left" }}>{item.name}</span><span style={{ float: "right" }}>{item.percentage}%</span></div>
            <div className="progress">
              <div className="progress-bar" style={{ width: item.percentage + '%' }}>
              </div>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Skills