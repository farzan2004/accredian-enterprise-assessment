import Container from "../ui/Container";

const steps = [
    {
        step: "1",
        title: "Skill Gap Analysis",
        desc: "Assess team skill gaps and developmental needs.",
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
            className="text-8xl"
        >
            <path d="M12 16v5" />
            <path d="M16 14v7" />
            <path d="M20 10v11" />
            <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
            <path d="M4 18v3" />
            <path d="M8 14v7" />
        </svg>),
    },
    {
        step: "2",
        title: "Customized Training Plan",
        desc: "Create a tailored roadmap addressing organizational goals.",
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
            className="text-8xl"
        >
            <path d="M2 3h20" />
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
            <path d="m7 21 5-5 5 5" />
        </svg>),
    },
    {
        step: "3",
        title: "Flexible Program Delivery",
        desc: "Deliver adaptable programs aligned with industry and organizational needs.",
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
            className="text-8xl"
        >
            <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
            <rect x={2} y={3} width={20} height={14} rx={2} />
        </svg>),
    },
];

interface Step {
    step: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
}

function StepCard({ step }: { step: Step }) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-blue-200 bg-[#eef5ff] px-5 py-5 shadow-md">
            {/* Step Number */}
            <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 bg-white text-[10px] font-bold">
                {step.step}
            </div>

            {/* Side Bars */}
            <div className="absolute left-0 top-6 h-[62%] w-1 rounded-r-full bg-[#287ae3] md:w-1.5 lg:w-2" />
            <div className="absolute right-0 top-6 h-[62%] w-1 rounded-l-full bg-[#287ae3] md:w-1.5 lg:w-2" />

            <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#287ae3] text-white sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                    {step.icon}
                </div>

                <h3 className="mt-4 text-center text-base font-bold text-gray-900 sm:text-lg lg:text-xl">
                    {step.title}
                </h3>

                <p className="mt-2 text-center text-xs leading-5 text-gray-700 md:block lg:text-sm">
                    {step.desc}
                </p>
            </div>
        </div>
    );
}

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="scroll py-7 md:py-9">
            <Container>
                {/* Steps */}
                <div className="text-center pt-8 pb-4 md:pt-9 md:pb-6">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        How We{" "}
                        <span className="text-[#287ae3]">Deliver Results {" "}</span>
                        That Matter?
                    </h2>

                    <p className="mt-2 text-base font-semibold">
                        A Structured Three-Step Approach to{" "}
                        <span className="text-[#287ae3]">Skill Development</span>
                    </p>
                </div>

                <div
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                >
                    {steps.map((step, index) => {
                        if (index === 2) {
                            return (
                                <div
                                    key={step.step}
                                    className="md:col-span-2 xl:col-span-1 flex justify-center"
                                >
                                    <div className="w-full md:max-w-md xl:max-w-none">
                                        <StepCard step={step} />
                                    </div>
                                </div>
                            );
                        }

                        return <StepCard key={step.step} step={step} />;
                    })}
                </div>
            </Container>
        </section>
    );
}