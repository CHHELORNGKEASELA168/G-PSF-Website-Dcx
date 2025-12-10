// src/Components/UI-Homepage/GrowthVision.tsx
'use client';

import React from 'react';
import { FaChartLine, FaPencilAlt, FaPuzzlePiece, FaBriefcase, FaCog, FaDesktop } from 'react-icons/fa';

interface GrowthVisionItem {
    title: string;
    icon: React.ElementType;
    description: string;
    colorClass?: string;
    isPrimary?: boolean;
}

const growthVisionData: GrowthVisionItem[] = [
    { title: "Market Data", icon: FaChartLine, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", colorClass: "bg-blue-500" },
    { title: "Engagement", icon: FaPencilAlt, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", colorClass: "bg-purple-500" },
    { title: "Policy Updates", icon: FaPuzzlePiece, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", isPrimary: true },
    { title: "Labor Law & Visa", icon: FaBriefcase, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", colorClass: "bg-yellow-500" },
    { title: "G-PSF Training", icon: FaCog, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", colorClass: "bg-indigo-500" },
    { title: "Tourism Toolkit", icon: FaDesktop, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", colorClass: "bg-red-500" },
];

interface CardProps {
    title: string;
    icon: React.ElementType;
    description: string;
    isPrimary?: boolean;
    colorClass?: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, description, isPrimary }) => {
    if (isPrimary) {
        return (
            <div className="p-8 rounded-tl-[120px] rounded-br-[120px] bg-blue-950 shadow-2xl text-white min-h-[300px] flex flex-col justify-between transform hover:scale-[1.02] transition duration-300 ease-in-out">
                <div className="text-center mb-4">
                    {Icon && <Icon className="w-12 h-12 mx-auto mb-4 p-2 rounded-lg" />}
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-lg opacity-90">{description}</p>
                </div>
                <div className="text-center mt-4">
                    <button className="flex items-center justify-center mx-auto text-sm font-semibold opacity-80 hover:opacity-100">
                        LEARN MORE
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 rounded-tl-[120px] rounded-br-[120px] shadow-xl border border-gray-100 min-h-[280px] flex flex-col justify-between relative overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out">
            <div className="pt-4 text-center mb-4">
                {Icon && <Icon className="w-8 h-8 mx-auto mb-4 text-indigo-900" />}
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg text-gray-600">{description}</p>
            </div>
            <div className="text-center mt-4">
                <button className="flex items-center justify-center mx-auto text-sm font-semibold text-indigo-900 hover:text-indigo-700">
                    LEARN MORE
                </button>
            </div>
        </div>
    );
};

const GrowthVision: React.FC = () => {
    const primaryCard = growthVisionData.find(d => d.isPrimary);
    const secondaryCards = growthVisionData.filter(d => !d.isPrimary);

    return (
        <div className="container mx-auto px-4 max-w-7xl py-16 relative">
            <h2 className="text-5xl font-extrabold text-indigo-900 mb-12">
                Align With Cambodia’s <br /> Growth Vision
            </h2>

            {/* GRID FOR MOBILE / TABLET / LAPTOP (<1400px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:hidden">
                {[...secondaryCards, primaryCard].map((card, idx) => (
                    <Card key={idx} {...card!} />
                ))}
            </div>

            {/* ABSOLUTE LAYOUT FOR BIG DESKTOP (>=1400px) */}
            <div className="relative mb-34 hidden xl:block h-[700px]">
                {/* Left Top */}
                <div className="absolute top-32 left-0 w-91">
                    <Card {...secondaryCards.find(c => c.title === "Engagement")!} />
                </div>

                {/* Center Primary */}
                <div className="absolute top-[25%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-91 z-10">
                    <Card {...primaryCard!} isPrimary />
                </div>

                {/* Right Top */}
                <div className="absolute top-0 -translate-y-2/5 right-0 w-91">
                    <Card {...secondaryCards.find(c => c.title === "Market Data")!} />
                </div>

                {/* Left Bottom */}
                <div className="absolute bottom-0 top-146 left-0 w-91">
                    <Card {...secondaryCards.find(c => c.title === "G-PSF Training")!} />
                </div>

                {/* Center Bottom */}
                <div className="absolute bottom-0 top-112 left-1/2 -translate-x-1/2 w-91">
                    <Card {...secondaryCards.find(c => c.title === "Labor Law & Visa")!} />
                </div>

                {/* Right Bottom */}
                <div className="absolute bottom-8 right-0 w-91">
                    <Card {...secondaryCards.find(c => c.title === "Tourism Toolkit")!} />
                </div>
            </div>
        </div>
    );
};

export default GrowthVision;
