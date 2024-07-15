import Link from "next/link"
import { IoMdCodeDownload } from "react-icons/io"

const ResumeButton = () => {
  return (
    <div>
      <Link href="/Siddharth-Rathod.pdf" download target="blank">
        <button className="bg-black dark:bg-white dark:text-black text-white flex items-center gap-2 px-4 py-1 rounded-lg">
          <div>
            <IoMdCodeDownload size={25} className="mt-[0.1rem]" />
          </div>
          <span className="uppercase tracking-wider font-bold">Resume</span>
        </button>
      </Link>
    </div>
  )
}

export default ResumeButton
