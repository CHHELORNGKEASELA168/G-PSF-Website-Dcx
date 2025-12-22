import React from "react";

type StepCard = {
    title: string;
    lines: string[];
    variant?: "dark" | "light";
};

const cards: StepCard[] = [
    {
        title: "Private Sector Inputs",
        lines: [
            "Private Sector Working Groups",
            "Business Member Organisations",
            "Advisory Committees",
        ],
        variant: "dark",
    },
    {
        title: "Technical Working Groups",
        lines: ["Groups formed to represent 16", "private sector industries"],
        variant: "light",
    },
    {
        title: "G-PSF Plenary",
        lines: ["Chaired by the Prime Minister"],
        variant: "light",
    },
];

const Works = () => {
    return (
        <section className="bg-white py-16 md:py-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                    How it works
                </h2>
                <div className="mt-6 w-58 md:w-50 h-1.5 bg-orange-500 sm:translate-x-2 md:translate-x-48" />

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {cards.map((c, i) => {
                        const isDark = c.variant === "dark";
                        return (
                            <div
                                key={i}
                                className={[
                                    "relative overflow-hidden",
                                    "min-h-[220px] md:min-h-[260px]",
                                    "rounded-tl-[70px] rounded-br-[70px] rounded-tr-none rounded-bl-none",
                                    "md:rounded-tl-[90px] md:rounded-br-[90px]",
                                    "flex items-center justify-center text-center px-10",
                                    isDark
                                        ? "bg-[#1b235c] text-white"
                                        : "bg-white text-gray-900 shadow-[0_18px_35px_rgba(0,0,0,0.25)]",
                                ].join(" ")}

                            >
                                {/* Create the “cut” corner look by masking one side */}
                                <div className="absolute right-0 top-0 h-full w-20 md:w-24 bg-white/0" />

                                <div>
                                    <h3
                                        className={[
                                            "font-extrabold",
                                            "text-xl md:text-2xl",
                                            isDark ? "text-white" : "text-gray-800",
                                        ].join(" ")}
                                    >
                                        {c.title}
                                    </h3>

                                    <div
                                        className={[
                                            "mt-4 space-y-1",
                                            isDark ? "text-white/90" : "text-gray-700",
                                            "text-base md:text-lg",
                                        ].join(" ")}
                                    >
                                        {c.lines.map((line, idx) => (
                                            <p key={idx}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Works;
