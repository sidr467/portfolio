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

export const skillicons = [
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
