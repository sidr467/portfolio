import Image from "next/image"

function Skills() {
  return (
    <div className="flex flex-col gap-8 items-center md:container" id="skills">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        SKILLS
      </h2>
      <div className="mx-auto container p-4">
        <div className=" grid gap-x-4 gap-y-8 justify-center items-center grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/js.svg"
              alt="jsSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Javascript</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/ts.svg"
              alt="tsSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Typescript</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/react.svg"
              alt="reactSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">React</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/next.svg"
              alt="nextSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Next.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/node.svg"
              alt="nodeSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Node.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/mongo.svg"
              alt="mongoSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">MongoDB</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/express.svg"
              alt="expressSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain  dark:bg-white px-2 py-1 rounded-md"
            ></Image>
            <p className="text-xs font-semibold">ExpressJS</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/tailwind.svg"
              alt="tailwindSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Tailwind</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/figma.svg"
              alt="figmaSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Figma</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/git.svg"
              alt="gitSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Git</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/html.png"
              alt="gitSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/css.png"
              alt="gitSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/bootstrap.png"
              alt="gitSVG"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            ></Image>
            <p className="text-xs font-semibold">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
