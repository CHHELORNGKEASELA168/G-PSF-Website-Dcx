"use client";

import { useState, type FC } from "react";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

type Lang = "en" | "kh";

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

    // Get language + toggle from context
    const { language, toggleLanguage } = useLanguage();

    // NAV ITEMS IN BOTH LANGUAGES
    const navItems: Record<Lang, string[]> = {
        en: [
            "Home",
            "About Us",
            "Working Groups (WGs)",
            "Resources",
            "News & Updates",
            "MIS Dashboard",
            "Contact Us",
        ],
        kh: [
            "ទំព័រដើម",
            "អំពីពួកយើង",
            "ក្រុមការងារ (WGs)",
            "ធនធាន",
            "ព័ត៌មាន និងបច្ចុប្បន្នភាព",
            "ផ្ទាំង MIS",
            "ទាក់ទងមកពួកយើង",
        ],
    };

    const searchPlaceholder = language === "en" ? "Search..." : "ស្វែងរក...";

    // change these to real flag images when you have them
    const flagSrc = language === "en" ? "/image/flagen.png" : "/image/flagkhmer.jpg";
    const flagAlt = language === "en" ? "English flag" : "Cambodian flag";

    return (
        <header className="bg-white shadow-md">
            {/* Top Bar */}
            <div className="max-w-screen-3xl mx-auto px-5 md:px-32 py-2 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex items-center mb-2 md:mb-0">
                    <Image
                        src="/image/logo2.png"
                        alt="G-PSF Logo"
                        width={150}
                        height={60}
                        className="object-contain"
                    />
                </div>

                {/* Top Right Controls */}
                <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-normal">
                    {/* Flag + Language (flag outside, button text toggles) */}
                    <div className="flex items-center space-x-2">
                        <Image
                            src={flagSrc}
                            alt={flagAlt}
                            width={38}
                            height={20}
                            className="rounded-sm object-cover "
                        />

                        <button
                            type="button"
                            onClick={toggleLanguage}
                            className={`px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm md:text-lg font-medium ${language === "kh" ? "khmer-font" : ""
                                }`}
                        >
                            {language === "en" ? "English" : "ខ្មែរ"}
                        </button>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden lg:flex rounded-2xl overflow-hidden w-0 md:w-72 shadow-sm">
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="flex-1 px-3 py-1 text-sm md:text-lg bg-gray-200 outline-none"
                        />
                        <button className="px-3 py-2 bg-white flex items-center justify-center">
                            <Search className="w-6 md:w-7 h-6 md:h-5 text-gray-500" />
                        </button>
                    </div>

                    {/* Mobile Search Icon */}
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="lg:hidden p-2"
                    >
                        <Search className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
                <div className="lg:hidden border-t px-4 py-3 bg-gray-50">
                    <div className="flex items-center rounded-lg px-3 py-2 w-full">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="ml-2 outline-none bg-transparent w-full text-base"
                        />
                    </div>
                </div>
            )}

            {/* Main Navigation */}
            <nav className="container mx-auto px-4 md:px-8 py-5">
                <div className="flex justify-between items-center">
                    {/* Mobile Logo Text */}
                    <div
                        className={`lg:hidden text-base text-gray-600 ${language === "kh" ? "khmer-font" : ""
                            }`}
                    >
                        {language === "en"
                            ? "Government Private Sector Forum"
                            : "វេទិការដ្ឋាភិបាល និងវិស័យឯកជន"}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 flex-wrap justify-center gap-x-12 gap-y-1 mb-5">
                        {navItems[language].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`text-gray-700 hover:text-blue-600 font-medium text-base md:text-lg lg:text-lg transition-colors ${language === "kh" ? "khmer-font" : ""
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t bg-white">
                        <div className="flex flex-col space-y-2 pt-2">
                            {navItems[language].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded text-base transition duration-200 ${language === "kh" ? "khmer-font" : ""
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
