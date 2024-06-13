import React from "react"
import Image from "next/image"

function ProjectCard({ title, image, github, live, gitsvg }: any) {
  return (
    <div className="grid gap-4 shadow-sm shadow-slate-600 p-4 rounded-lg">
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className=" object-contain"
        ></Image>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-base md:text-lg font-semibold">{title}</h2>
        <div className="text-sm md:text-base flex gap-2">
          <a href={github} target="blank">
            <button className="dark:bg-white bg-black text-white dark:text-black rounded-md px-2 py-1 font-medium">
              <Image src={gitsvg} alt="gitsvg" height={20} width={20}></Image>
              Github
            </button>
          </a>
          <a href={live} target="blank">
            <button className="dark:bg-white bg-black text-white dark:text-black rounded-md px-2 py-1 font-medium">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
