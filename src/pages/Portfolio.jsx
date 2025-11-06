import Navbar from "../components/Navbar";
import ProjectsSection from "../section/ProjectSection";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/Contact";

const Portfolio = () => {
    return (
        <>
            <Navbar />

            <div className="md:w-[1000px] mx-auto  max-w-screen overflow-hidden">
                <HomeSection />

                <AboutSection />
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
