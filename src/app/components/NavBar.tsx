import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

function NavBar() {
  return (
    <nav className=" h-20 ring-1 ring-white">
      {/* MObile */}
      <div className=" h-full md:hidden flex justify-between items-center relative px-4 py-2">
        <h1>
          <Link href="/">&lt;Sid/&gt;</Link>
        </h1>
        <Menu />
      </div>
      {/* biggerScreen */}
    </nav>
  )
}

export default NavBar
