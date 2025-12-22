import React from "react";

const Achievements: React.FC = () => {
    return (
        <section className="bg-white py-8 md:py-12 overflow-hidden">
            <div className="mx-auto max-w-5xl px-4">
                <div className="flex flex-col items-start">
                    {/* HEADER SECTION */}
                    <div className="w-full">
                        <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                            Key
                        </p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Achievements
                        </h1>
                    </div>

                    {/* DECORATIVE LINE: Removed fixed translations, used margins for offset */}
                    <div className="mt-5 mb-12 h-1.5 bg-orange-500 w-3/4 sm:w-full max-w-[440px] sm:ml-8 md:ml-20" />

                    {/* SQUARE CONTENT CARD */}
                    <div className="w-full flex justify-center sm:justify-start">
                        <div className="bg-[#A3C1AD] sm:ml-8 md:ml-20 rounded-[40px] aspect-square w-full max-w-[850px] flex items-center justify-center p-6 md:p-30 shadow-sm">
                            {/* Fixed: Removed w-[200px] and added w-full to let text breathe */}
                            <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-800 text-center leading-snug w-full">
                                linked to MIS interface showing key indicators infographics
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;