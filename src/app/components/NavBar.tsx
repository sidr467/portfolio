import Image from "next/image"

function NavBar() {
  return (
    <nav className=" ring-1 ring-white my-2 mx-4">
      <div>
        <h1>&lt;Sid/&gt;</h1>
      </div>
      <div>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>
            <Image
              src="./nightmode.svg"
              alt="darkmodeIcon"
              width="20"
              height="20"
            />
          </li>
          <li>
            <button>Download CV</button>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  )
}

export default NavBar
