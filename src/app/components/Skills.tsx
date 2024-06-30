import Image from "next/image"
import { BsFillBootstrapFill } from "react-icons/bs"
import { FaHtml5, FaCss3Alt } from "react-icons/fa"
import { FaNodeJs, FaGitAlt } from "react-icons/fa6"
import { RiNextjsLine } from "react-icons/ri"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si"

// Skill Icons
const skillicons = [
  {
    name: "Javascript",
    svg: <SiJavascript className="w-12 h-12 fill-yellow-400 rounded-sm" />,
  },
  {
    name: "Typescript",
    svg: (
      <SiTypescript className="w-12 h-12 fill-blue-500 bg-white rounded-sm" />
    ),
  },
  {
    name: "React",
    svg: <SiReact className="w-12 h-12 fill-blue-500" />,
  },
  {
    name: "NextJS",
    svg: <RiNextjsLine className="w-12 h-12 fill-current" />,
  },
  {
    name: "NodeJS",
    svg: <FaNodeJs className="w-12 h-12 fill-[#5FA04E]" />,
  },
  {
    name: "MongoDB",
    svg: <SiMongodb className="w-12 h-12 fill-green-800" />,
  },
  {
    name: "ExpressJS",
    svg: (
      <SiExpress className="w-12 h-12 dark:bg-current fill-black p-2 rounded-sm" />
    ),
  },
  {
    name: "Tailwind",
    svg: <SiTailwindcss className="w-12 h-12 fill-[#38BDF8]" />,
  },
  {
    name: "Figma",
    svg: (
      <Image
        src="/figma.svg"
        alt="figmaSVG"
        width={50}
        height={50}
        className="w-12 h-12 object-contain"
      ></Image>
    ),
  },
  {
    name: "Git",
    svg: <FaGitAlt className="w-12 h-12 fill-[#F4511E]" />,
  },
  {
    name: "HTML",
    svg: <FaHtml5 className="w-12 h-12 fill-orange-500" />,
  },
  {
    name: "CSS",
    svg: <FaCss3Alt className="w-12 h-12 fill-blue-500" />,
  },
  {
    name: "Bootstrap",
    svg: <BsFillBootstrapFill className="w-12 h-12 fill-violet-700" />,
  },
]

function Skills() {
  return (
    <div className="flex flex-col gap-8 items-center md:container" id="skills">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        SKILLS
      </h2>
      <div className="mx-auto container p-4">
        <div className=" grid gap-x-4 gap-y-8 justify-center items-center grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
          {skillicons.map((skill: any, index: any) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {skill.svg}
              <p className="text-xs font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
