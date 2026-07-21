import Container from "@/components/ui/Container";
const stats = [
    {
        value: "10K+",
        text: "Professionals Trained For Exceptional Career Success",
    },
    {
        value: "200+",
        text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
        value: "5K+",
        text: "Active Learners Engaged In Dynamic Courses",
    },
];

export default function Stats() {
    return (
        <section id="stats" className="py-14 md:py-18">
            <Container>
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Our <span className="text-[#287ae3]">Track Record</span>
                    </h2>

                    <p className="mt-4 text-lg">
                        The Numbers Behind{" "}
                        <span className="text-[#287ae3]">Our Success</span>
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-5xl">
                    <div className="mt-16 grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
                        {stats.map((item) => (
                            <div
                                key={item.value}
                                className="flex flex-col items-center px-6 py-6 text-center"
                            >
                                <div className="rounded-full bg-[#d9e8ff] px-6 py-2 text-2xl font-bold text-[#287ae3]">
                                    {item.value}
                                </div>

                                <p className="mt-5 max-w-xs text-base font-semibold leading-8">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </section>
    );
}