import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { Palette, Code2, Smartphone, Zap, Link } from "lucide-react";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import myPic from "../assets/pic.PNG";
import { useNavContext } from "../context/navContext";

const Portfolio = () => {
    const { handleClick, setActive, Links, setSpin, click } = useNavContext();

    const [role, setRole] = useState("Beejayofgod");

    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]");

        const isMobile = true;

        console.log(sections);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // setClick(false);
                    if (entry.isIntersecting && !click) {
                        const section =
                            entry.target.getAttribute("data-section");

                        // history.pushState(
                        //     null,
                        //     "",
                        //     `${section == "home" ? "/" : `#${section}`}`
                        // );

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
                threshold: 0.7, // 50% of the section is visible
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [click]);

    useEffect(() => {
        const roles = ["a Frontend Dev.", "Adekunle Bolaji", "a Web Developer"];

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % roles.length; // this it to prevent the current index from overlapping
            setRole(roles[currentIndex]);
        }, 4000); // Match the CSS animation duration

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <>
            <Navbar />

            <div className="md:w-[1000px] mx-auto  max-w-screen overflow-hidden">
                <section
                    className="relative flex items-center justify-center flex-col md:min-h-screen pt-36 md:py-0"
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
                        <span className="role  ml-4  md:text-7xl flex text-4xl  relative   text-blue-600  after:absolute after:left-4 after:h-20 after:w-full after:border-l-3 after:border-blue-500 after:bg-white ">
                            {role}
                        </span>
                    </span>

                    <p className="max-w-xl text-center  mt-4 md:w-xl w-sm">
                        I turn complex ideas into elegant websites and web apps.
                        Specializing in React and JavaScript, I create seamless,
                        responsive interfaces that deliver exceptional user
                        experience through clean code.
                    </p>

                    <div className="flex gap-8 pt-12">
                        <a
                            href="https://wa.me/2348130639734"
                            className="bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in border"
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
                    <div className="border">
                        <img className="w-sm mx-auto" src={myPic} alt="" />
                    </div>
                    <div className="w-2xl my-auto px-8">
                        <h2 className="text-blue-500 w-xs pb-2 md:text-5xl text-3xl relative font-bold  after:absolute after:bottom-0  after:left-0 after:content-['']  after:h-2 md:after:w-4/5 after:w-1/2 after:bg-blue-500  border">
                            ABOUT ME
                        </h2>
                        <p className=" font-bold mt-4 text-gray-700">
                            ADEKUNLE BOLAJI - DEVELOPER
                        </p>
                        <p className="md:mt-8 mt-4 w-md opacity-60">
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
                    </div>
                </section>

                <section
                    className=" h-fit relative"
                    id="services"
                    data-section="services"
                >
                    <div className="mb-16    border  ">
                        <h2
                            // ref={af
                            className={`md:text-5xl w-fit  text-3xl font-bold ml-8  border md:mx-auto md:text-center pb-2 relative tracking-wide text-blue-500 after:absolute after:bottom-0 after:left-0 after:content-['']   after:h-1 after:w-full hover:after:w-full after:duration-500 transition-all after:transition-all after:bg-blue-500 `}
                        >
                            What I Offer
                        </h2>
                    </div>

                    <div className=" md:grid md:grid-cols-3 md:gap-10 flex flex-col gap-6 px-8 md:px-0">
                        <article className="service bg-gradient-to-b  from-blue-50 to-blue-300 p-8 rounded-2xl text-center hover:transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:duration-200 hover:shadow-md">
                            <div className="bg-blue-500 p-4 rounded-xl w-fit mx-auto mb-6">
                                <Palette className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-600">
                                Creating beautiful, intuitive user interfaces
                                with modern design principles
                            </p>
                        </article>

                        <div className=" service bg-gradient-to-tr  from-blue-50 to-blue-300 p-8 rounded-2xl text-center  hover:scale-105 hover:transform  transition-all duration-300 hover:shadow-md   hover:rotate-1  hover:duration-200 ">
                            <div className="bg-blue-600 p-4 rounded-xl w-fit mx-auto mb-6">
                                <Code2 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Frontend Development
                            </h3>
                            <p className="text-gray-600">
                                Building responsive, interactive web
                                applications using React and modern frameworks
                            </p>
                        </div>

                        <div className="service bg-gradient-to-b  from-blue-50 to-blue-300 p-8 rounded-2xl text-center  hover:scale-105 hover:transform  transition-all duration-300 hover:shadow-md   hover:rotate-1  hover:duration-200 ">
                            <div className="bg-blue-700 p-4 rounded-xl w-fit mx-auto mb-6">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Mobile-First Design
                            </h3>
                            <p className="text-gray-600">
                                Ensuring your website looks perfect on all
                                devices and screen sizes
                            </p>
                        </div>

                        <div className="service bg-gradient-to-b  from-blue-50 to-blue-300 p-8 rounded-2xl text-center  hover:scale-105 hover:transform  transition-all duration-300 hover:shadow-md   hover:rotate-1  hover:duration-200 ">
                            <div className="bg-blue-500 p-4 rounded-xl w-fit mx-auto mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Performance Optimization
                            </h3>
                            <p className="text-gray-600">
                                Fast-loading websites optimized for the best
                                user experience
                            </p>
                        </div>

                        <div className="service bg-gradient-to-tl  from-blue-50 to-blue-300 p-8 rounded-2xl text-center  hover:scale-105 hover:transform  transition-all duration-300 hover:shadow-md   hover:rotate-1  hover:duration-200 ">
                            <div className="bg-blue-600 p-4 rounded-xl w-fit mx-auto mb-6">
                                <Link className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                API Integration
                            </h3>
                            <p className="text-gray-600">
                                Seamless integration with third-party services
                                and databases
                            </p>
                        </div>
                    </div>
                </section>

                <div
                    id="projects"
                    className="px-8 md:px-0"
                    data-section="projects"
                >
                    <h1 active className="text-4xl font-bold mb-4">
                        Portfolio1
                    </h1>
                    <p>
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
                <div
                    id="contact"
                    className="px-8 md:px-0"
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
