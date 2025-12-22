import React from "react";

const highlightedDates = [
    { month: "JANUARY", day: 10 },
    { month: "FEBRUARY", day: 23 },
    { month: "MARCH", day: 2 },
    { month: "MARCH", day: 25 },
];

const Calendar = ({ month }: { month: string }) => {
    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="bg-[#f4f6f7] rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
            {/* Month */}
            <div className="py-3 sm:py-4 text-center">
                <h3 className="text-lg sm:text-xl font-medium tracking-widest text-gray-800">
                    {month}
                </h3>
            </div>

            {/* Days of week */}
            <div className="bg-gray-200/50 grid grid-cols-7 py-2">
                {daysOfWeek.map((day, i) => (
                    <div key={i} className="text-center text-[10px] sm:text-xs font-bold text-gray-400">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days */}
            <div className="p-3 sm:p-4 grid grid-cols-7 gap-y-2 text-center flex-grow">
                {days.map((day) => {
                    const isHighlighted = highlightedDates.find(
                        (d) => d.month === month && d.day === day
                    );

                    return (
                        <div key={day} className="relative flex items-center justify-center">
                            {isHighlighted && (
                                <div className="absolute w-7 h-7 sm:w-8 sm:h-8 bg-[#ffb347] rounded-full shadow-inner" />
                            )}
                            <span
                                className={`relative z-10 text-xs sm:text-sm font-semibold ${isHighlighted ? "text-black" : "text-gray-700"
                                    }`}
                            >
                                {day}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default function Date() {
    return (
        <section className="bg-white py-4 sm:py-4 lg:py-1 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-10 sm:mb-14">
                    <p className="text-base sm:text-xl font-bold text-gray-800 mb-1">
                        Up next
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-4">
                        Meeting Schedule
                    </h2>
                    <div className="w-40 sm:w-64 h-1.5 bg-[#f39c12] rounded-full" />
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    <Calendar month="JANUARY" />
                    <Calendar month="FEBRUARY" />
                    <Calendar month="MARCH" />
                </div>

                {/* Button */}
                <div className="flex justify-center mt-8 sm:mt-12">
                    <button className="bg-[#2c3e50] hover:bg-[#34495e] text-white px-8 sm:px-10 py-3 rounded-md font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors shadow-lg">
                        Show More
                    </button>
                </div>

            </div>
        </section>
    );
}
