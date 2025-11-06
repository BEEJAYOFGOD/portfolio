import { useEffect, useState } from "react";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

const HomeSection = () => {
    const [role, setRole] = useState("Beejayofgod");

    useEffect(() => {
        const roles = [
            "a Frontend Dev.",
            "Adekunle Bolaji",
            "a Web Developer",
            "a Software Engineer",
        ];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            setRole(roles[currentIndex]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative flex h-[calc(100dvh-5rem)] items-center justify-center flex-col  md:py-0"
            id="home"
            data-section="home"
        >
            <h1 className="text-gray-700 text-xl md:text-3xl font-bold transition-transform ">
                Hello there
                <span className="wave md:text-xl ml-1">👋</span>
            </h1>

            <span className="font-bold mt-4 flex md:h-20 justify-center box-content px-4 md:px-0 overflow-hidden">
                <span className="tracking-tighter md:text-7xl flex text-4xl">
                    I'm
                </span>
                <span className="role md:ml-4 ml-2 md:text-7xl flex text-4xl relative text-blue-600 after:absolute after:left-4 after:h-20 after:w-full after:border-l-3 after:border-blue-500 after:bg-white">
                    {role}
                </span>
            </span>

            <p className="max-w-xl text-center mt-4 md:w-xl w-sm text-lg">
                I turn complex ideas into elegant websites and web applications.
                Specializing in React, JavaScript and TypeScript, I create
                seamless, responsive interfaces that deliver exceptional user
                experience through clean code.
            </p>

            <div className="flex md:gap-8 gap-4 md:pt-12 pt-28">
                <a
                    href="https://wa.me/2348130639734"
                    className=" transition  group  "
                >
                    <div className="group-hover:-rotate-y-180 hover:ease-in-out ease-in hover:transition-all duration-300 bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 hover:ease-in hover:duration-[1s]">
                        <img className="w-8 m-auto" src={whatsappIcon} alt="" />
                    </div>
                </a>

                <a
                    href="https://www.x.com/beejayofgod"
                    className=" transition  group  "
                >
                    <div className="group-hover:-rotate-y-180 hover:ease-in-out ease-in hover:transition-all duration-300 bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 hover:ease-in hover:duration-[1s]">
                        <img className="w-8 m-auto" src={twitter} alt="" />
                    </div>
                </a>

                <a
                    href="https://www.github.com/beejayofgod"
                    className=" transition  group  "
                >
                    <div className="group-hover:-rotate-y-180 hover:ease-in-out ease-in hover:transition-all duration-300 bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 hover:ease-in hover:duration-[1s]">
                        <img
                            className="w-8 m-auto"
                            src={github}
                            alt="github icon"
                        />
                    </div>
                </a>
                <a
                    href="https://www.x.com/beejayofgod"
                    className=" transition  group  "
                >
                    <div className="group-hover:-rotate-y-180 hover:ease-in-out ease-in hover:transition-all duration-300 bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 hover:ease-in hover:duration-[1s]">
                        <img
                            className="w-8 m-auto"
                            src={linkedin}
                            alt="linkedin icon"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HomeSection;
