import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <article className="flex [&>*]:flex-1 border [&>*]:text-blue-500 border-blue-500 p-4 gap-8 rounded-3xl group transition-transform ">
            <div>
                <div>
                    <p className="text-3xl font-bold">{project.name}</p>

                    <a
                        href={project.link}
                        target="_blank"
                        className="opacity-0 invisible mt-2 transition-all duration-500 flex md:group-hover:visible group-hover:opacity-100 items-center border w-fit px-4 rounded-2xl group-hover:animate-move-in"
                    >
                        View Project
                        <button className="ml-2">
                            <ArrowRight size={16} />
                        </button>
                    </a>
                </div>
                <p className="mt-12  leading-relaxed text-black">
                    {project.description}
                </p>
                <p className="mt-4 text-sm text-blue-500">
                    Built by {project.builtBy}
                </p>
                <div className="space-x-4 flex w-3xs [&>*]:flex-1 [&>*]:text-center mt-8">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="border px-4 py-2 text-black border-blue-500 rounded-xl text-sm md:hover:bg-gray-50 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div
                className={`${project.imageColor} rounded-2xl min-h-48 box-border p-6`}
            >
                <div className="bg-red-200 h-full rounded-xl md:group-hover:scale-105 transition-transform duration-300"></div>
            </div>
        </article>
    );
};

export default ProjectCard;
