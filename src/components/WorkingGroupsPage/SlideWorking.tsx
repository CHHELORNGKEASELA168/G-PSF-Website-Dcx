"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Navigation } from "swiper/modules";
import { useLanguage } from "@/app/context/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";

type Lang = "en" | "kh";

interface CoChair {
    id: number;
    name?: string;
    role?: string;
    type: "empty" | "photo" | "card" | "arrow";
}

// Data
const topRow: CoChair[] = [
    { id: 7, type: "arrow" },
    { id: 8, type: "photo" },
    { id: 1, type: "empty" },
    { id: 2, type: "empty" },
    { id: 3, type: "empty" },
    { id: 4, type: "empty" },
    { id: 5, type: "empty" },
    { id: 6, type: "empty" },
];

const bottomRow: CoChair[] = [
    { id: 9, type: "arrow" },
    {
        id: 10,
        type: "card",
        name: "Name of co-chairperson",
        role: "Short description goes here.",
    },
    { id: 11, type: "empty" },
    { id: 12, type: "empty" },
    { id: 13, type: "empty" },
    { id: 14, type: "empty" },
    { id: 15, type: "empty" },
    { id: 16, type: "empty" },
];

const CoChairCard = ({
    chair,
    isTopRow,
    lang,
}: {
    chair: CoChair;
    isTopRow?: boolean;
    lang: Lang;
}) => {
    const photoLabel =
        lang === "kh" ? (
            <>
                រូបថត <br /> សហអធិបតី <br /> ក្រុមការងារ
            </>
        ) : (
            <>
                PHOTO <br /> OF <br /> CO-CHAIRPERSON
            </>
        );

    const cardName = lang === "kh" ? "ឈ្មោះសហអធិបតី" : chair.name ?? "Name of co-chairperson";
    const cardRole = lang === "kh" ? "សេចក្ដីពណ៌នាសង្ខេបនៅទីនេះ។" : chair.role ?? "Short description goes here.";

    switch (chair.type) {
        case "empty":
            return <div className="bg-gray-200 aspect-square cursor-pointer" />;

        case "photo":
            return (
                <div className="bg-[#1e3a8a] cursor-pointer aspect-square flex items-center justify-center text-white font-bold text-xl text-center p-4 shadow-md hover:scale-105 transition-transform">
                    <div className={lang === "kh" ? "khmer-font" : ""}>{photoLabel}</div>
                </div>
            );

        case "arrow":
            return (
                <div className="bg-[#2b45a2] cursor-pointer aspect-square flex items-center justify-center text-white">
                    {isTopRow ? <ArrowRight className="w-10 h-10" /> : <ArrowLeft className="w-10 h-10" />}
                </div>
            );

        case "card":
            return (
                <div className="bg-[#1e3a8a] cursor-pointer aspect-square p-6 flex flex-col justify-center text-white shadow-md hover:scale-105 transition-transform">
                    <h3 className={`text-2xl font-bold mb-2 ${lang === "kh" ? "khmer-font" : ""}`}>
                        {cardName}
                    </h3>
                    <p className={`text-lg ${lang === "kh" ? "khmer-font" : ""}`}>{cardRole}</p>
                </div>
            );

        default:
            return null;
    }
};

export default function TwoRowSwiperLayout() {
    const { language } = useLanguage();
    const lang = (language as Lang) ?? "en";
    const isKh = lang === "kh";

    const t = {
        en: {
            small: "Meet the",
            title: "Working Group Co-Chairs",
        },
        kh: {
            small: "សូមជួប",
            title: "សហអធិបតីក្រុមការងារ (WGs)",
        },
    }[lang];

    return (
        <section className="py-1 max-w-full mx-auto space-y-12">
            <div className="lg:top-10 max-w-7xl px-4 mx-auto">
                <p
                    className={`text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider ${isKh ? "khmer-font normal-case" : ""
                        }`}
                >
                    {t.small}
                </p>

                <h1
                    className={`text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight ${isKh ? "khmer-font" : ""
                        }`}
                >
                    {t.title}
                </h1>

                <div className="mt-5 h-1.5 bg-orange-500 w-56 sm:w-72 md:w-96 lg:w-[440px] translate-x-0 sm:translate-x-8 md:translate-x-25" />
            </div>

            {/* Top row: Right-to-Left */}
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={20}
                    dir="rtl"
                    breakpoints={{
                        295: { slidesPerView: 1.24, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                >
                    {topRow.map((chair) => (
                        <SwiperSlide key={chair.id}>
                            <CoChairCard chair={chair} isTopRow lang={lang} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom row: Left-to-Right */}
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        295: { slidesPerView: 1.24, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                >
                    {bottomRow.map((chair) => (
                        <SwiperSlide key={chair.id}>
                            <CoChairCard chair={chair} isTopRow={false} lang={lang} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
