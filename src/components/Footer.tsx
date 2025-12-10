// components/Footer.tsx
"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";


// Define the structure for the link groups (bilingual)
interface LinkGroup {
    titleEn: string;
    titleKh: string;
    links: { nameEn: string; nameKh: string; href: string }[];
}

const keyUpdates: LinkGroup = {
    titleEn: "KEY UPDATES",
    titleKh: "ព័ត៌មានចុងក្រោយ",
    links: [
        { nameEn: "Announcements", nameKh: "សេចក្តីប្រកាស", href: "#" },
        {
            nameEn: "Work Group Members",
            nameKh: "សមាជិកក្រុមការងារ",
            href: "#",
        },
        {
            nameEn: "Meeting Schedule",
            nameKh: "កាលវិភាគប្រជុំ",
            href: "#",
        },
        {
            nameEn: "Member Engagement",
            nameKh: "ការចូលរួមរបស់សមាជិក",
            href: "#",
        },
        { nameEn: "Press Kit", nameKh: "ឯកសារផ្សព្វផ្សាយ", href: "#" },
    ],
};

const quickLinks: LinkGroup = {
    titleEn: "QUICK LINKS",
    titleKh: "តំណភ្ជាប់លឿន",
    links: [
        {
            nameEn: "Member Engagement",
            nameKh: "ការចូលរួមរបស់សមាជិក",
            href: "#",
        },
        {
            nameEn: "Policy Updates",
            nameKh: "ព័ត៌មានកំណែទម្រង់នយោប្បន្នភាព",
            href: "#",
        },
        { nameEn: "Market Data", nameKh: "ទិន្នន័យទីផ្សារ", href: "#" },
        {
            nameEn: "G-PSF Training",
            nameKh: "ការបណ្តុះបណ្តាល G-PSF",
            href: "#",
        },
        {
            nameEn: "Labor Law & Visa",
            nameKh: "ច្បាប់ការងារ និងវីសា",
            href: "#",
        },
        {
            nameEn: "Tourism Toolkit",
            nameKh: "ឧបករណ៍គាំទ្រទេសចរណ៍",
            href: "#",
        },
        { nameEn: "MIS Portal", nameKh: "ផតថល MIS", href: "#" },
    ],
};

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const isKhmer = language === "kh";

    // Top-only shadow
    const topOnlyShadowStyle: React.CSSProperties = {
        boxShadow: "0 -8px 15px -3px rgba(0, 0, 0, 0.1)",
    };

    const desc1En =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.";
    const desc2En =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.";
    const desc1Kh =
        "អត្ថបទគំរូសម្រាប់ពិពណ៌នាពីបេសកកម្ម និងតួនាទីរបស់ G-PSF។ សូមបញ្ចូលអត្ថបទពិតនៅទីនេះ។";
    const desc2Kh =
        "អត្ថបទគំរូបន្ថែម សម្រាប់ពិពណ៌នាពីការងារជាមួយវិស័យឯកជន។";

    const contactTitleEn = "CONTACT";
    const contactTitleKh = "ទំនាក់ទំនង";

    const followTitleEn = "FOLLOW US";
    const followTitleKh = "តាមដានពួកយើង";

    return (
        <footer
            className="bg-white mt-10 text-[#343a40] relative"
            style={topOnlyShadowStyle}
        >
            <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-0 py-12 grid grid-cols-1 md:grid-cols-4 gap-25">
                {/* Logo & Description */}
                <div className="flex flex-col relative">
                    <div className="flex items-center relative space-x-10">
                        <div className="w-68 h-25 bottom-4 relative mb-3">
                            <Image
                                src="/image/logo1.png"
                                alt="G-PSF Logo"
                                fill
                                className="absolute left-0 right-0 top-0 bottom-50 object-cover w-full"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                    </div>

                    <p
                        className={`text-xl text-gray-950 max-w-xs mb-4 ${isKhmer ? "khmer-font" : ""
                            }`}
                    >
                        {isKhmer ? desc1Kh : desc1En}
                    </p>
                    <p
                        className={`text-xl text-gray-950 max-w-xs ${isKhmer ? "khmer-font" : ""
                            }`}
                    >
                        {isKhmer ? desc2Kh : desc2En}
                    </p>
                </div>

                {/* Key Updates */}
                <LinkSection group={keyUpdates} isKhmer={isKhmer} />

                {/* Quick Links */}
                <LinkSection group={quickLinks} isKhmer={isKhmer} />

                {/* Contact & Social */}
                <div className="flex flex-col space-y-4">
                    {/* Contact */}
                    <div>
                        <h3
                            className={`text-2xl font-semibold mb-4 tracking-wider text-[#343a40] ${isKhmer ? "khmer-font" : ""
                                }`}
                        >
                            {isKhmer ? contactTitleKh : contactTitleEn}
                        </h3>
                        <div className="space-y-2 text-2xl">
                            <ContactItem
                                icon={
                                    <Phone
                                        size={22}
                                        className="text-[#00008b] mr-2"
                                    />
                                }
                                text="+855 999 999 999"
                            />
                            <ContactItem
                                icon={
                                    <Mail
                                        size={22}
                                        className="text-[#00008b] mr-2 "
                                    />
                                }
                                text="info@website.gov.kh"
                            />
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3
                            className={`text-lg font-extrabold mb-4 tracking-wider text-[#343a40] ${isKhmer ? "khmer-font" : ""
                                }`}
                        >
                            {isKhmer ? followTitleKh : followTitleEn}
                        </h3>
                        <div className="flex space-x-3">
                            <SocialIcon icon={<FaFacebookF size={18} />} href="#" />
                            <SocialIcon icon={<FaTelegramPlane size={18} />} href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Contact Item Component
const ContactItem: React.FC<{
    icon: React.ReactNode;
    text: string;
}> = ({ icon, text }) => (
    <div className="flex items-center text-lg md:text-xl font-semibold text-[#343a40]">
        {icon}
        <span>{text}</span>
    </div>
);

// Link Section Component
const LinkSection: React.FC<{
    group: LinkGroup;
    isKhmer: boolean;
}> = ({ group, isKhmer }) => (
    <div>
        <h3
            className={`text-2xl font-semibold mb-4 tracking-wider text-[#343a40] ${isKhmer ? "khmer-font" : ""
                }`}
        >
            {isKhmer ? group.titleKh : group.titleEn}
        </h3>
        <ul className="space-y-2">
            {group.links.map((link) => (
                <li key={link.nameEn}>
                    <a
                        href={link.href}
                        className={`text-[18px] text-gray-700 hover:text-[#00008b] transition-colors duration-200 ${isKhmer ? "khmer-font" : ""
                            }`}
                    >
                        {isKhmer ? link.nameKh : link.nameEn}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// Social Icon Component
const SocialIcon: React.FC<{
    icon: React.ReactNode;
    href: string;
}> = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 bg-[#00008b] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200"
        aria-label="Social Media Link"
    >
        {icon}
    </a>
);

export default Footer;
