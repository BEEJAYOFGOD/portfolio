"../components/Project.component";
import ProjectCard from "../components/Project.component";
import RaftUrl from "../assets/img/raft.png";
import ProductpageImg from "../assets/img/product-page.png";
import TicketpageImg from "../assets/img/ticketing.png";
import SpaceToursimImg from "../assets/img/space-tourism.png";

const ProjectsSection = () => {
    // Projects data object
    const projectsData = [
        {
            id: 1,
            name: "Space Tourism Website",
            description:
                "Interactive space tourism website featuring destination guides, crew profiles, and technology showcases. Built with responsive design principles and smooth animations to deliver an immersive experience that brings the wonder of space exploration to life.",
            builtBy: "Adekunle Bolaji",
            technologies: ["HTML", "tailwind/css", "JavaScript"],
            imageUrl: SpaceToursimImg,
            projectUrl: "#",
            link: "https://space-tourism-website-main-phi.vercel.app/#home",
        },
        {
            id: 2,
            name: "Raft Fintech",
            description:
                "Modern fintech landing page for RAFT banking platform featuring seamless payments, smart investing, and wealth management services. Showcases fee-free banking benefits, next-gen card features, and customer testimonials through a clean, responsive design that converts visitors into users.",
            builtBy: "Adekunle Bolaji",
            technologies: ["HTML", "CSS", "JS"],
            imageUrl: RaftUrl,
            projectUrl: "#",
            link: "https://raft-fintech.vercel.app/",
        },
        {
            id: 3,
            name: "E-Commerce Product Page",
            description:
                "Interactive e-commerce product page featuring image gallery, product variants, and shopping cart functionality. Built with responsive design and smooth animations to deliver a seamless shopping experience across all devices.",
            builtBy: "Adekunle Bolaji",
            technologies: ["ReactJS", "Tailwind"],
            imageUrl: ProductpageImg,
            projectUrl: "#",
            link: "https://ecommerce-product-main-27od.vercel.app/",
        },
        {
            id: 4,
            name: "Ticketing Platform",
            description:
                "Digital ticketing platform with ticket selection, purchase history, and download functionality. Features a clean interface for browsing ticket types and managing purchased tickets with instant download capabilities.",
            builtBy: "Adekunle Bolaji",
            technologies: ["ReactJs", "Tailwind/css", "Axios"],
            imageUrl: TicketpageImg,
            projectUrl: "#",
            link: "https://hng-stage2-orpin.vercel.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="md:px-6 px-3  md:w-5xl mx-auto"
            data-section="projects"
        >
            <h1 className="text-4xl text-center mt-24 font-bold mb-4 text-blue-500">
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
