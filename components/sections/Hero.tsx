import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Props {
    onEnquire: () => void;
}


export default function Hero({ onEnquire }: Props) {
    return (
        <section id="home" className="py-8 lg:py-12">
            <Container>
                <div className="mx-auto flex min-h-100 w-full max-w-7xl flex-col items-center justify-between rounded-3xl bg-[#edf5ff] px-8 py-10 shadow-2xl lg:flex-row lg:px-14 lg:py-8">

                    {/* Left Content */}
                    <div className="order-2 flex w-full flex-col items-center text-center lg:order-1 lg:w-1/2 lg:items-start lg:text-left">
                        <h1 className="max-w-xl text-3xl xl:font-bold font-semibold leading-tight xl:text-6xl">
                            Next-Gen{" "}
                            <span className="text-[#287ae3]">Expertise</span>
                            <br />
                            For Your{" "}
                            <span className="text-[#287ae3]">Enterprise</span>
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600 lg:max-w-lg">
                            Empower your workforce with industry-leading programs designed to build
                            future-ready skills and drive measurable business outcomes.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
                            <div className="flex items-center gap-2">
                                <span className="text-xl text-green-600">✔</span>
                                <span className="text-base font-medium">Tailored Solutions</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xl text-green-600">✔</span>
                                <span className="text-base font-medium">Industry Insights</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xl text-green-600">✔</span>
                                <span className="text-base font-medium">Expert Guidance</span>
                            </div>
                        </div>

                        <Button onClick={onEnquire} className="mt-10 w-full sm:w-fit">
                            Enquire Now
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 mt-10 flex w-full justify-center lg:order-2 lg:mt-0 lg:w-1/2">
                        <img
                            src="/corporate-big-hero-v4.webp"
                            alt="Hero Image"
                            className="w-full h-full max-w-md"
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
}