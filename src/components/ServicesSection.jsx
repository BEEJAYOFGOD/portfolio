import {
    Palette,
    Code2,
    Smartphone,
    BarChart3,
    Rocket,
    Globe,
    Search,
    Layers,
} from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: Palette,
            title: "UI/UX Implementation",
            description:
                "Transforming your Figma designs into pixel-perfect, interactive React and Next.js applications. I specialize in converting static designs into dynamic, responsive components while maintaining design consistency and implementing smooth animations and micro-interactions that enhance user experience.",
            gradient: "from-purple-50 to-purple-300",
            iconBg: "bg-purple-500",
        },
        {
            icon: Code2,
            title: "React & Next.js Development",
            description:
                "Building scalable, production-ready web applications using modern React patterns and Next.js features. This includes server-side rendering, static site generation, API routes, and advanced optimization techniques to ensure your application loads fast, ranks well in search engines, and provides an exceptional user experience across all devices.",
            gradient: "from-blue-50 to-blue-300",
            iconBg: "bg-blue-600",
        },

        {
            icon: BarChart3,
            title: "Analytics & Dashboards",
            description:
                "Creating interactive data visualization dashboards that transform complex business data into actionable insights. Using libraries like Chart.js, D3.js, and Recharts, I build custom analytics interfaces that help you track KPIs, monitor user behavior, and make data-driven decisions with real-time updates and intuitive filtering options.",
            gradient: "from-indigo-50 to-indigo-300",
            iconBg: "bg-indigo-600",
        },

        {
            icon: Globe,
            title: "Landing Pages & Websites",
            description:
                "Designing and developing high-converting landing pages and corporate websites that establish your professional online presence. I focus on conversion optimization, fast loading times, SEO-friendly structure, and compelling call-to-actions that drive business results. Each page is crafted to tell your story and convert visitors into customers.",
            gradient: "from-teal-50 to-teal-300",
            iconBg: "bg-teal-600",
        },

        {
            icon: Search,
            title: "SEO & Performance",
            description:
                "Implementing comprehensive search engine optimization strategies and performance enhancements to maximize your online visibility and user experience. This includes technical SEO, Core Web Vitals optimization, lazy loading, code splitting, and advanced caching strategies that improve your search rankings and conversion rates.",
            gradient: "from-yellow-50 to-yellow-300",
            iconBg: "bg-yellow-500",
        },

        {
            icon: Layers,
            title: "API Integration",
            description:
                "Seamlessly connecting your frontend applications with backend services, third-party APIs, and existing business systems. I handle complex data fetching, state management, error handling, and real-time updates using modern techniques like React Query, SWR, and WebSockets to ensure your application stays synchronized and responsive.",
            gradient: "from-violet-50 to-violet-300",
            iconBg: "bg-violet-600",
        },
    ];

    return (
        <section
            className="h-fit relative"
            id="services"
            data-section="services"
        >
            <div className="mb-16">
                <h2
                    className={`md:text-5xl w-fit text-3xl font-bold ml-8 md:mx-auto md:text-center pb-2 relative tracking-wide text-blue-500 after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-1 after:w-full hover:after:w-full after:duration-500 transition-all after:transition-all after:bg-blue-500`}
                >
                    What I Offer
                </h2>
            </div>

            <div className="md:grid md:grid-cols-2 max-w-5xl mx-auto md:gap-10 flex flex-col gap-6 px-6 md:px-0">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className={`rounded-2xl shadow-md p-6 bg-gradient-to-br ${service.gradient}`}
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-md ${service.iconBg} mb-4`}
                            >
                                <Icon className="text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-700">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;
