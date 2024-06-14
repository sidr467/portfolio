import React from "react"
import ExperienceCard from "./ExperienceCard"
import { title } from "process"

function Experience() {
  const experiences = [
    {
      title: "Web development Instructor",
      company: "Anik Software Technologies",
      duration: "Jan 2023 - Present",
      description:
        "Provided engaging and informative lessons on HTML, CSS, JavaScript, and Bootstrap to students at various skill levels. Managed and curated content for social media channels to enhance visibility andengagement.Fostered a vibrant community by encouraging interaction and participation amongstudents.Promoted educational resources effectively through strategic use of social media and other channels.",
    },
    {
      title: "Intern in Python with Django",
      company: "BrainyBeam Technologies",
      duration: "Jan 2022 - Apri 2022",
      description:
        "Developed a location-based vehicle service platform using Python with Django. Streamlined vehicle service requests by connecting users with nearby service providers through location-based services. Enhanced user experience with features for real-time tracking and efficient service request management.",
    },
    {
      title: "Web Development Intern",
      company: "Infolabz",
      duration: "May 2021 - June 2021 ",
      description:
        "The whole training was focused on HTML and PHP for creating web pages. In a training program I have gotten a comprehensive overview of web development principles and practical exposure to real-time API handling.",
    },
  ]

  return (
    <div className="flex flex-col gap-8 items-center" id="experience">
      <h2 className="text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        Experience
      </h2>
      {/* Experience cards */}
      <div className="flex flex-col gap-8 max-w-[900px]">
        {experiences.map((experience, index: number) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            duration={experience.duration}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience
