import { NavLink, Link } from "react-router-dom";
import { useNavContext } from "../context/navContext";

const Navbar = () => {
    const { handleClick, active, spin, Links } = useNavContext();

    return (
        <>
            <header className="fixed top-0 border-gray-200 md:backdrop-blur-md flex justify-between items-center px-46 w-full text-sm shadow-xs z-50">
                <Link
                    className="text-blue-600 text-base flex relative flex-col font-semibold after:content-[''] after:right-0 after:top-6 after:bottom-0 after:transition-all after:ease-in-out duration-[3s] after:w-1/2 after:absolute after:h-[2px] hover:after:w-full after:bg-blue-600 after:rounded-full"
                    to="/"
                >
                    Beejayofgod
                </Link>

                <nav className="flex flex-col p-2">
                    <ul className="flex py-1 [&>*]:flex-1 [&>*]:text-center capitalize w-md">
                        {Links.map((link, index) => (
                            <li
                                key={index}
                                className={`transition-colors ease-in-out text-base duration-700 hover:text-blue-400 cursor-pointer capitalize ${
                                    active === index
                                        ? "text-blue-500 font-semibold"
                                        : "text-gray-600"
                                }`}
                            >
                                <NavLink
                                    to={link.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(index, e);
                                    }}
                                    className="w-full h-full focus:outline-none capitalize"
                                    type="button"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex w-full">
                        <div
                            style={{
                                transform: `translateX(${active * 100}%)`,
                            }}
                            className=" w-1/5 transition-all duration-[350ms] ease-in-out"
                        >
                            <div
                                className={`h-2 rounded-xs w-2 mx-auto  bg-blue-500 ${
                                    spin ? "animate-spin duration-500" : ""
                                }`}
                            />
                        </div>
                    </div>
                </nav>
                <button className="theme-switcher">butn</button>
            </header>
        </>
    );
};

export default Navbar;
