"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

interface Props {
    onEnquire: () => void;
}
export default function Testimonials({ onEnquire }: Props) {
    const [current, setCurrent] = useState(0);

    return (
        <section id="testimonials" className="scroll py-20">
            <Container>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold lg:text-4xl">
                        Testimonials from{" "}
                        <span className="text-[#287ae3]">Our Partners</span>
                    </h2>

                    <p className="mt-3 text-lg text-gray-600">
                        What <span className="text-[#287ae3]">Our Clients</span> Are Saying
                    </p>
                </div>

                {/* Desktop */}
                <div className="mt-14 hidden lg:flex items-center gap-4">
                    <button
                        onClick={() => setCurrent((prev) => prev - 1)}
                        disabled={current === 0}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="grid flex-1 grid-cols-2 gap-6">
                        {testimonials.slice(current, current + 2).map((item) => (
                            <div
                                key={item.company}
                                className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img
                                    src={item.logo}
                                    alt={item.company}
                                    className="h-12 object-contain"
                                />

                                <p className="mt-6 text-base leading-6 text-gray-700">
                                    "{item.review}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrent((prev) => prev + 1)}
                        disabled={current >= testimonials.length - 2}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Tablet & Mobile */}
                <div className="mt-14 flex items-center gap-4 lg:hidden">
                    {/* Left */}
                    <button
                        onClick={() => setCurrent((prev) => prev - 1)}
                        disabled={current === 0}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronLeft size={14} />
                    </button>

                    {/* Card */}
                    <div
                        key={current}
                        className="flex-1 rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300"
                    >
                        <img
                            src={testimonials[current].logo}
                            alt={testimonials[current].company}
                            className="h-12 object-contain"
                        />

                        <p className="mt-6 text-base leading-5  text-gray-700">
                            "{testimonials[current].review}"
                        </p>
                    </div>

                    {/* Right */}
                    <button
                        onClick={() => setCurrent((prev) => prev + 1)}
                        disabled={current === testimonials.length - 1}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronRight size={14} />
                    </button>
                </div>

                {/* Mobile Indicators */}
                <div className="mt-8 flex justify-center gap-2 lg:hidden">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${current === index
                                ? "bg-[#287ae3] w-6"
                                : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </Container>

            <Container>
                <div className="mt-16 relative overflow-hidden rounded-3xl bg-[#287ae3]"
                    style={{
                        backgroundImage: "url('/cta-circle.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right center",
                        backgroundSize: "650px",
                    }}
                >
                    <div className="absolute -right-20 -bottom-40 h-[500px] w-[500px] rounded-full border border-white/10" />
                    <div className="absolute -right-10 -bottom-32 h-[380px] w-[380px] rounded-full border border-white/10" />
                    <div className="absolute right-10 -bottom-20 h-[250px] w-[250px] rounded-full border border-white/10" />

                    <div className="relative z-10 flex flex-col items-center gap-8 px-8 py-10 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">

                        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-white shadow-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={0}
                                className="w-full h-full text-universal"
                            >
                                <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z" />
                            </svg>
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white">
                                Want to Learn More About Our Training Solutions?
                            </h2>

                            <p className="mt-2 text-lg text-blue-100">
                                Get Expert Guidance for Your Team’s Success!
                            </p>
                        </div>

                        {/* Button */}
                        <button onClick={onEnquire}
                            className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#287ae3]
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                active:scale-95"
                        >
                            Contact Us →
                        </button>
                    </div>
                </div>
            </Container>
        </section>

    );
}