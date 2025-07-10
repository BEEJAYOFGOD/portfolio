// AppContext.js
import { createContext, useContext, useState } from "react";

// 1. Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const NavContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useNavContext = () => {
    return useContext(NavContext);
};

// 2. Create the provider component
export const NavProvider = ({ children }) => {
    const [active, setActive] = useState(0);
    const [spin, setSpin] = useState(false);
    const [click, setClick] = useState(false);

    const Links = [
        { name: "home", path: "/" },
        { name: "about", path: "#about" },
        { name: "services", path: "#services" },

        { name: "projects", path: "#projects" },
        { name: "contact", path: "#contact" },
    ];

    const handleClick = (index) => {
        setClick(true);
        console.log(active);
        setActive(index);
        setSpin(true);

        const section = document.getElementById(
            Links ? Links[index]?.name : "home"
        );
        // console.log(links);
        console.log(section);
        section?.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            setSpin(false);
            setClick(false);
        }, 500); // Reset spin after 3 seconds
    };

    return (
        <NavContext.Provider
            value={{
                handleClick,
                setSpin,
                spin,
                Links,
                active,
                setActive,
                click,
                setClick,
            }}
        >
            {children}
        </NavContext.Provider>
    );
};
