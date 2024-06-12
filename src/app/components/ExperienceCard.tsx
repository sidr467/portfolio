import React from "react"

function ExperienceCard({ title, company, duration, description }: any) {
  return (
    <div className="shadow-md p-4 dark:shadow-slate-900 rounded-lg w-full grid gap-4">
      <div>
        <h3 className="text-lg md:text-xl  font-semibold">{title}</h3>
        <h4 className="text-base md:text-lg  text-gray-600 dark:text-gray-400">
          {company}
        </h4>
        <p className="text-xs md:text-sm  text-gray-500 dark:text-gray-300">
          {duration}
        </p>
      </div>
      <p className="text-sm md:text-base  text-gray-700 dark:text-gray-500">
        {description}
      </p>
    </div>
  )
}

export default ExperienceCard
