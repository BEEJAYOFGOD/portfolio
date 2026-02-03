import { useMemo, useState } from "react";
import ProjectCard from "../components/Project.component";
import RaftUrl from "../assets/img/raft.png";
import ProductpageImg from "../assets/img/product-page.png";
import TicketpageImg from "../assets/img/ticketing.png";
import SpaceToursimImg from "../assets/img/space-tourism.png";
import ManifestPng from "../assets/img/manifest.png";
import SegmentedTabs from "@/components/SegmentedTabs";
import TourFlow from "@/assets/img/tourflow.png";
import TickoPng from "@/assets/img/ticko.png";
import datavista from "@/assets/img/datavista.png"

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState("all");

    const tabs = ["all", "web", "mobile"];

    const handleTabChange = (index) => {
        setActiveTab(index == 0 ? "all" : index == 1 ? "web" : "mobile");
    };

    // Projects data object
    const projectsData = useMemo(
        () => [
            {
                id: 1,
                name: "Manifest Website",
                description:
                    "Manifesti is an AI-powered manifestation platform that generates cinematic visuals from user intentions.",
                builtBy: "Adekunle Bolaji and Others",
                technologies: [
                    "NextJs",
                    "Framer Motion",
                    "ShadCn",
                    "TailwindCss",
                ],
                imageUrl: ManifestPng,
                projectUrl: "#",
                link: "https://manifest.app",
                category: "web",
                github: "",
            },
            {
                id: 1,
                name: "Data Vista",
                description:
                    "A high-performance web analytics application that enables users to upload, transform, and visualize CSV datasets with persistent data storage.",
                technologies: [
                    "React + TypeScript",
                    "Supabase",
                    "ShadCn",
                    "TailwindCss",
                    "Recharts"
                ],
                imageUrl: datavista,
                projectUrl: "#",
                link: "https://manifest.app",
                category: "web",
                github: "",
            },

            {
                id: 2,
                name: "Space Tourism Website",
                description:
                    "Interactive space tourism website featuring destination guides, crew profiles, and technology showcases. Built with responsive design principles and smooth animations to deliver an immersive experience that brings the wonder of space exploration to life.",
                builtBy: "Adekunle Bolaji",
                technologies: ["HTML", "tailwind/css", "JavaScript"],
                imageUrl: SpaceToursimImg,
                projectUrl: "#",
                link: "https://space-tourism-website-main-phi.vercel.app/#home",
                category: "web",
                github: "https://github.com/BEEJAYOFGOD/space-tourism-website-main",
            },

            {
                id: 3,
                name: "Manifest App",
                description:
                    "Manifesti is an AI-powered manifestation platform that generates cinematic visuals from user intentions.",
                builtBy: "Adekunle Bolaji and Others",
                technologies: [
                    "React Native",
                    "Expo",
                    "React Query",
                    "Zustand",
                    "Axios",
                ],
                imageUrl: ManifestPng,
                projectUrl: "#",
                link: "https://play.google.com/store/apps/details?id=net.emerj.manifesti",
                category: "mobile",
            },

            {
                id: 4,
                name: "Raft Fintech",
                description:
                    "Modern fintech landing page for RAFT banking platform featuring seamless payments, smart investing, and wealth management services. Showcases fee-free banking benefits, next-gen card features, and customer testimonials through a clean, responsive design that converts visitors into users.",
                builtBy: "Adekunle Bolaji",
                technologies: ["HTML", "CSS", "JS"],
                imageUrl: RaftUrl,
                projectUrl: "#",
                link: "https://raft-fintech.vercel.app/",
                category: "web",
            },

            {
                id: 5,
                name: "Tourflow",
                description:
                    "Tourflow is an Embeddable onboarding and product tour web application built with Next.js, allowing website owners to create, customize, preview, and deploy guided multi-step tours for their users.",
                builtBy: "Adekunle Bolaji and others",
                technologies: ["NextJs", "Supabase"],
                imageUrl: TourFlow,
                projectUrl: "#",
                link: "https://tourflow-system.vercel.app",
                category: "web",
                github: "https://github.com/michycipher/tourflow-system",
            },
            {
                id: 6,
                name: "E-Commerce Product Page",
                description:
                    "Interactive e-commerce product page featuring image gallery, product variants, and shopping cart functionality. Built with responsive design and smooth animations to deliver a seamless shopping experience across all devices.",
                builtBy: "Adekunle Bolaji",
                technologies: ["ReactJS", "Tailwind"],
                imageUrl: ProductpageImg,
                projectUrl: "#",
                link: "https://ecommerce-product-main-27od.vercel.app/",
                category: "web",
                github: "https://github.com/BEEJAYOFGOD/ecommerce-product-main",
            },
            {
                id: 7,
                name: "Ticketing Platform",
                description:
                    "Digital ticketing platform with ticket selection, purchase history, and download functionality. Features a clean interface for browsing ticket types and managing purchased tickets with instant download capabilities.",
                builtBy: "Adekunle Bolaji",
                technologies: ["ReactJs", "Tailwind/css", "Axios"],
                imageUrl: TicketpageImg,
                projectUrl: "#",
                link: "https://hng-stage2-orpin.vercel.app/",
                category: "web",
            },

            {
                id: 8,
                name: "Ticko",
                description:
                    "A modern, responsive ticket management web application built with React, featuring authentication, dashboard, and full CRUD operations for tickets",
                builtBy: "Adekunle Bolaji",
                technologies: ["ReactJs", "Tailwind/css", "LocalStorage"],
                imageUrl: TickoPng,
                projectUrl: "#",
                link: "https://hng-stage2-orpin.vercel.app/",
                category: "web",
                github: "https://github.com/BEEJAYOFGOD/Hng13-2-react",
            },
        ],
        [],
    );

    // Filter projects based on active tab

    // const filteredProjects =
    //     activeTab === "all"
    //         ? projectsData
    //         : projectsData.filter((project) => project.category === activeTab);

    const filteredProjects = useMemo(
        () =>
            activeTab === "all"
                ? projectsData
                : projectsData.filter(
                    (project) => project.category === activeTab,
                ),
        [activeTab, projectsData],
    );

    return (
        <section
            id="projects"
            className="md:px-6 px-3 md:w-5xl mx-auto"
            data-section="projects"
        >
            <h2
                className={`md:text-5xl w-fit text-3xl font-bold md:my-8 md:mt-20 ml-4 md:mx-auto md:text-center pb-2 relative tracking-wide text-blue-500 after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-1 after:w-full hover:after:w-full after:duration-500 transition-all after:transition-all after:bg-blue-500 mt-12 mb-4`}
            >
                Featured Projects
            </h2>

            {/* Segmented Tabs */}
            {/* <div className="flex justify-center my-8">

            </div> */}

            <SegmentedTabs
                tabs={tabs}
                setTab={setActiveTab}
                onChange={handleTabChange}
            />

            {/* Projects Grid */}
            <div className="flex flex-col gap-12">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-12">
                        No {activeTab} projects available yet.
                    </p>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
