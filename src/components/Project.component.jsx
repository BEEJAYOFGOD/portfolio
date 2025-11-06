import { ArrowRight } from "lucide-react";
import git_icon from "../assets/icons/git2.svg";

const ProjectCard = ({ project }) => {
    return (
        <article className="container flex [&>*]:flex-1 md:flex-row flex-col border border-slate-200/60 bg-white md:p-6 p-3  gap-8 rounded-3xl group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-200/50">
            <div className="space-y-3">
                <div className="flex flex-col gap-3">
                    <p className="text-2xl font-bold text-slate-800 mb-1">
                        {project.name}
                    </p>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:opacity-0  md:invisible bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all py-2.5 duration-500 flex md:group-hover:visible group-hover:opacity-100 group/link items-center border-0 w-fit px-5 rounded-2xl group-hover:animate-move-in shadow-lg hover:shadow-blue-500/25"
                    >
                        <span>View Project</span>
                        <span className="ml-2 transition-transform group-hover/link:translate-x-2 group-hover/link:ease-in-out">
                            <ArrowRight size={16} />
                        </span>
                    </a>
                </div>
                <p className="leading-relaxed text-slate-600">
                    {project.description}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                    Built by {project.builtBy}
                </p>

                <div className="space-x-3 flex flex-wrap items-center gap-y-2 mt-8">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 rounded-xl text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200"
                        >
                            {tech}
                        </span>
                    ))}

                    <a href="www.github.com" title="check github repo">
                        <img src={git_icon} className="w-12" alt="" />
                    </a>
                </div>
            </div>

            <div className="rounded-3xl min-h-80 md:aspect-[12.0] aspect-video box-border p-3 bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-400/20 rounded-full blur-lg"></div>

                {/* Image container */}
                <div className="relative   h-full rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm">
                    <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="h-80 w-full md:object-top object-cover md:group-hover:scale-110 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle overlay for better image contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
