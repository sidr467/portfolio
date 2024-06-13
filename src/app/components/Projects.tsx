import ProjectCard from "./ProjectCard"

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      image: "/pf.png",
      github: "https://github.com/sidr467",
      live: "https://github.com/sidr467",
      gitsvg: "/gitSvg.svg",
    },
    {
      title: "Portfolio",
      image: "/pf.png",
      github: "https://github.com/sidr467",
      live: "https://github.com/sidr467",
      gitsvg: "/gitSvg.svg",
    },
    {
      title: "Portfolio",
      image: "/pf.png",
      github: "https://github.com/sidr467",
      live: "https://github.com/sidr467",
      gitsvg: "/gitSvg.svg",
    },
  ]

  return (
    <div
      className="flex flex-col gap-8 items-center container mx-auto "
      id="projects"
    >
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-w-[320px] gap-8">
        {projects.map((project, index: number) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            github={project.github}
            live={project.live}
            gitSvg={project.gitsvg}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
