import Navbar from "../components/Navbar";

import { useEffect } from "react";
import { Palette, Code2, Smartphone, Zap, Link } from "lucide-react";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import myPic from "../assets/pic.PNG";
import { useNavContext } from "../context/navContext";

const Portfolio = () => {
    const { handleClick, setActive, Links, setSpin, click } = useNavContext();

    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]");

        console.log(sections);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // setClick(false);
                    if (entry.isIntersecting && !click) {
                        const section =
                            entry.target.getAttribute("data-section");
                        console.log(section);

                        history.pushState(
                            null,
                            "",
                            `${section == "home" ? "/" : `#${section}`}`
                        );

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

    return (
        <>
            <Navbar />

            <div className="w-6xl mx-auto">
                <section
                    className="relative flex items-center justify-center flex-col min-h-screen"
                    id="home"
                    data-section="home"
                >
                    <h1 className="text-gray-700 text-3xl font-bold transition-transform mt-20">
                        Hello there
                        <span className="wave text-xl ml-1">👋</span>
                    </h1>

                    <span className="font-bold text-6xl">
                        <span className="tracking-tighter">I'm</span>
                        <span className="ml-4 text-blue-600 tracking-wider">
                            BEEJAYOFGOD
                        </span>
                    </span>

                    <p className="w-xl text-center mt-4  min-w-sm">
                        I turn complex ideas into elegant websites and web apps.
                        Specializing in React and JavaScript, I create seamless,
                        responsive interfaces that deliver exceptional user
                        experience through clean code.
                    </p>

                    <div className="flex gap-8 pt-12">
                        <a
                            href="https://wa.me/2348130639734"
                            className="bg-blue-200 p-4 rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in"
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
                            className="bg-blue-200 p-4 rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in"
                        >
                            <img className="w-8 m-auto" src={twitter} alt="" />
                        </a>
                        <a
                            href="https://www.github.com/beejayofgod"
                            className="bg-blue-200 p-4 rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-in"
                            target="new"
                        >
                            <img className="w-8 m-auto" src={github} alt="" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/beejayofgod"
                            className="bg-blue-200 p-4 rounded-full hover:bg-blue-300/80 transition duration-300 hover:-translate-y-2 hover:transition-all hover:ease-in-out ease-out"
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
                    className="flex py-24 gap-12 "
                >
                    <div>
                        <img className="w-sm" src={myPic} alt="" />
                    </div>
                    <div className="w-2xl my-auto">
                        <h2 className="text-blue-500 w-xs pb-2 text-6xl relative font-bold  after:absolute after:bottom-0  after:left-0 after:content-['']  after:h-2 after:w-4/5 after:bg-blue-500">
                            ABOUT ME
                        </h2>
                        <p className=" font-bold mt-4 text-gray-700">
                            ADEKUNLE BOLAJI - DEVELOPER
                        </p>
                        <p className="mt-8 opacity-60">
                            I'm a Computer Engineering student and frontend
                            developer with a knack for solving problems and
                            building clean, responsive websites for brands,
                            businesses, and startups.
                            <br /> My coding journey kicked off when I took a
                            Python course in school and realized I enjoyed
                            telling computers what to do (and having them
                            actually listen). When I'm not writing code or
                            refining user interfaces, you’ll probably catch me
                            unwinding with a heated round of eFootball—my way of
                            debugging life.
                        </p>
                    </div>
                </section>

                <section
                    className="flex [&>*]:flex-1  h-fit overflow-scroll border relative"
                    id="services"
                    data-section="services"
                >
                    <div className="mb-16 sticky top-0 border flex ">
                        <h2 className="">WHAT I OFFER</h2>
                    </div>

                    <div className="h-[400px] overflow-scroll  relative overflow-y-scroll">
                        <div className="bg-gradient-to-br sticky top-8 from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
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
                        </div>

                        <div className="bg-gradient-to-br sticky top-8 from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
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

                        <div className="bg-gradient-to-br sticky top-8 from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
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

                        <div className="bg-gradient-to-br sticky top-8 from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
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

                        <div className="bg-gradient-to-br from-blue-50 sticky top-8 to-blue-100 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
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

                <div id="contact" className="" data-section="contact">
                    <h1 active className="text-4xl font-bold mb-4">
                        Portfolio
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita maiores explicabo aut mollitia, maxime error
                        reprehenderit totam tempora laboriosam, quae sunt?
                        Beatae inventore, laudantium autem deserunt ipsam earum
                        rerum laboriosam! Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Officiis perspiciatis
                        eveniet velit sed eius corrupti maiores aut id alias
                        neque, possimus tenetur dignissimos nam perferendis
                        tempora nemo numquam harum magnam! Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Rerum ad officia
                        illo fuga. Corporis repellat esse natus rerum
                        consequatur accusamus perferendis illo, quaerat
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
                <div id="projects" data-section="projects">
                    <h1 active className="text-4xl font-bold mb-4">
                        Portfolio1
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita maiores explicabo aut mollitia, maxime error
                        reprehenderit totam tempora laboriosam, quae sunt?
                        Beatae inventore, laudantium autem deserunt ipsam earum
                        rerum laboriosam! Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Officiis perspiciatis
                        eveniet velit sed eius corrupti maiores aut id alias
                        neque, possimus tenetur dignissimos nam perferendis
                        tempora nemo numquam harum magnam! Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Rerum ad officia
                        illo fuga. Corporis repellat esse natus rerum
                        consequatur accusamus perferendis illo, quaerat
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

                {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                soluta asperiores eveniet ex ea impedit perspiciatis
                consectetur. Neque suscipit nesciunt commodi nobis qui error
                dolor voluptate dicta unde, a laborum? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dignissimos ab hic id fuga
                quia amet! Accusamus, possimus expedita nam sequi eligendi
                blanditiis doloribus odit impedit quidem laboriosam deserunt
                repudiandae eius. Lorem
            </p> */}
            </div>
        </>
    );
};

export default Portfolio;
