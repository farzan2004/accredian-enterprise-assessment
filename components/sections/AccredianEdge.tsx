'use client';
import Image from "next/image";
import Container from "../ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
    {
        title: "Product & Innovation Hub",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 w-6 h-6 sm:w-14 sm:h-14"
            >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
            </svg>
        )
    },
    {
        title: "Gen-AI Mastery",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-[#2F6CE5]"
            >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
            </svg>
        ),
    },
    {
        title: "Leadership Elevation",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-[#2F6CE5]"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Tech & Data Insights",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-[#2F6CE5]"
            >
                <line x1="12" x2="12" y1="20" y2="10" />
                <line x1="18" x2="18" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
        ),
    },
    {
        title: "Operations Excellence",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-[#2F6CE5]"
            >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        title: "Digital Enterprise",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-[#2F6CE5]"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
    {
        title: "Fintech Innovation Lab",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-[#2F6CE5]"
            >
                <rect width="20" height="12" x="2" y="6" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
            </svg>
        ),
    },
];

const items2 = [

    {
        title: "Tech Professionals",
        desc: "Enhance expertise, embrace tech, drive innovation.",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-14 sm:h-14 mb-2"
        >
            <path d="m9 10 2 2 4-4" />
            <rect width={20} height={14} x={2} y={3} rx={2} />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
        </svg>)
    },

    {
        title: "Non-Tech Professionals",
        desc: "Adapt digitally, collaborate in tech environments.",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-14 sm:h-14 mb-2"
        >
            <path d="m14.5 12.5-5-5" />
            <path d="m9.5 12.5 5-5" />
            <rect width={20} height={14} x={2} y={3} rx={2} />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
        </svg>)
    },

    {
        title: "Emerging Professionals",
        desc: "Develop powerful skills for rapid career growth.",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-14 sm:h-14 mb-2"
        >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>)
    },

    {
        title: "Senior Professionals",
        desc: "Strengthen leadership, enhance strategic decisions.",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-14 sm:h-14 mb-2"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width={20} height={14} x={2} y={6} rx={2} />
        </svg>)
    },

]

function CourseCard({ course }: { course: any }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">

            <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={220}
                className="h-52 w-full object-cover"
            />

            <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-[#287ae3]">
                    {course.title}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-4 text-gray-700">
                    {course.desc}
                </p>

            </div>

        </div>
    );
}

function AudienceCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {

    return (
        <div className="flex items-start gap-3">

            <div className="shrink-0 text-white">
                {icon}
            </div>

            <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {title}
                </h3>
                <p className="mt-1 lg:mt-2 text-sm lg:text-base leading-5 text-white/90">
                    {desc}
                </p>
            </div>
        </div>
    )
}

const courses = [
    {
        title: "Program Specific",
        desc: "Certificate, Executive, Post Graduate Certificate",
        image: "/Accredian_edge/project-management-v2.webp",
    },
    {
        title: "Industry Specific",
        desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
        image: "/Accredian_edge/digital-transformation-v2.webp",
    },
    {
        title: "Topic Specific",
        desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
        image: "/Accredian_edge/data-science-v2.webp",
    },
    {
        title: "Level Specific",
        desc: "Senior Leadership, Mid-Career Professionals, Freshers",
        image: "/Accredian_edge/senior-management-v2.webp",
    },
];

export default function AccredianEdge() {
    return (
        <section id="clients" className="py-14 md:py-18">
            <Container>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        The{" "}
                        <span className="text-[#287ae3]">Accredian Edge</span>
                    </h2>

                    <p className="mt-2 text-base font-semibold">
                        Key Aspects of {" "}
                        <span className="text-[#287ae3]">Our Strategic Training</span>
                    </p>
                </div>
                {/* Desktop */}
                <div className="mt-6 hidden justify-center lg:flex">
                    <div className="w-full">
                        <img
                            src="/Accredian_edge/accredian-edge-usp-v3.svg"
                            alt="Accredian Edge"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>
                {/* Mobiles */}
                <div className="mt-6 justify-center lg:hidden">
                    <div className="w-full">
                        <img
                            src="/Accredian_edge/accredian-edge-usp-mobile.svg"
                            alt="Accredian Edge"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center pt-8 pb-4 md:pt-10 md:pb-6">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Our{" "}
                        <span className="text-[#287ae3]">Domain Expertise</span>
                    </h2>

                    <p className="mt-2 text-base font-semibold">
                        <span className="text-[#287ae3]">Specialized Programs {" "}</span>
                        Designed to Fuel Innovation
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6 min-[480px]:grid-cols-3">
                    {items.map((item, index) => (
                        <div
                            key={item.title}
                            className={`
                flex flex-col items-center justify-center
                rounded-2xl border border-gray-200 bg-white
                px-6 py-8 shadow-md transition
                hover:-translate-y-1 hover:shadow-lg

                ${index === items.length - 1
                                    ? "col-span-2 min-[480px]:col-span-1 min-[480px]:col-start-2"
                                    : ""
                                }
            `}
                        >
                            {/* SVG goes here */}

                            <div className="mb-5 text-[#2F6CE5]">
                                {item.icon}
                            </div>

                            <h3 className="text-center text-2xl font-semibold">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <div className="text-center pt-8 pb-4 md:pt-10 md:pb-6">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Tailored{" "}
                        <span className="text-[#287ae3]">Course Segmentation</span>
                    </h2>

                    <p className="mt-2 text-base font-semibold">
                        Explore {" "}
                        <span className="text-[#287ae3]">Custom-fit Courses {" "}</span>
                        Designed to Address Every Professional Focus
                    </p>
                </div>
                <div className="mt-6 hidden lg:grid grid-cols-4 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>
                <div className="relative mt-6 lg:hidden">

                    <button className="course-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
                        <ChevronLeft />
                    </button>

                    <button className="course-next absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
                        <ChevronRight />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".course-prev",
                            nextEl: ".course-next",
                        }}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.title}>
                                <CourseCard course={course} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="rounded-3xl bg-[#287ae3] px-8 py-10 mt-16 lg:px-10 lg:pt-10 lg:pb-0">

                    <div className="grid gap-10 lg:grid-cols-[1.25fr_1.6fr]">

                        {/* Left */}
                        <div>
                            <p className="text-xl font-medium text-white">
                                Who Should Join?
                            </p>

                            <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-tight text-white">
                                Strategic Skill Enhancement
                            </h2>

                            {/* Hidden below lg */}
                            <div className="mt-12 hidden justify-center lg:flex">
                                <img
                                    src="Accredian_edge/imagehuman.png"
                                    alt=""
                                    className="w-[75%] max-w-md object-contain"
                                />
                            </div>

                        </div>

                        {/* Right */}
                        <div
                            className="
                    grid
                    grid-cols-1
                    gap-5

                    md:grid-cols-2
                "
                        >
                            {items2.map((item) => (
                                <AudienceCard
                                    key={item.title}
                                    icon={item.icon}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}

                        </div>

                    </div>

                </div>
            </Container>
        </section>

    );
}