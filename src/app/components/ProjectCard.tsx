import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import { MdArrowOutward } from "react-icons/md"

function ProjectCard({ title, image, github, live }: any) {
  return (
    <div className="grid gap-4 shadow-sm shadow-slate-600 p-4 rounded-lg">
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover rounded-sm hover:scale-105 duration-500 "
        ></Image>
      </div>
      <div className="flex flex-col gap-4  justify-center items-center">
        <h2 className="text-base md:text-lg font-bold">{title}</h2>
        <div className="text-sm md:text-base flex gap-2">
          <Link href={github} target="blank">
            <button className="dark:bg-white bg-black text-white dark:text-black rounded-md px-2 py-1 font-medium flex gap-4 items-center">
              <FiGithub size={20} />
              <span>Github</span>
            </button>
          </Link>
          <Link href={live} target="blank">
            <button className="dark:bg-white bg-black text-white dark:text-black rounded-md px-2 py-1 font-medium flex gap-4 items-center">
              <MdArrowOutward size={20} />
              <span>Live</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
