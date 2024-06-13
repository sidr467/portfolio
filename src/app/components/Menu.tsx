"use client"

import { ModeToggle } from "@/components/toogle"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {/* <Image
        src="./hamburger.svg"
        alt="hamburgerIcon"
        width="24"
        height={24}
        className="cursor-pointer fill-current "
        onClick={() => setOpen((prev) => !prev)}
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className=" fill-current cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      {open && (
        <div className=" absolute bg-gray-500  dark:bg-gray-900  left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-start gap-8 z-10 text-md pt-10">
          <Link
            href="#about"
            className=" hover:border-b-2 text-black dark:text-white  border-black  dark:border-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className=" hover:border-b-2 text-black dark:text-white  border-black  dark:border-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className=" hover:border-b-2 text-black dark:text-white  border-black  dark:border-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className=" hover:border-b-2 text-black dark:text-white  border-black  dark:border-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            Projects
          </Link>{" "}
          <ModeToggle></ModeToggle>
          <a href="./resume.pdf" download>
            <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-lg font-semibold">
              Download CV
            </button>
          </a>
        </div>
      )}
    </div>
  )
}

export default Menu
