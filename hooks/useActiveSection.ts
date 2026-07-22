"use client";

import { useEffect, useState } from "react";

export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;

                        setActiveSection(id);

                        window.history.replaceState(null, "", `#${id}`);
                    }
                });
            },
            {
                threshold: 0.55,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return activeSection;
}