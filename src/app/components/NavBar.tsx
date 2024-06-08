import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import { ModeToggle } from "@/components/toogle"

function NavBar() {
  return (
    <nav className="h-20 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
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
          <h1 className=" text-3xl font-bold tracking-wider">
            <Link href="/">&lt;Sid/&gt;</Link>
          </h1>
        </div>
        {/* NavLinks */}
        <div className="flex gap-6 items-center">
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
          <ModeToggle></ModeToggle>
          <a href="./resume.pdf" download>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
