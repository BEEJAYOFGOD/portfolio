import { NavLink, Link } from "react-router-dom";
import { useNavContext } from "../context/navContext";
import { useEffect, useState } from "react";
import { LucideCross } from "lucide-react";
import { useRef } from "react";

const Navbar = () => {
    const { handleClick, active, spin, Links } = useNavContext();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        if (openNav) {
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
                "fixed",
                "w-full"
            );
        }

        return () => {
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.height = "";
        };
    }, [openNav]);

    return (
        <>
            <header className="flex fixed top-0 border-gray-200 md:backdrop-blur-md  justify-between items-center md:px-46 p-4 bg-white/90 w-full text-sm shadow-xs z-50">
                <Link
                    className="text-blue-600 text-base flex relative flex-col font-semibold after:content-[''] after:right-0 after:top-6 after:bottom-0 after:transition-all after:ease-in-out duration-[3s] after:w-1/2 after:absolute after:h-[2px] md:hover:after:w-full md:after:bg-blue-600 after:rounded-full"
                    to="/"
                >
                    Beejayofgod
                </Link>
                {openNav && (
                    <div
                        className="fixed w-1/5 inset-0 bg-black/40 z-40 md:hidden"
                        onClick={() => setOpenNav(false)}
                    ></div>
                )}

                <nav
                    className={`flex flex-col md:p-2 p-4 fixed md:static md:h-fit md:w-fit top-0 right-0 h-screen overflow-hidden  bg-white ${
                        openNav ? "w-4/5" : "hidden"
                    } `}
                >
                    <p
                        onClick={() => {
                            setOpenNav(!openNav);
                            document.body.classList.remove(
                                "overflow-hidden",
                                "h-screen",
                                "fixed",
                                "w-full"
                            );
                        }}
                        className="text-2xl text-right border transition pr-2"
                    >
                        +
                    </p>
                    <ul className="flex py-1 md:[&>*]:flex-1 [&>*]:text-center md:flex-row flex-col gap-4 items-start capitalize md:w-md w-full  ">
                        {Links.map((link, index) => (
                            <li
                                key={index}
                                className={`transition-colors ease-in-out text-base w-full duration-700  hover:text-blue-400 cursor-pointer capitalize ${
                                    active === index
                                        ? "text-blue-500 font-semibold bg-gray-300 rounded-md p-3"
                                        : "text-gray-600"
                                }`}
                                onClick={(e) => {
                                    document.body.classList.remove(
                                        "overflow-hidden",
                                        "h-screen",
                                        "fixed",
                                        "w-full"
                                    );
                                    handleClick(index, e);

                                    setTimeout(() => {
                                        setOpenNav(false);
                                    }, 1000);
                                }}
                            >
                                <NavLink
                                    to={link.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(index, e);
                                    }}
                                    className="w-full md:inline flex justify-start h-full focus:outline-none capitalize "
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
                            className=" w-1/5 transition-all duration-[350ms] ease-in-out"
                        >
                            <div
                                className={`h-2 rounded-xs aspect-square mx-auto  bg-blue-500 ${
                                    spin ? "animate-spin duration-500" : ""
                                }`}
                            />
                        </div>
                    </div>
                </nav>
                <div>
                    <button className="theme-switcher">butn</button>
                    <button>
                        <LucideCross
                            onClick={() => setOpenNav(!openNav)}
                            className="text-2xl md:hidden"
                        />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Navbar;
