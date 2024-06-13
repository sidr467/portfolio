import React from "react"
import Image from "next/image"

function ProjectCard({ title, image, github, live }: any) {
  return (
    <div>
      <div>
        <Image src={image} alt={title}></Image>
      </div>
      <div>
        <h2>{title}</h2>
        <div>
          <a href={github} target="blank">
            <button>Github</button>
          </a>
          <a href={live} target="blank">
            <button>Live</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
