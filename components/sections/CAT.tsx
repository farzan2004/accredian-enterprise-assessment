import Container from "../ui/Container";

export default function CAT() {
    return (
        <section id="cat" className="py-14 md:py-18">
            <Container>
                {/* Heading */}
                <div className="bg-[#f5f9ff]">
                    <div className="text-center">
                        <h2 className="pt-2 text-2xl lg:text-4xl font-bold">
                            The <span className="text-[#287ae3]">CAT Framework</span>
                        </h2>

                        <p className="mt-2 text-base font-semibold">
                            Our Proven Approach to{" "}
                            <span className="text-[#287ae3]">Learning Excellence</span>
                        </p>
                    </div>

                    {/* Framework */}
                    <div className="mx-auto mt-14 rounded-3xl p-6 md:p-10">
                        <img
                            src="CAT/catV2.svg"
                            alt="CAT Framework"
                            className="mx-auto h-auto w-full max-w-5xl object-contain"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}