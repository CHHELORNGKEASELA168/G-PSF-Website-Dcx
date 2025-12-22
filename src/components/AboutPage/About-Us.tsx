import React from "react";

type Objective = {
    id: number;
    title: string;
    description: string;
};

const objectivesData: Objective[] = [
    {
        id: 1,
        title: "Objective 1",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    },
    {
        id: 2,
        title: "Objective 2",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    },
    {
        id: 3,
        title: "Objective 3",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    },
];

// Bigger, clean hex node
const HexNode = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-white">
        <svg width="48" height="48" viewBox="0 0 100 100" className="block">
            <polygon
                points="50,6 86,28 86,72 50,94 14,72 14,28"
                fill="white"
                stroke="#1e3a8a"
                strokeWidth="6"
            />
        </svg>
        <span className="absolute w-3.5 h-3.5 rounded-full bg-[#1e3a8a]" />
    </div>
);

const AboutUs: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
                    {/* LEFT */}
                    <div className="lg:sticky lg:top-10">
                        <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                            About Us
                        </p>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            What is the G-PSF?
                        </h1>

                        <div className="mt-5 h-1.5 bg-orange-500 w-56 sm:w-72 md:w-96 lg:w-[360px] translate-x-0 sm:translate-x-8 md:translate-x-25" />

                        <p className="mt-8 max-w-md text-lg sm:text-xl leading-relaxed font-bold text-[#1e3a8a] translate-x-0 sm:translate-x-8 md:translate-x-25">
                            The G-PSF is a structured dialogue platform chaired by the Prime
                            Minister of Cambodia, bringing together senior government officials
                            and private sector leaders to address policy and regulatory
                            constraints affecting economic growth.
                        </p>

                    </div>

                    {/* RIGHT */}
                    {/* ✅ Responsive offset like your screenshot (down on large screens only) */}
                    <div className="lg:pt-24 xl:pt-80">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
                            Objectives
                        </h2>

                        {/* timeline wrapper */}
                        <div className="relative">
                            {/* ✅ line centered behind hex nodes */}
                            <div className="absolute left-6 top-0 bottom-0 w-[4px] bg-orange-500" />

                            <div className="space-y-12">
                                {objectivesData.map((obj) => (
                                    <div key={obj.id} className="relative flex items-start gap-6">
                                        {/* node */}
                                        <div className="relative z-10">
                                            <HexNode />
                                        </div>

                                        {/* content */}
                                        <div className="pt-1">
                                            <h3 className="text-xl font-extrabold text-gray-900">
                                                {obj.title}
                                            </h3>
                                            <p className="mt-2 text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm">
                                                {obj.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* end right */}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
