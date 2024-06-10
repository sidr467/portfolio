import Image from "next/image"

function Skills() {
  return (
    <div className="flex flex-col gap-8 items-center md:gap-16" id="skills">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        SKILLS
      </h2>
      <div className=" grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-x-12 gap-y-6 md:gap-x-24 md:gap-y-12 flex-wrap">
        <Image src="./js.svg" alt="jsSVG" width={50} height={50}></Image>
        <Image src="./ts.svg" alt="tsSVG" width={50} height={50}></Image>
        <Image src="./react.svg" alt="reactSVG" width={50} height={50}></Image>
        <Image src="./next.svg" alt="nextSVG" width={50} height={50}></Image>
        <Image src="./node.svg" alt="nodeSVG" width={50} height={50}></Image>
        <Image src="./mongo.svg" alt="mongoSVG" width={50} height={50}></Image>
        <Image
          src="./express.svg"
          alt="expressSVG"
          width={50}
          height={50}
        ></Image>
        <Image
          src="./tailwind.svg"
          alt="tailwindSVG"
          width={50}
          height={50}
        ></Image>
        <Image src="./figma.svg" alt="figmaSVG" width={50} height={50}></Image>
        <Image src="./git.svg" alt="gitSVG" width={50} height={50}></Image>
      </div>
    </div>
  )
}

export default Skills
