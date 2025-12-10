// src/Components/StatsBar.tsx
import React from 'react';

export interface KeyStat {
    value: string;
    label: string;
    trend?: string;  // Optional: Trend for percentage change
    color: string;   // CSS class for the text color (e.g., text-green-500)
}

// Sample data for the stats
export const keyStats: KeyStat[] = [
    {
        value: "1,268",
        label: "Total Projects",
        trend: "2.3%",  // Optional: Trend for the stat
        color: "text-green-500",  // Text color class
    },
    {
        value: "63",
        label: "Sector Focus",
        trend: "0.5%",
        color: "text-blue-500",
    },
    {
        value: "91.4%",
        label: "Completion Rate",
        trend: "1.1%",
        color: "text-yellow-500",
    },
    {
        value: "48",
        label: "Active Zones",
        trend: "3.5%",
        color: "text-red-500",
    },
];

// Type the props of the StatItem component
interface StatItemProps {
    value: string;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center p-3 border-5 border-dashed border-indigo-900 m-0">
        <div className="text-5xl lg:text-4xl font-extrabold text-indigo-900">
            {value}
        </div>
        <div className="text-base lg:text-lg text-indigo-900 font-medium tracking-wider mt-2 opacity-90 text-center">
            {label}
        </div>
    </div>
);

const StatsBar: React.FC = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                <p className="text-center text-gray-600 mb-12 text-lg">
                    There are many variations of passages of Lorem Ipsum available.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {keyStats.map((stat: KeyStat, index: number) => (
                        <StatItem
                            key={index}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
