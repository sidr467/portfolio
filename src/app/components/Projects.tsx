import ProjectCard from "./ProjectCard"

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      image: "/projects/portfolio.png",
      github: "https://github.com/sidr467/portfolio",
      live: "https://portfolio-rsidd467.vercel.app/",
    },
    {
      title: "FrontEnd Mentor Profile",
      image: "/projects/frontend-profile.png",
      github: "https://github.com/sidr467",
      live: "https://www.frontendmentor.io/profile/sidr467",
    },
    {
      title: "FrontEnd Mentor challenges",
      image: "/projects/frontend-challenges.png",
      github: "https://github.com/sidr467/frontend_mentor",
      live: "https://frontend-mentor-rsidd467.vercel.app/",
    },
  ]

  return (
    <div className="flex flex-col gap-8 items-center" id="projects">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 min-w-[320px] sm:min-w-[400px] md:min-w-[520px] lg:min-w-[600px] gap-8">
        {projects.map((project, index: number) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
