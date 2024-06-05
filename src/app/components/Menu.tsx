"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Image
        src="./hamburger.svg"
        alt="hamburgerIcon"
        width="24"
        height={24}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className=" absolute bg-gray-900 left-0 top-20 h-[calc(100vh-80x)]">
          <Link href="/">About</Link>
          <Link href="/">Skills</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Projects</Link>{" "}
        </div>
      )}
    </div>
  )
}

export default Menu
