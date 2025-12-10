'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Define TypeScript types for content items
interface ContentItem {
    title: string;
    content: string;
    icon: string;
}

// Content for the carousel
const contentItems: ContentItem[] = [
    { title: 'Results & Achievements', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', icon: '📊' },
    { title: 'Digital Reforms', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', icon: '💡' },
    { title: 'Policy Reform Tracker', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', icon: '💼' },
    { title: 'Work Group Meetings', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', icon: '🤝' },
    { title: 'News & Updates', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', icon: '📰' },
    { title: 'News & Updates', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', icon: '❤️' },
];

// Define color constants
const DARK_BLUE = '#1A1D42';
// const TEXT_COLOR = '#A3A5B8';

const Update_News: React.FC = () => {
    return (
        <>
            {/* Header Section */}
            <div className="text-center mb-80">
                <h2 className="text-5xl font-extrabold text-gray-900">
                    News & Updates
                </h2>
                <p className="mt-4 text-2xl text-gray-600 max-w-5xl px-3 mx-auto">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                </p>
            </div>

            <div
                className="bg-darkBlue h-[220px] flex flex-col justify-end relative"
                style={{ backgroundColor: DARK_BLUE }}
            >
                <div className="container mx-auto px-4 max-w-7xl py-8">
                    <Swiper
                        modules={[Navigation, Pagination]}  // Using Swiper modules
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={false}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="custom-swiper-pagination-white "
                    >
                        {contentItems.map((item, index) => (
                            <SwiperSlide key={index} className="pb-12 pt-16">
                                <div
                                    className={`
                                        bg-white overflow-hidden rounded-lg relative pt-12 h-[360px] flex flex-col
                                        transition-transform duration-500 ease-out
                                        hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] cursor-pointer
                                    `}
                                    style={{ boxShadow: '0 7px 15px rgba(0,0,0,0.4)' }}
                                >
                                    <div
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-40 pt-5 rounded-full border-4 border-white"
                                        style={{ backgroundColor: DARK_BLUE, borderColor: 'white' }}
                                    >
                                        <div className="flex items-center justify-center w-full h-[160px] text-white text-4xl">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="p-6 pt-10">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-base">{item.content}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            </div>
            {/* Swiper pagination style */}
            <style>{`
                .custom-swiper-pagination-white .swiper-pagination-bullet {
                    width: 16px;
                    height: 16px;
                    background-color: white !important;
                    opacity: 1;
                }
                .custom-swiper-pagination-white .swiper-pagination-bullet-active {
                    background-color: white !important;
                }
            `}</style>
        </>
    );
};

export default Update_News;
