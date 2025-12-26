import React from 'react';

const CaseStudies = () => {
    return (
        <section className="bg-white py-6 px-4 md:px-8 font-sans">
            <div className="max-w-7xl px-4 mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <p className="text-[#1a2b4b] text-xl font-bold mb-1">Featured Success</p>
                    <h2 className="text-[#1a2b4b] text-5xl font-black mb-6">Case Studies</h2>
                    <div className="w-full max-w-[480px] h-1.5 bg-orange-500"></div>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT: Large Feature Card */}
                    <div className="bg-[#e9ecef] flex flex-col h-full shadow-sm">
                        {/* Image Area */}
                        <div className="bg-gray-200/50 flex-1 flex flex-col items-center justify-center p-12 min-h-[390px]">
                            <div className="bg-white p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center aspect-square w-64">
                                <svg
                                    className="w-20 h-20 text-gray-300 mb-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                                </svg>
                                <span className="text-gray-400 font-bold text-sm tracking-widest uppercase">Related Photo</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-10 bg-[#eceff1]">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-[#1a2b4b] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                                    Working
                                </span>
                                <span className="text-[#1a2b4b] text-[10px] font-bold uppercase tracking-tighter">
                                    Group Name ]
                                </span>
                            </div>
                            <h3 className="text-[#1a2b4b] text-4xl font-black mb-4 uppercase">Article Headline</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-md">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                            </p>
                            <button className="text-[#1a2b4b] text-xs font-bold flex items-center hover:underline uppercase tracking-widest">
                                Download <span className="ml-2 text-lg leading-none">›</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Stacked Small Cards */}
                    <div className="flex flex-col gap-8">
                        {[1, 2].map((item) => (
                            <div key={item} className="bg-[#e9ecef] p-12 flex-1 flex flex-col justify-center">
                                <div className="text-[#1a2b4b] text-[10px] font-bold mb-3 uppercase tracking-tighter">
                                    [ Working Group Name ]
                                </div>
                                <h3 className="text-[#1a2b4b] text-3xl font-black mb-4 uppercase">Article Headline</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-sm">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                                </p>
                                <button className="text-[#1a2b4b] text-xs font-bold flex items-center hover:underline uppercase tracking-widest mt-auto">
                                    Download <span className="ml-2 text-lg leading-none">›</span>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CaseStudies;