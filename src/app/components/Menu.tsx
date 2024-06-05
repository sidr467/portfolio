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
        <div className=" absolute bg-gray-900 left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-start gap-8 z-10 text-md pt-10">
          <Link href="/" className=" hover:border-b-2 border-white">
            About
          </Link>
          <Link href="/" className=" hover:border-b-2 border-white">
            Skills
          </Link>
          <Link href="/" className=" hover:border-b-2 border-white">
            Experience
          </Link>
          <Link href="/" className=" hover:border-b-2 border-white">
            Projects
          </Link>{" "}
          <button className="hover:ring-2 ring-white rounded-full p-2">
            <Image
              src="./nightmode.svg"
              alt="nightmodeIcon"
              width={24}
              height={24}
            ></Image>
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
            Download CV
          </button>
        </div>
      )}
    </div>
  )
}

export default Menu
