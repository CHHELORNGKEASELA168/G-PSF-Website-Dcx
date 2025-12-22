"use client";

import Image from "next/image";
// import Link from "next/link";

export interface BannerAboutProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    imageAlt?: string;
}

const BannerWorkingGroups = ({
    title = "Dialogue That Delivers Results",
    subtitle = "Sixteen Working Groups bringing government and business together to deliver practical reforms.",
    imageUrl = "/image/bannerworking.bmp",
    imageAlt = "G-PSF Meeting",
}: BannerAboutProps) => {
    return (
        <section className="bg-white py-5 md:py-5">
            {/* Title + subtitle (keep container) */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl text-shadow-lg sm:text-5xl font-bold text-gray-900">
                        {title}
                    </h1>

                    <p className="mt-3 max-w-2xl mx-auto text-lg sm:text-xl text-gray-900">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* ✅ FULL-WIDTH BANNER (no padding) */}
            <div className="w-full">
                <div className="relative w-full h-[240px] sm:h-[360px] md:h-[480px] lg:h-[675px]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerWorkingGroups;
