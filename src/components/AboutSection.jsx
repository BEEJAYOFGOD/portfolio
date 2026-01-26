import { FileText, Phone } from "lucide-react";
import myPic from "../assets/img/avatar.jpg";

const AboutSection = () => {
    return (
        <section
            id="about"
            data-section="about"
            className="flex md:flex-row flex-col gap-2 h-[calc(100vh-5rem)] items-center items-center  max-w-5xl mx-auto "
        >
            <div className="hidden md:flex ">
                <img
                    className="w-180  h-full mx-auto  "
                    src={myPic}
                    alt="Adekunle Bolaji"
                />
            </div>

            <div className="px-6">
                <h2 className="text-blue-500 w-xs pb-2 md:text-5xl text-3xl relative font-bold  after:absolute after:bottom-0  after:left-0 after:content-['']  after:h-1  md:after:w-4/5 after:w-1/2 after:bg-blue-500">
                    ABOUT ME
                </h2>
                <div className="flex md:flex-row items-start flex-col justify-start gap-4">
                    <p className="font-bold mt-4 text-gray-700">
                        ADEKUNLE BOLAJI - DEVELOPER
                    </p>
                </div>

                <p className="mt-4 md:w-2xl text-left opacity-60 text-sm">
                    I'm a Computer Engineering student and frontend developer
                    with a knack for solving problems and building clean,
                    responsive websites for brands, businesses, and startups.
                    <br />
                    My coding journey kicked off when I took a Python course in
                    school and realized I enjoyed telling computers what to do
                    (and having them actually listen). When I'm not writing code
                    or refining user interfaces, you'll probably catch me
                    unwinding with a heated round of eFootball—my way of
                    debugging life.
                </p>

                <div className="flex mt-4 flex-col md:flex-row items-left gap-4">
                    <a
                        href="https://1drv.ms/w/c/04c72029ead7f2ae/IQCimRdWNArKQaa2imz0FfZOAbaxYkO4lJIHjFsa2fNv2qs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-4 md:text-base px-6 md:py-2 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <FileText size={20} />
                        View Resume
                    </a>
                    <a
                        href=""
                        className="flex items-center justify-center md:text-base gap-4 border-blue-500 border px-6 py-4 md:py-2 rounded-md text-blue-600"
                    >
                        <Phone className="animate-bounce" />
                        Book a call with me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
