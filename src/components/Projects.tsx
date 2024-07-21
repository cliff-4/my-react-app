import ProjectsList from "../assets/ProjectsData/data.json";

const Projects = () => {
  return (
    <div
      className="
      min-w-full
      p-32
      "
    >
      <div
        className="
        grid grid-cols-3 gap-4 place-items-center
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
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div
      className="
      w-72 p-4
      border-2 border-white rounded-lg
      bg-quarternary text-quinternary font-sans
      hover:scale-110 hover:bg-blend-hue-rotate-180 hover:cursor-pointer
      transition-all duration-200
      "
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <a href={"#"}>{link}</a>
    </div>
  );
};

export default Projects;
