import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavContext } from "@/context/navContext";
import { AlignJustify } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const MobileNav = () => {
    const { handleClick, active, Links } = useNavContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (index) => {
        handleClick(index);
        setIsOpen(false); // Close sheet after navigation
    };

    return (
        <div className="lg:hidden w-full px-4 justify-between flex items-center">
            <NavLink
                to="/"
                className="text-blue-600 md:text-base text-xl flex relative flex-col font-semibold after:content-[''] after:left-0 after:top-8 after:bottom-0 after:transition-all after:ease-in-out duration-300 after:w-full after:absolute after:h-[2px] md:hover:after:w-full after:bg-blue-600 after:rounded-full"
            >
                Beejayofgod
            </NavLink>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button
                        className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        <AlignJustify className="w-6 h-6 text-blue-600" />
                    </button>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="bg-white w-[250px] text-black transition-transform duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left z-50 p-4"
                >
                    <NavLink
                        to="/"
                        onClick={() => handleNavClick(0)}
                        className="text-blue-600 flex text-xl gap-8 relative flex-col-reverse font-semibold after:content-[''] after:top-8 after:transition-all after:ease-in-out duration-300 after:absolute after:w-2/6 after:h-[2px] after:bg-blue-600 after:rounded-full mb-8"
                    >
                        Beejayofgod
                    </NavLink>

                    <nav className="flex flex-col gap-6 items-start ">
                        {Links.map((link, index) => (
                            <NavLink
                                key={link.id || index}
                                to={link.path}
                                onClick={() => handleNavClick(index)}
                                className={`text-base font-medium transition-all capitalize duration-200 relative py-2 ${
                                    active === index
                                        ? "text-blue-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] uppercase after:bg-blue-600 after:rounded-full"
                                        : "text-gray-700 hover:text-blue-600"
                                }`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
