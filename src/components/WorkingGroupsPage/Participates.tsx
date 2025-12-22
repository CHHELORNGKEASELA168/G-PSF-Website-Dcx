import React from 'react';
import { Building2, UserCircle2, Landmark, Users2 } from 'lucide-react';

const stakeholders = [
    {
        title: "Line ministries & government agencies relevant to the sector",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
        icon: <Building2 className="w-10 h-10 text-white" />,
    },
    {
        title: "Private sector co-chairs & Working Group members",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
        icon: <UserCircle2 className="w-10 h-10 text-white" />,
    },
    {
        title: "Business Membership Organisations & chambers of commerce",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
        icon: <Landmark className="w-10 h-10 text-white" />,
    },
    {
        title: "Technical experts, sub-committees, or task forces",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
        icon: <Users2 className="w-10 h-10 text-white" />,
    },
];

const Participates: React.FC = () => {
    return (
        <section className="relative bg-white pt-16 pb-0 cursor-pointer">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-[#1e234a] mb-4">
                    Who Participates
                </h2>
                <p className="text-xl text-gray-500 font-medium">
                    Working Group meetings bring together a broad range of stakeholders.
                </p>
            </div>

            {/* Background Container for the dark section */}
            <div className="relative">
                <div className="absolute bottom-0 w-full h-[150px] bg-[#1e234a]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stakeholders.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl hover:translate-y-[-1.5%] transition-all overflow-hidden p-8 shadow-2xl flex flex-col items-start text-left h-full border border-gray-100"
                            >
                                {/* Icon Container */}
                                <div className="w-full h-25 flex justify-center -mt-12 mb-10">
                                    <div className="bg-[#1e234a] p-8 rounded-b-[100px] rounded-t-sm shadow-md">
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#3a475a] mb-4 leading-tight min-h-[4rem]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Continuing the dark section if needed */}
            <div className="bg-[#1e234a] h-24 w-full" />
        </section>
    );
};

export default Participates;