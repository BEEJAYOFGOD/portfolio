"../components/Project.component";
import ProjectCard from "./Project.component";

const ProjectsSection = () => {
    // Projects data object
    const projectsData = [
        {
            id: 1,
            name: "Raft Fintech",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ea! Sit laboriosam totam tempora culpa consequatur assumenda odio nisi voluptatum cum adipisci placeat eaque, vero sapiente voluptatibus harum sed ipsum.",
            builtBy: "Adekunle Bolaji",
            technologies: ["HTML", "CSS", "JS"],
            imageColor: "bg-red-500",
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
        {
            id: 2,
            name: "TaskFlow",
            description:
                "A modern task management application built with React and Firebase. Features real-time collaboration, drag-and-drop functionality, and intuitive project organization to boost team productivity.",
            builtBy: "Adekunle Bolaji",
            technologies: ["React", "Firebase", "Tailwind"],
            imageColor: "bg-blue-500",
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
        {
            id: 3,
            name: "WeatherSync",
            description:
                "Real-time weather monitoring dashboard with advanced forecasting capabilities. Integrates multiple weather APIs to provide accurate predictions and beautiful data visualizations.",
            builtBy: "Adekunle Bolaji",
            technologies: ["Vue.js", "Node.js", "Chart.js"],
            imageColor: "bg-green-500",
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
        {
            id: 4,
            name: "CryptoTracker",
            description:
                "Comprehensive cryptocurrency portfolio tracker with real-time price updates, portfolio analytics, and market trend analysis. Built for both beginners and advanced traders.",
            builtBy: "Adekunle Bolaji",
            technologies: ["Next.js", "TypeScript", "PostgreSQL"],
            imageColor: "bg-purple-500",
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
        {
            id: 5,
            name: "SmartHome",
            description:
                "IoT home automation system with ESP32 integration. Control lights, temperature, and security systems remotely through an intuitive web interface with real-time monitoring.",
            builtBy: "Adekunle Bolaji",
            technologies: ["ESP32", "React", "MQTT"],
            imageColor: "bg-yellow-500",
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
        {
            id: 6,
            name: "BlogCMS",
            description:
                "Full-featured content management system for bloggers and content creators. Features markdown support, SEO optimization, and customizable themes with lightning-fast performance.",
            builtBy: "Adekunle Bolaji",
            technologies: ["Gatsby", "GraphQL", "Strapi"],
            imageColor: "bg-pink-500",
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="px-6  w-5xl mx-auto"
            data-section="projects"
        >
            <h1 className="text-4xl text-center mt-24 font-bold mb-4">
                Featured Projects
            </h1>
            <div className="flex flex-col gap-12">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
