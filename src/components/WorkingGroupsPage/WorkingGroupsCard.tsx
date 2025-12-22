import React from 'react';
import {
    Sprout, Palmtree, Settings, Scale,
    Building2, Bus, Ship, Factory,
    Wheat, Zap, GraduationCap, Heart,
    Home, Landmark, MonitorSmartphone, ShieldCheck
} from 'lucide-react';

interface WorkGroup {
    id: number;
    title: string;
    icon: React.ReactNode;
}

const workGroups: WorkGroup[] = [
    { id: 1, title: "Agriculture & Agro-Industry", icon: <Sprout size={32} className="md:w-10 md:h-10" /> },
    { id: 2, title: "Tourism", icon: <Palmtree size={32} className="md:w-10 md:h-10" /> },
    { id: 3, title: "Manufacturing & SMEs", icon: <Settings size={32} className="md:w-10 md:h-10" /> },
    { id: 4, title: "Law, Tax & Governance", icon: <Scale size={32} className="md:w-10 md:h-10" /> },
    { id: 5, title: "Banking & Financial Services", icon: <Building2 size={32} className="md:w-10 md:h-10" /> },
    { id: 6, title: "Transportation & Infrastructure", icon: <Bus size={32} className="md:w-10 md:h-10" /> },
    { id: 7, title: "Export Processing & Trade Facilitation", icon: <Ship size={32} className="md:w-10 md:h-10" /> },
    { id: 8, title: "Industrial Relations", icon: <Factory size={32} className="md:w-10 md:h-10" /> },
    { id: 9, title: "Paddy-Rice", icon: <Wheat size={32} className="md:w-10 md:h-10" /> },
    { id: 10, title: "Energy & Mineral Resources", icon: <Zap size={32} className="md:w-10 md:h-10" /> },
    { id: 11, title: "Education", icon: <GraduationCap size={32} className="md:w-10 md:h-10" /> },
    { id: 12, title: "Health", icon: <Heart size={32} className="md:w-10 md:h-10" /> },
    { id: 13, title: "Construction & Real Estate", icon: <Home size={32} className="md:w-10 md:h-10" /> },
    { id: 14, title: "Non-Banking Financial Services", icon: <Landmark size={32} className="md:w-10 md:h-10" /> },
    { id: 15, title: "Digital Economy, Society & Telecommunications", icon: <MonitorSmartphone size={32} className="md:w-10 md:h-10" /> },
    { id: 16, title: "Land Administration, Security & Public Order", icon: <ShieldCheck size={32} className="md:w-10 md:h-10" /> },
];

export default function WorkGroupsGrid() {
    return (
        <div className="bg-white">
            <div className="bg-[#2b45a2] py-10 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-10 md:mb-16">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            16 Work Groups<br />
                            <span className="opacity-90">Working For You</span>
                        </h1>
                    </header>

                    {/* Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {workGroups.map((group, index) => {
                            // Responsive Checkerboard Logic
                            // On mobile (2 cols): index % 2 determines color
                            // On desktop (4 cols): (row + col) % 2 determines color
                            const row = Math.floor(index / 4);
                            const col = index % 4;
                            const isGrey = `
                                [(index % 2 !== 0)] 
                                lg:[(row + col) % 2 !== 0]
                            `;

                            return (
                                <div
                                    key={group.id}
                                    className={`flex flex-col items-center justify-center aspect-square p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] shadow-xl transition-all duration-300 hover:scale-[1.03] 
                                    ${(index % 2 !== 0) ? 'bg-[#d1d5db]' : 'bg-white'} 
                                    lg:${((Math.floor(index / 4) + (index % 4)) % 2 !== 0) ? 'bg-[#d1d5db]' : 'bg-white'}`}
                                >
                                    <div className="bg-[#3a4e8c] text-white p-3 md:p-4 rounded-full mb-3 md:mb-5 shadow-inner">
                                        {group.icon}
                                    </div>
                                    <p className="text-[#1a1a1a] text-center text-[10px] sm:text-sm md:text-base font-bold leading-tight max-w-[90%]">
                                        {group.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FIXED RESPONSIVE TITLE SECTION */}
            <div className="max-w-7xl mx-auto px-4 md:px-4 py-8">
                <p className="text-xs md:text-sm font-semibold text-gray-500 mb-3 uppercase tracking-[0.2em]">
                    Flexible WGs
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2] max-w-[850px]">
                    New Working Groups may be established, merged, or dissolved 
                    in response to changing economic conditions and sector needs.
                </h2>
                <div className="mt-8 h-1.5 w-24" />
            </div>
        </div>
    );
}