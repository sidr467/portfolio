"use client"

import Link from "next/link"
import Menu from "./Menu"
import { ModeToggle } from "@/components/toogle"
import {navLinks} from "./NavLinks"

function NavBar() {
  const navScroll = (e: any, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="h-20 md:px-4 lg:px-8 xl:px-16 2xl:px-32 md:container  ">
      {/* MObile */}
      <div className=" h-full md:hidden flex justify-between items-center relative px-4 py-2 ">
        <h1 className=" text-xl font-bold tracking-wider">
          <Link href="/">&lt;Sid/&gt;</Link>
        </h1>
        <Menu />
      </div>
      {/* biggerScreen */}
      <div className="hidden md:flex h-full justify-between items-center">
        {/* titleLogo */}
        <div>
          <h1 className=" text-3xl font-extrabold tracking-wider">
            <Link href="/">&lt;Sid/&gt;</Link>
          </h1>
        </div>
        {/* NavLinks */}
        <div className="flex gap-6 items-center">
          {navLinks.map((data:any, index:any) => (
            <Link
              key={index}
              href={`#${data.href}`}
              className=" hover:border-b-2 border-black dark:border-white"
              onClick={(e) => navScroll(e, `${data.href}`)}
            >
              {data.name}
            </Link>
          ))}
          <ModeToggle></ModeToggle>
          <a href="./resume.pdf" download>
            <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-semibold">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
