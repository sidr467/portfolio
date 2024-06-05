import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

function NavBar() {
  return (
    <nav className="h-20 ring-1 border-b-white px-4 py-2 border-b-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
      {/* MObile */}
      <div className=" h-full md:hidden flex justify-between items-center relative ">
        <h1 className=" text-xl font-bold tracking-wider">
          <Link href="/">&lt;Sid/&gt;</Link>
        </h1>
        <Menu />
      </div>
      {/* biggerScreen */}
      <div className="hidden md:flex  h-full justify-between items-center">
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
      </div>
    </nav>
  )
}

export default NavBar
