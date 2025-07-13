import ProjectCard from "../components/Project.component";

const ProjectsSection = () => {
    // Projects data object
    const projectsData = [
        {
            id: 2,
            name: "TaskFlow",
            description:
                "A modern task management application built with React and Firebase. Features real-time collaboration, drag-and-drop functionality, and intuitive project organization to boost team productivity.",
            builtBy: "Adekunle Bolaji",
            technologies: ["React", "Firebase", "Tailwind"],
            imageColor: "bg-blue-500",
            projectUrl: "#",
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
        },
    ];

    return (
        <section className="w-full mx-auto p-6">
            <h2 className="text-4xl font-bold text-center mb-12">
                My Projects
            </h2>
            <div className="flex flex-col gap-12">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
