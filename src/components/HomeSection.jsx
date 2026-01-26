import { useEffect, useState } from "react";
import { MessageCircle, Twitter, Github, Linkedin } from "lucide-react";

const HomeSection = () => {
    const [role, setRole] = useState("Beejayofgod");

    useEffect(() => {
        const roles = [
            "a Frontend Dev.",
            "Adekunle Bolaji",
            "a Web Developer",
            "a Software Eng.",
        ];

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            setRole(roles[currentIndex]);
        }, 4000); // Consider reducing to 3 seconds for snappier feel

        return () => clearInterval(interval);
    }, []);

    // Array of social links
    const socialLinks = [
        {
            name: "WhatsApp",
            url: "https://wa.me/2348130639734",
            icon: MessageCircle,
            ariaLabel: "Contact me on WhatsApp",
        },
        {
            name: "Twitter",
            url: "https://www.x.com/beejayofgod",
            icon: Twitter,
            ariaLabel: "Follow me on Twitter",
        },
        {
            name: "GitHub",
            url: "https://www.github.com/beejayofgod",
            icon: Github,
            ariaLabel: "View my GitHub profile",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/beejayofgod",
            icon: Linkedin,
            ariaLabel: "Connect with me on LinkedIn",
        },
    ];

    return (
        <section
            className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center flex-col  md:py-0"
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
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className="transition group"
                    >
                        <div className="group-hover:rotate-12 group-hover:scale-110 hover:ease-in-out ease-in hover:transition-all duration-300 bg-blue-200 md:p-4 p-3 rounded-full hover:bg-blue-300/80 hover:shadow-lg">
                            <social.icon
                                className="w-8 h-8 m-auto text-blue-700"
                                strokeWidth={2}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default HomeSection;

