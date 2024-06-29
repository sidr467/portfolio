import Link from "next/link"
import { IoMail } from "react-icons/io5"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Footer() {
  return (
    <div className="flex flex-col gap-8 items-center mb-1 container">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        Get in touch
      </h2>
      <p className="text-xs md:text-sm mx-auto">
        What&apos;s next? Feel free to reach out to me if you&apos;re looking
        for a developer, have a query, or simply want to connect.
      </p>
      <Link
        href="mailto:rsiddharth467@gmail.com"
        className=" text-base md:text-xl flex items-center justify-center gap-4 cursor-pointer hover:underline"
      >
        <IoMail size={22} />
        <h2>rsiddharth467@gmai.com</h2>
      </Link>
      <footer className=" text-[10px] flex gap-2 items-center">
        <AiOutlineCopyrightCircle size={14} />
        <p>
          Designed and coded by{" "}
          <Link
            href="https://github.com/sidr467"
            className="cursor-pointer hover:underline"
          >
            Siddharth Rathod
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Footer
