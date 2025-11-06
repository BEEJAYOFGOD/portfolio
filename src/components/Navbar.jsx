import { NavLink, Link } from "react-router-dom";
import { useNavContext } from "../context/navContext";
import { useEffect, useState } from "react";
import { LucideCross } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { XIcon } from "lucide-react";

const Navbar = () => {
    const { handleClick, active, spin, Links } = useNavContext();
    const [openNav, setOpenNav] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (openNav && isMobile) {
            document.body.classList.add(
                "overflow-hidden",
                "h-screen",
                // "fixed",
                "w-full"
            );
        } else {
            document.body.classList.remove(
                "overflow-hidden",
                "h-screen",
                // "fixed",
                "w-full"
            );
        }

        return () => {
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.height = "";
        };
    }, [openNav, isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 250); // Change threshold as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", () => {
                handleScroll();
            });
    }, []);

    return (
        <>
            <header
                className="
           justify-between items-center  bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm z-50 w-full
          transition-all duration-150 ease-in-out px-8 md:px-8 md:py-2  py-4 sticky top-0 md:flex hidden"
            >
                <Link
                    className="text-blue-600 md:text-base text-xl flex relative flex-col font-semibold after:content-[''] after:right-0 after:top-6 after:bottom-0 after:transition-all after:ease-in-out duration-[3s] after:w-1/2 after:absolute after:h-[2px] md:hover:after:w-full md:after:bg-blue-600 after:rounded-full"
                    to="/"
                >
                    Beejayofgod
                </Link>

                <nav
                    className={`flex flex-col md:p-2 p-4 md:static md:h-fit md:w-fit  h-screen overflow-hidden`}
                >
                    <ul className="flex py-1 md:[&>*]:flex-1 [&>*]:text-center md:flex-row  gap-4 md:gap-0 items-start md:items-center capitalize md:w-md w-full  ">
                        {Links.map((link, index) => (
                            <li
                                key={index}
                                className={`transition-colors ease-in-out text-base w-full duration-700 flex  hover:text-blue-400 cursor-pointer capitalize ${
                                    active === index
                                        ? "text-blue-500 font-semibold  rounded-md p-3 md:p-0"
                                        : "text-gray-600"
                                } `}
                            >
                                <NavLink
                                    to={link.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(index, e);
                                    }}
                                    className="w-full flex justify-start  md:justify-center h-full focus:outline-none capitalize "
                                    type="button"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="md:flex hidden w-full ">
                        <div
                            style={{
                                transform: `translateX(${active * 100}%)`,
                            }}
                            className=" w-1/5 transition-all duration-[350ms] ease-in-out "
                        >
                            <div
                                className={`h-2 rounded-xs aspect-square mx-auto  bg-blue-500 ${
                                    spin ? "animate-spin duration-500" : ""
                                }`}
                            />
                        </div>
                    </div>
                </nav>
                <div className="border"></div>
            </header>
        </>
    );
};

export default Navbar;
