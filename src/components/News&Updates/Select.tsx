"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type Menu = "plenary" | "working" | "media" | null;

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<Menu>(null);

    const toggleMenu = (menu: Menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 ">
                <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* Left */}
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold">
                        All
                    </button>

                    {/* Center Menu */}
                    <div className="flex flex-wrap justify-center gap-18">

                        <Link href="/featured" className="text-lg text-gray-800 hover:text-orange-500">
                            Featured
                        </Link>

                        {/* Plenary */}
                        <div className="relative">
                            <button
                                onClick={() => toggleMenu("plenary")}
                                className="flex items-center gap-1 text-lg text-gray-800 hover:text-orange-500"
                            >
                                <span>Plenary</span>
                                <IoIosArrowDown
                                    className={`transition-transform duration-200 ${openMenu === "plenary" ? "rotate-180 text-orange-500" : ""
                                        }`}
                                />
                            </button>

                            {openMenu === "plenary" && (
                                <Dropdown>
                                    <DropdownItem href="/laws-regulations" label="Laws & Regulations" />
                                    <DropdownItem href="/decisions" label="Decisions" />
                                    <DropdownItem href="/reform-tracker" label="Reform Tracker" />
                                </Dropdown>
                            )}
                        </div>

                        {/* Working Groups */}
                        <div className="relative">
                            <button
                                onClick={() => toggleMenu("working")}
                                className="flex items-center gap-1 text-lg text-gray-800 hover:text-orange-500"
                            >
                                <span>Working Groups</span>
                                <IoIosArrowDown
                                    className={`transition-transform duration-200 ${openMenu === "working" ? "rotate-180 text-orange-500" : ""
                                        }`}
                                />
                            </button>

                            {openMenu === "working" && (
                                <Dropdown>
                                    <DropdownItem href="/reports" label="Reports" />
                                    <DropdownItem href="/co-chairs" label="Co-Chairs" />
                                    <DropdownItem href="/wg-profiles" label="WG Profiles" />
                                </Dropdown>
                            )}
                        </div>

                        {/* Media */}
                        <div className="relative">
                            <button
                                onClick={() => toggleMenu("media")}
                                className="flex items-center gap-1 text-lg text-gray-800 hover:text-orange-500"
                            >
                                <span>Media</span>
                                <IoIosArrowDown
                                    className={`transition-transform duration-200 ${openMenu === "media" ? "rotate-180 text-orange-500" : ""
                                        }`}
                                />
                            </button>

                            {openMenu === "media" && (
                                <Dropdown>
                                    <DropdownItem href="/press" label="Press" />
                                    <DropdownItem href="/photos" label="Photos" />
                                    <DropdownItem href="/video" label="Video" />
                                </Dropdown>
                            )}
                        </div>
                    </div>

                    {/* Search */}
                    <div className="w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search Updates"
                            className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

/* ---------- Helpers ---------- */

const Dropdown = ({ children }: { children: React.ReactNode }) => (
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
        <ul>{children}</ul>
    </div>
);

const DropdownItem = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link
            href={href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
            {label}
        </Link>
    </li>
);
