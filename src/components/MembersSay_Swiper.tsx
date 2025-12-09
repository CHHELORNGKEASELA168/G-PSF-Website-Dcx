'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Trophy, DollarSign, BarChart, LucideIcon } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
    rating: string;
    title: string;
    subtitle: string;
    description: string;
    shortText: string;
    icon: LucideIcon;
}

const slides: Slide[] = [
    { rating: '5.0', title: 'Digital Reforms', subtitle: 'Digital Reforms', description: 'Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', shortText: 'Lorem ipsum dolor sit amet,', icon: Trophy },
    { rating: '5.0', title: 'Digital Reform', subtitle: 'Digital Reform', description: 'Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', shortText: 'Lorem ipsum dolor sit amet,', icon: DollarSign },
    { rating: '5.0', title: 'Digita! Reform', subtitle: 'Digital Reform', description: 'Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore', shortText: 'Lorem ipsum dolor sit amet,', icon: BarChart },
    { rating: '5.0', title: 'Digital Reforms', subtitle: 'Digita! Reform', description: 'Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore', shortText: 'Lorem ipsum dolor sit amet,', icon: Trophy },
    { rating: '5.0', title: 'Digital Reforms', subtitle: 'Digita! Reform', description: 'Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore', shortText: 'Lorem ipsum dolor sit amet,', icon: Trophy },
];

const MembersSaySwiperSlider: React.FC = () => {
    return (
        <div className="bg-blue-950 pt-16 pb-20 px-4 sm:px-6 md:px-10 xl:px-0 relative">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-xl font-bold text-white mb-4">More Results</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
                    What G-PSF <br /> Members Say
                </h3>
            </div>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                centeredSlides={true}
                loop={false}
                grabCursor={true}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination', // render bullets here
                }}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 25 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1200: { slidesPerView: 4, spaceBetween: 40 },
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="pb-12"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition mx-auto">
                            <div className="mb-6 flex justify-start items-center">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-4xl ${i < parseInt(slide.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                                ))}
                                <span className="text-2xl ml-2">{slide.rating}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-6">{slide.title}</h3>

                            <p className="text-gray-600 mb-8 flex-grow">{slide.description}</p>

                            <div className="pt-6 flex items-center gap-4">
                                <div className="bg-gray-500 p-4 rounded-full flex items-center justify-center">
                                    <slide.icon className="text-4xl text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-blue-950 text-2xl font-bold">{slide.subtitle}</p>
                                    <p className="text-lg text-gray-800">{slide.shortText}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination below Swiper */}
            <div className="custom-pagination mt-6 flex justify-center space-x-2"></div>

            {/* TailwindCSS for white bullets */}
            <style>{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 16px;
                    height: 16px;
                    background-color: white !important;
                    opacity: 1;
                    border-radius: 9999px;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background-color: white !important;
                    transform: scale(1.25);
                }
            `}</style>
        </div>
    );
};

export default MembersSaySwiperSlider;
