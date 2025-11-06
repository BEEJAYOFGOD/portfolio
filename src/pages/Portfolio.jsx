import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { useNavContext } from "../context/navContext";
import ProjectsSection from "../section/ProjectSection";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/Contact";

const Portfolio = () => {
    const { handleClick, setActive, Links, setSpin, click } = useNavContext();

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

    return (
        <>
            <Navbar />

            <div className="md:w-[1000px] mx-auto  max-w-screen overflow-hidden">
                <HomeSection />

                <AboutSection handleClick={handleClick} Links={Links} />
                <ServicesSection />
                <ProjectsSection />

                <div
                    id="contact"
                    className="px-6 md:px-0"
                    data-section="contact"
                >
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
