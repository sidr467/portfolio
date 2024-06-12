import React from "react"

function ExperienceCard({ title, company, duration, description }:any) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceCard
