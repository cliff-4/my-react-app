import { ProjectsList } from "../assets/ProjectsList";

const Projects = () => {
  return (
    <div
      className="
      min-w-full
      min-h-screen
      p-16
      flex flex-col items-center
      "
    >
      <div
        className="
        grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4 place-items-center justify-center w-full
        "
      >
        {ProjectsList.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description?: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description = "",
  link = "#",
}: ProjectCardProps) => {
  return (
    <a href={link}>
      <div
        className="
      w-96 md:w-64
      p-4
      border-2 border-white rounded-lg
      bg-quarternary text-quinternary font-sans
      hover:scale-110 hover:bg-blend-hue-rotate-180 hover:cursor-pointer
      transition-all duration-200
      "
      >
        <b>
          <h1 className="text-2xl mb-1">{title}</h1>
        </b>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Projects;
