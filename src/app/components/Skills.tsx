import { skillicons } from "./skillicons"

function Skills() {
  return (
    <div className="flex flex-col gap-8 items-center md:container" id="skills">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        SKILLS
      </h2>
      <div className="mx-auto container p-4">
        <div className=" grid gap-x-4 gap-y-8 justify-center items-center grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
          {skillicons.map((skill: any, index: any) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {skill.svg}
              <p className="text-xs font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
