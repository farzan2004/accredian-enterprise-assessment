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

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white shadow-lg">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-start">
                        <Image
                            src="/logo.webp" // change if yours has another name
                            alt="Accredian"
                            width={120}
                            height={28}
                            priority
                        />
                    </Link>

                    {/* Desktop */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="font-medium hover:text-blue-600"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile */}
                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </Container>

            {open && (
                <div className="absolute right-4 top-full mt-2 max-w-64 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 lg:hidden">
                    <Container>
                        <nav className="flex flex-col py-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="py-3"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
}