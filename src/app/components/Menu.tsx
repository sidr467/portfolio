"use client"

import { ModeToggle } from "@/components/toogle"
import { useState } from "react"
import Link from "next/link"
import { navLinks } from "./NavLinks"
import { GiHamburgerMenu } from "react-icons/gi"

function Menu() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
    document.body.style.overflow = open ? "auto" : "hidden"
  }

  const closeMenu = (e: any, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div>
      <GiHamburgerMenu onClick={toggleMenu} size={20} />
      {open && (
        <div className=" absolute bg-gray-500  dark:bg-gray-900 left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center gap-8 z-10 text-md pt-10">
          {navLinks.map((data: any, index: any) => (
            <Link
              key={index}
              href={`#${data.href}`}
              className=" hover:border-b-2 text-black dark:text-white  border-black  dark:border-white"
              onClick={(e) => closeMenu(e, `${data.href}`)}
            >
              {data.name}
            </Link>
          ))}
          <ModeToggle></ModeToggle>
          <Link href="./resume.pdf" download target="blank">
            <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-lg font-semibold">
              Resume
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Menu
