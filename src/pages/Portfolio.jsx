import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import {
    Palette,
    Code2,
    Smartphone,
    Zap,
    Link,
    FileText,
    Phone,
    PhoneForwarded,
    ShoppingCart,
    BarChart3,
    Rocket,
    Globe,
    Users,
    Search,
    Shield,
    Layers,
    ArrowLeft,
    ArrowRightFromLineIcon,
    ArrowRight,
} from "lucide-react";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import myPic from "../assets/pic.PNG";
import { useNavContext } from "../context/navContext";
import ProjectsSection from "../components/ProjectSection";

const Portfolio = () => {
    const { handleClick, setActive, Links, setSpin, click } = useNavContext();

    const [role, setRole] = useState("Beejayofgod");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // setClick(false);
                    if (entry.isIntersecting && !click) {
                        const section =
                            entry.target.getAttribute("data-section");

                        if (!isMobile) {
                            history.pushState(
                                null,
                                "",
                                `${section == "home" ? "/" : `#${section}`}`
                            );
                        }

                        let sectionIndex = Array.from(Links).findIndex(
                            (obj) => obj.name === section
                        );

                        setActive(sectionIndex);

                        console.log(sectionIndex);

                        setSpin(true);

                        setTimeout(() => {
                            setSpin(false);
                        }, 500);
                    }
                });
            },
            {
                root: null, // or your specific root element
                rootMargin: "0px 0px -30px 0px", // adjust margins to account for gap
                threshold: 0.3, // or adjust threshold
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [click, isMobile]);

    useEffect(() => {
        const roles = ["a Frontend Dev.", "Adekunle Bolaji", "a Web Developer"];

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % roles.length; // this it to prevent the current index from overlapping
            setRole(roles[currentIndex]);
        }, 4000); // Match the CSS animation duration

        return () => clearInterval(interval); // Cleanup
    }, []);

    const services = [
        {
            icon: Palette,
            title: "UI/UX Implementation",
            description:
                "Transforming your Figma designs into pixel-perfect, interactive React and Next.js applications. I specialize in converting static designs into dynamic, responsive components while maintaining design consistency and implementing smooth animations and micro-interactions that enhance user experience.",
            gradient: "from-purple-50 to-purple-300",
            iconBg: "bg-purple-500",
        },
        {
            icon: Code2,
            title: "React & Next.js Development",
            description:
                "Building scalable, production-ready web applications using modern React patterns and Next.js features. This includes server-side rendering, static site generation, API routes, and advanced optimization techniques to ensure your application loads fast, ranks well in search engines, and provides an exceptional user experience across all devices.",
            gradient: "from-blue-50 to-blue-300",
            iconBg: "bg-blue-600",
        },
        {
            icon: Smartphone,
            title: "Responsive Web Design",
            description:
                "Creating mobile-first, responsive designs that adapt seamlessly to any screen size or device. I ensure your application provides consistent functionality and visual appeal across desktop, tablet, and mobile platforms, with careful attention to touch interactions, loading performance, and accessibility standards for all users.",
            gradient: "from-green-50 to-green-300",
            iconBg: "bg-green-500",
        },

        {
            icon: BarChart3,
            title: "Analytics & Dashboards",
            description:
                "Creating interactive data visualization dashboards that transform complex business data into actionable insights. Using libraries like Chart.js, D3.js, and Recharts, I build custom analytics interfaces that help you track KPIs, monitor user behavior, and make data-driven decisions with real-time updates and intuitive filtering options.",
            gradient: "from-indigo-50 to-indigo-300",
            iconBg: "bg-indigo-600",
        },
        {
            icon: Rocket,
            title: "MVP Development",
            description:
                "Rapid development of minimum viable products to validate your startup ideas quickly and cost-effectively. I focus on core functionality, clean user interfaces, and scalable architecture that allows for future growth. This includes user authentication, basic CRUD operations, and essential features needed to test your concept in the market.",
            gradient: "from-pink-50 to-pink-300",
            iconBg: "bg-pink-500",
        },
        {
            icon: Globe,
            title: "Landing Pages & Websites",
            description:
                "Designing and developing high-converting landing pages and corporate websites that establish your professional online presence. I focus on conversion optimization, fast loading times, SEO-friendly structure, and compelling call-to-actions that drive business results. Each page is crafted to tell your story and convert visitors into customers.",
            gradient: "from-teal-50 to-teal-300",
            iconBg: "bg-teal-600",
        },

        {
            icon: Search,
            title: "SEO & Performance",
            description:
                "Implementing comprehensive search engine optimization strategies and performance enhancements to maximize your online visibility and user experience. This includes technical SEO, Core Web Vitals optimization, lazy loading, code splitting, and advanced caching strategies that improve your search rankings and conversion rates.",
            gradient: "from-yellow-50 to-yellow-300",
            iconBg: "bg-yellow-500",
        },

        {
            icon: Layers,
            title: "API Integration",
            description:
                "Seamlessly connecting your frontend applications with backend services, third-party APIs, and existing business systems. I handle complex data fetching, state management, error handling, and real-time updates using modern techniques like React Query, SWR, and WebSockets to ensure your application stays synchronized and responsive.",
            gradient: "from-violet-50 to-violet-300",
            iconBg: "bg-violet-600",
        },
    ];

    return (
        <>
            <Navbar />

            <div className="md:w-[1000px] mx-auto  max-w-screen overflow-hidden">
                <section
                    className="relative flex  items-center justify-center flex-col min-h-screen md:py-0"
                    id="home"
                    data-section="home"
                >
                    <h1 className="text-gray-700 text-xl md:text-3xl font-bold transition-transform mt-20">
                        Hello there
                        <span className="wave md:text-xl ml-1">👋</span>
                    </h1>

                    <span className="font-bold mt-4 flex md:h-20 justify-center box-content px-4 md:px-0 overflow-hidden">
                        <span className="tracking-tighter  md:text-7xl flex text-4xl">
                            I'm
                        </span>
                        <span className="role  md:ml-4 ml-2  md:text-7xl flex text-4xl  relative   text-blue-600  after:absolute after:left-4 after:h-20 after:w-full after:border-l-3 after:border-blue-500 after:bg-white ">
                            {role}
                        </span>
                    </span>

                    <p className="max-w-xl text-center  mt-4 md:w-xl w-sm">
                        I turn complex ideas into elegant websites and web apps.
                        Specializing in React and JavaScript, I create seamless,
                        responsive interfaces that deliver exceptional user
                        experience through clean code.
                    </p>

                    <div className="flex md:gap-8 gap-4 md:pt-12 pt-28">
                        <a
                            href="https://wa.me/2348130639734"
                            className="bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in "
                        >
                            <img
                                className="w-8 m-auto"
                                src={whatsappIcon}
                                alt=""
                            />
                        </a>

                        <a
                            href="https://x.com/Beejayofgod"
                            target="new"
                            className="bg-blue-200 md:p-4 p-3  rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in"
                        >
                            <img className="w-8 m-auto" src={twitter} alt="" />
                        </a>
                        <a
                            href="https://www.github.com/beejayofgod"
                            className="bg-blue-200 md:p-4 p-3  rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in"
                            target="new"
                        >
                            <img className="w-8 m-auto" src={github} alt="" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/beejayofgod"
                            className="bg-blue-200 md:p-4 p-3  rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-out"
                            target="new"
                        >
                            <img className="w-8 m-auto" src={linkedin} alt="" />
                        </a>
                    </div>
                </section>

                <section
                    onClick={() => handleClick(1, Links)}
                    id="about"
                    data-section="about"
                    className="flex md:flex-row flex-col py-24 gap-12 "
                >
                    <div className="">
                        <img
                            className="w-sm mx-auto hidden md:flex"
                            src={myPic}
                            alt=""
                        />
                    </div>
                    <div className="md:w-2xl my-auto px-6">
                        <h2 className="text-blue-500 w-xs pb-2 md:text-5xl text-3xl relative font-bold  after:absolute after:bottom-0  after:left-0 after:content-['']  after:h-1  md:after:w-4/5 after:w-1/2 after:bg-blue-500 ">
                            ABOUT ME
                        </h2>
                        <div className="flex md:flex-row items-start flex-col justify-start  gap-4">
                            <p className=" font-bold mt-4 text-gray-700 ">
                                ADEKUNLE BOLAJI - DEVELOPER
                            </p>
                        </div>

                        <p className="md:mt-8 mt-4 md:w-md text-left opacity-60">
                            I'm a Computer Engineering student and frontend
                            developer with a knack for solving problems and
                            building clean, responsive websites for brands,
                            businesses, and startups.
                            <br /> <br /> My coding journey kicked off when I
                            took a Python course in school and realized I
                            enjoyed telling computers what to do (and having
                            them actually listen). When I'm not writing code or
                            refining user interfaces, you’ll probably catch me
                            unwinding with a heated round of eFootball—my way of
                            debugging life.
                        </p>

                        <div className="flex mt-8 flex-col md:flex-row  items-left gap-4">
                            <a className="flex items-center justify-center gap-4  md:text-base  px-4 md:py-3 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <FileText size={20} />
                                View Resume
                            </a>
                            <a
                                href=""
                                className="flex  items-center justify-center  md:text-base  gap-4  border-blue-500 border px-4 py-4 md:py-3  rounded-md text-blue-600"
                            >
                                <Phone className="animate-bounce" />
                                Book a call with me
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    className="h-fit relative"
                    id="services"
                    data-section="services"
                >
                    <div className="mb-16">
                        <h2
                            className={`md:text-5xl w-fit text-3xl font-bold ml-8 md:mx-auto md:text-center pb-2 relative tracking-wide text-blue-500 after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-1 after:w-full hover:after:w-full after:duration-500 transition-all after:transition-all after:bg-blue-500`}
                        >
                            What I Offer
                        </h2>
                    </div>

                    <div className="md:grid md:grid-cols-3 md:gap-10 flex flex-col gap-6 px-6 md:px-0">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl shadow-md p-6 bg-gradient-to-br ${service.gradient}`}
                                >
                                    <div
                                        className={`w-12 h-12 flex items-center justify-center rounded-md ${service.iconBg} mb-4`}
                                    >
                                        <Icon className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <div
                    id="projects"
                    className="px-6 md:px-40"
                    data-section="projects"
                >
                    <h1 className="text-4xl text-center mt-24 font-bold mb-4">
                        Featured Projects
                    </h1>

                    <ProjectsSection />
                </div>

                <div
                    id="contact"
                    className="px-6 md:px-0"
                    data-section="contact"
                >
                    <h1 active className="text-4xl font-bold mb-4">
                        Portfolio
                    </h1>
                    <p>
                        voluptatibus. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Expedita maiores explicabo aut
                        mollitia, maxime error reprehenderit totam tempora
                        laboriosam, quae sunt? Beatae inventore, laudantium
                        autem deserunt ipsam earum rerum laboriosam! Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Officiis
                        perspiciatis eveniet velit sed eius corrupti maiores aut
                        id alias neque, possimus tenetur dignissimos nam
                        perferendis tempora nemo numquam harum magnam! Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Rerum ad officia illo fuga. Corporis repellat esse natus
                        rerum consequatur accusamus perferendis illo, quaerat
                        accusantium impedit nostrum, fugit eos alias
                        voluptatibus. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Expedita maiores explicabo aut
                        mollitia, maxime error reprehenderit totam tempora
                        laboriosam, quae sunt? Beatae inventore, laudantium
                        autem deserunt ipsam earum rerum laboriosam! Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Officiis
                        perspiciatis eveniet velit sed eius corrupti maiores aut
                        id alias neque, possimus tenetur dignissimos nam
                        perferendis tempora nemo numquam harum magnam! Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Rerum ad officia illo fuga. Corporis repellat esse natus
                        rerum consequatur accusamus perferendis illo, quaerat
                        accusantium impedit nostrum, fugit eos alias
                        voluptatibus. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Expedita maiores explicabo aut
                        mollitia, maxime error reprehenderit totam tempora
                        laboriosam, quae sunt? Beatae inventore, laudantium
                        autem deserunt ipsam earum rerum laboriosam! Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Officiis
                        perspiciatis eveniet velit sed eius corrupti maiores aut
                        id alias neque, possimus tenetur dignissimos nam
                        perferendis tempora nemo numquam harum magnam! Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Rerum ad officia illo fuga. Corporis repellat esse natus
                        rerum consequatur accusamus perferendis illo, quaerat
                        accusantium impedit nostrum, fugit eos alias
                        voluptatibus. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Expedita maiores explicabo aut
                        mollitia, maxime error reprehenderit totam tempora
                        laboriosam, quae sunt? Beatae inventore, laudantium
                        autem deserunt ipsam earum rerum laboriosam! Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Officiis
                        perspiciatis eveniet velit sed eius corrupti maiores aut
                        id alias neque, possimus tenetur dignissimos nam
                        perferendis tempora nemo numquam harum magnam! Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Rerum ad officia illo fuga. Corporis repellat esse natus
                        rerum consequatur accusamus perferendis illo, quaerat
                        accusantium impedit nostrum, fugit eos alias
                        voluptatibus. v
                    </p>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
