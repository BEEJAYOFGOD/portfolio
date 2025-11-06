import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <header className="sticky h-20 flex items-center top-0 w-full border-b z-49  mx-auto bg-secondary ">
            {/* Desktop */}
            <MainNav />

            {/* Mobile */}

            <MobileNav />
        </header>
    );
};

export default Navbar;
