"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Stats", href: "#stats" },
    { label: "Clients", href: "#clients" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "CAT", href: "#cat" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQs", href: "#faqs" },
    { label: "Testimonials", href: "#testimonials" },
];

interface NavbarProps {
    activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white shadow-lg">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-start">
                        <Image
                            src="/logo.webp"
                            alt="Accredian"
                            width={120}
                            height={28}
                            priority
                        />
                    </Link>

                    {/* Desktop */}
                    <nav className="hidden items-center gap-10 lg:flex">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`group relative inline-block pb-1 text-base font-medium transition-colors duration-300 ${isActive
                                        ? "text-[#287ae3]"
                                        : "text-gray-800 hover:text-[#287ae3]"
                                        }`}
                                >
                                    {item.label}

                                    <span
                                        className={`absolute left-0 bottom-0 h-[2px] bg-[#287ae3] transition-all duration-300 ${isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </a>
                            );
                        })}
                    </nav>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden"
                    >
                        {open ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute right-4 top-full mt-3 w-48 overflow-hidden rounded-2xl border border-gray-100 bg-white py-3 shadow-2xl lg:hidden">
                    <nav className="flex flex-col">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`group relative mx-2 block px-3 py-2 text-base font-medium transition-colors duration-300 ${isActive
                                            ? "text-[#287ae3]"
                                            : "text-gray-700 hover:text-[#287ae3]"
                                        }`}
                                >
                                    {item.label}

                                    <span
                                        className={`absolute bottom-2 left-4 h-[2px] bg-[#287ae3] transition-all duration-300 ${isActive ? "w-[calc(100%-2rem)]" : "w-0 group-hover:w-[calc(100%-2rem)]"
                                            }`}
                                    />
                                </a>

                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}