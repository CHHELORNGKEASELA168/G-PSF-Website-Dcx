// components/Benefits.tsx
import React from "react";
import { Trophy, DollarSign, BarChart, LucideIcon } from "lucide-react";

// Define the type for each benefit item
interface Benefit {
    icon: LucideIcon; // Type the icon prop correctly
    title: string;
    description: string;
}

// Data for the benefits section
const benefitsData: Benefit[] = [
    {
        icon: Trophy,
        title: "Direct Access to Policymakers",
        description:
            "Shape business-enabling laws and regulations through participation in sector-specific and cross-cutting Working Groups.",
    },
    {
        icon: DollarSign,
        title: "Gateway for Foreign Investors",
        description:
            "Engage in dialogue chaired by the Prime Minister, giving businesses access to decision-makers.",
    },
    {
        icon: BarChart,
        title: "Access to Reliable Information",
        description:
            "Align business priorities with the Royal Government of Cambodia’s Pentagonal Strategy (2023–2028) and industrial development.",
    },
];

// BenefitCard component to display individual benefit items
interface BenefitCardProps {
    icon: LucideIcon; // Correctly type the icon as LucideIcon
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
        <div className="p-4 md:p-3 mt-6 rounded-full border border-blue-900/30 text-blue-800 flex-shrink-0">
            <Icon className="w-10 h-10 text-blue-800" strokeWidth={1.5} />
        </div>

        <div>
            <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
                {description}
            </p>
            <button className="px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold text-white bg-[#1B1D4E] rounded-full hover:bg-[#03057f] transition">
                Learn More
            </button>
        </div>
    </div>
);

// Benefits component that maps over the data
const Benefits: React.FC = () => {
    return (
        <section className="bg-white font-sans px-4 sm:px-8 md:px-16 lg:px-32 py-12 md:py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                {/* LEFT SIDE */}
                <div className="mb-32 sm:mb-10 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        G-PSF
                        <br />
                        Benefits
                    </h2>

                    <div className="mt-6 sm:mt-8 relative">
                        {/* Orange underline */}
                        <div className="absolute top-0 left-0 sm:left-4 md:left-28 w-20 sm:w-24 md:w-72 h-1 bg-orange-500 rounded-full mb-4"></div>

                        <p className="absolute top-0 left-0 sm:left-4 md:left-28 text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed mt-6">
                            The G-PSF is built on core guiding principles that ensure strategic consistency,
                            long-term sustainability, and alignment with Cambodia’s development vision.
                            These values build trust that makes public–private dialogue effective.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                    {benefitsData.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
