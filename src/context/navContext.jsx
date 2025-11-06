// AppContext.js
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const Links = useMemo(
        () => [
            { name: "home", path: "/" },
            { name: "about", path: "#about" },
            { name: "services", path: "#services" },

            { name: "projects", path: "#projects" },
            { name: "contact", path: "#contact" },
        ],
        []
    );

    const handleClick = (index) => {
        setClick(true);
        console.log(active);
        setActive(index);
        setSpin(true);

        const section = document.getElementById(
            Links ? Links[index]?.name : ""
        );

        Links[index]?.name == "home"
            ? navigate("/")
            : navigate(`/${Links[index]?.path}`);

        // console.log(links);
        console.log(section);
        section?.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            setSpin(false);
            setClick(false);
        }, 900); // Reset spin after 3 seconds
    };

    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // setClick(!click);
                    if (entry.isIntersecting && !click) {
                        const section =
                            entry.target.getAttribute("data-section");

                        let sectionIndex = Array.from(Links).findIndex(
                            (obj) => obj.name === section
                        );

                        // navigate(`/#${Links[sectionIndex]?.name}`);
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

                threshold: 0.3, // or adjust threshold
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [Links, click, setActive, setSpin]);

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
