import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

const Icons = [
  {
    icon: <FaGithub size="22px" />,
    href: "https://github.com/sidr467",
  },
  {
    icon: <FaLinkedin size="22px" />,
    href: "https://www.linkedin.com/in/siddharth-rathod-6524b926b/",
  },
  {
    icon: <IoMdMail size="22px" />,
    href: "mailto:rsiddharth467@gmail.com",
  },
]

function Profile() {
  return (
    <div className="flex flex-col items-center container mx-auto gap-8 md:grid grid-cols-2 ">
      {/* Image Section */}
      <div className=" w-full md:order-2 ">
        <Image
          src="/image.png"
          alt="Profile Image"
          width={250}
          height={200}
          className="w-40 sm:w-52 md:w-60 bg-white object-cover rounded-lg mx-auto shadow-2xl shadow-black  "
          priority
        />
      </div>
      {/* Text section */}
      <div className="flex flex-col items-center gap-6  ">
        <h1 className=" text-base md:text-lg lg:text-xl">
          Hi, I&apos;m <strong className="font-bold">Siddharth Rathod</strong>
        </h1>
        <div className=" w-48 h-12 relative overflow-hidden">
          <div className="absolute w-full h-full flex flex-col text-2xl md:text-4xl font-semibold scroll-container">
            <div className="flex items-center mx-auto  h-full py-1">
              Designer
            </div>
            <div className="flex items-center mx-auto h-full py-1">
              Developer
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          {Icons.map((data, index) => (
            <Link
              target="blank"
              key={index}
              href={data.href}
              className="ring-black ring-1 text-center px-6 py-2 rounded-full  dark:ring-white hover:scale-105 hover:ring-2"
            >
              {data.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
