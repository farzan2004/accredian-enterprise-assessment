"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import Container from "../ui/Container";
import { faqCategories } from "@/data/faqs";
import Button from "../ui/Button";

export default function FAQs() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const [mobileStart, setMobileStart] = useState(0);
    const faqs = faqCategories[selectedCategory].faqs;

    const visibleCategories = faqCategories.slice(mobileStart, mobileStart + 2);

    return (
        <section id="faqs" className="py-7 md:py-9">
            <Container>
                {/* Heading */}
                <div className="text-center pt-8 pb-4 md:pt-9 md:pb-2">
                    <h2 className="text-2xl font-bold lg:text-4xl">
                        Frequently Asked{" "}
                        <span className="text-[#287ae3]">Questions</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 lg:flex-col lg:justify-start">
                        {/* Desktop + Tablet */}
                        <div className="hidden sm:flex flex-wrap justify-center gap-4 lg:flex-col lg:justify-start">
                            {faqCategories.map((category, index) => (
                                <button
                                    key={category.title}
                                    onClick={() => {
                                        setSelectedCategory(index);
                                        setOpenQuestion(null);
                                    }}
                                    className={`rounded-xl cursor-pointer border px-5 py-4 text-lg font-semibold transition  ${selectedCategory === index
                                        ? "border-[#68a4f3] text-[#287ae3] shadow-lg"
                                        : "border-gray-300 text-gray-600 hover:border-[#287ae3] hover:scale-105"
                                        }`}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 sm:hidden">

                            {/* Left Arrow */}
                            <button
                                onClick={() => setMobileStart((prev) => prev - 1)}
                                disabled={mobileStart === 0}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            {/* Visible Buttons */}
                            <div className="flex flex-1 gap-3">
                                {visibleCategories.map((category) => {
                                    const realIndex = faqCategories.findIndex(
                                        (item) => item.title === category.title
                                    );

                                    return (
                                        <button
                                            key={category.title}
                                            onClick={() => {
                                                setSelectedCategory(realIndex);
                                                setOpenQuestion(null);
                                            }}
                                            className={`flex-1 cursor-pointer rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 ${selectedCategory === realIndex
                                                ? "border-[#287ae3] bg-[#eef5ff] text-[#287ae3] shadow-md"
                                                : "border-gray-300 text-gray-600 hover:border-[#287ae3] hover:bg-[#eef5ff]"
                                                }`}
                                        >
                                            {category.title}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={() => setMobileStart((prev) => prev + 1)}
                                disabled={mobileStart >= faqCategories.length - 2}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100"
                            >
                                <ChevronRight size={18} />
                            </button>

                        </div>
                    </div>

                    {/* Questions */}
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="border-b border-gray-200 cursor-pointer"
                            >
                                <button
                                    onClick={() =>
                                        setOpenQuestion(
                                            openQuestion === index ? null : index
                                        )
                                    }
                                    className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
                                >
                                    <span className="text-lg font-semibold">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-300
                                            ${openQuestion === index ? "rotate-180" : ""}
                                        `}
                                    />
                                </button>

                                <div
                                    className={`grid cursor-pointer transition-all duration-300 ease-in-out ${openQuestion === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="pb-6 text-gray-600 leading-7">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <Button className="mt-10 w-fit">
                        Enquire Now
                    </Button>
                </div>
            </Container>
        </section>
    );
}