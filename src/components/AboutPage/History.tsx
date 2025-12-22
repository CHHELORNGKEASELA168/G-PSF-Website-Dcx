import React from "react";

type Objective = {
    id: number;
    title: string;
    description: string;
};

const objectivesData: Objective[] = [
    {
        id: 1,
        title: "Secretariat & Government Coordination",
        description:
            "Serves as the government Secretariat of the G- PSF,coordinating Working Group activities and supporting theorganisation of G - PSF plenaries and consultations.",
    },
{
    id: 2,
        title: "Monitoring & Accountability",
            description:
    "Tracks policy issues, reform commitments, and implementation progress arising from Working Group discussions and G-PSF Plenaries to strengthen transparency and accountability.",
    },
{
    id: 3,
        title: "Data Management & Institutional Support",
            description:
    "Supports institutional systems, reporting, and data management to ensure public–private dialogue delivers timely, results-oriented outcomes that improve Cambodia’s investment climate.",
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

const History: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                            About Us
                        </p>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            For over 25 years, the G-PSF has
                            delivered trust-based reform
                            outcomes and strengthened
                            institutional capacity
                        </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
                    {/* LEFT */}
                    <div className="lg:sticky lg:top-1">
        
                        <div className="mt-20 h-1.5 bg-orange-500 w-67 sm:w-142 md:w-142 lg:w-[528px]" />

                        <p className="mt-8 max-w-xl text-lg sm:text-lg leading-relaxed font-bold text-[#1e3a8a]">
                            Established in 1999, the Government–
                            Private Sector Forum (G-PSF) was
                            created to rebuild trust and cooperation
                            between the Royal Government of
                            Cambodia and the private sector.
                        </p>

                        <p className="mt-8 max-w-xl text-lg sm:text-lg leading-relaxed font-bold text-[#1e3a8a]">
                            Chaired by the Prime Minister, the G-PSF
                            provides a structured platform for
                            dialogue, enabling businesses and
                            government institutions to jointly
                            identify challenges and deliver practical
                            policy and regulatory reforms.
                        </p>

                        <p className="mt-8 max-w-xl text-lg sm:text-lg leading-relaxed font-bold text-[#1e3a8a]">
                            From its initial seven Working Groups in
                            1999, the G-PSF has expanded to 16
                            sectoral and cross-cutting Working
                            Groups, reflecting Cambodia’s economic
                            development and the growing complexity
                            of reform priorities.
                        </p>

                        <p className="mt-8 max-w-xl text-lg sm:text-lg leading-relaxed font-bold text-[#1e3a8a]">
                            Over more than two decades, the G-PSF
                            has evolved into Cambodia’s primary
                            public–private dialogue mechanism,
                            expanding from seven to sixteen Working
                            Groups and supporting sustained
                            improvements to the business and
                            investment environment.
                        </p>
                    </div>

                    {/* RIGHT */}
                    {/* ✅ Responsive offset like your screenshot (down on large screens only) */}
                    <div className="lg:pt-24 xl:pt-222">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
                            Role of the
                            Council for the
                            Development of
                            Cambodia (CDC)
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

export default History;
