// components/Footer.tsx

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';

// Define the structure for the link groups
interface LinkGroup {
    title: string;
    links: { name: string; href: string }[];
}

const keyUpdates: LinkGroup = {
    title: 'KEY UPDATES',
    links: [
        { name: 'Announcements', href: '#' },
        { name: 'Work Group Members', href: '#' },
        { name: 'Meeting Schedule', href: '#' },
        { name: 'Member Engagement', href: '#' },
        { name: 'Press Kit', href: '#' },
    ],
};

const quickLinks: LinkGroup = {
    title: 'QUICK LINKS',
    links: [
        { name: 'Member Engagement', href: '#' },
        { name: 'Policy Updates', href: '#' },
        { name: 'Market Data', href: '#' },
        { name: 'G-PSF Training', href: '#' },
        { name: 'Labor Law & Visa', href: '#' },
        { name: 'Tourism Toolkit', href: '#' },
        { name: 'MIS Portal', href: '#' },
    ],
};

const Footer: React.FC = () => {
    // Top-Only Shadow Fix: We use a negative vertical offset for the shadow to appear only at the top.
    const topOnlyShadowStyle: React.CSSProperties = {
        // h-offset v-offset blur spread color
        boxShadow: '0 -8px 15px -3px rgba(0, 0, 0, 0.1)',
    };
    
    return (
        <footer className="bg-white mt-10 text-[#343a40] relative" style={topOnlyShadowStyle}>
            <div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-25"
                // style={topOnlyShadowStyle} // <-- Applied the top-only shadow style
            >
                {/* Logo & Description */}
                <div className="flex flex-col relative">
                    <div className="flex items-center relative space-x-10">
                        
                        <div className="w-64 h-24 relative mb-4"> 
                            <Image
                                src="/image/logo1.png"
                                alt="G-PSF Logo"
                                fill
                                className="absolute left-0 right-0 top-0 bottom-20 object-cover w-full" // Changed to 'object-contain' for logo integrity
                                // Added 'sizes' prop for performance, a best practice with 'fill'
                                sizes="(max-width: 768px) 100vw, 300px" 
                            />
                        </div>
                    </div>

                    <p className="text-xl text-gray-950 max-w-xs mb-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                    </p>
                    <p className="text-xl text-gray-950 max-w-xs">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                    </p>
                </div>

                {/* Key Updates */}
                <LinkSection group={keyUpdates} />

                {/* Quick Links */}
                <LinkSection group={quickLinks} />

                {/* Contact & Social */}
                <div className="flex flex-col space-y-4">
                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 tracking-wider text-[#343a40]">CONTACT</h3>
                        <div className="space-y-2 text-2xl">
                            <ContactItem icon={<Phone size={22} className="text-[#00008b] mr-2" />} text="+855 999 999 999" />
                            <ContactItem icon={<Mail size={22} className="text-[#00008b] mr-2 " />} text="info@website.gov.kh" />
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-extrabold mb-4 tracking-wider text-[#343a40]">FOLLOW US</h3>
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
const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center text-sm text-[#343a40]">
        {icon}
        <span>{text}</span>
    </div>
);

// Link Section Component
const LinkSection: React.FC<{ group: LinkGroup }> = ({ group }) => (
    <div>
        <h3 className="text-2xl font-semibold mb-4 tracking-wider text-[#343a40]">{group.title}</h3>
        <ul className="space-y-2">
            {group.links.map((link) => (
                <li key={link.name}>
                    <a
                        href={link.href}
                        className="text-[18px] text-gray-700 hover:text-[#00008b] transition-colors duration-200"
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// Social Icon Component
const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 bg-[#00008b] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200"
        aria-label="Social Media Link"
    >
        {icon}
    </a>
);

export default Footer;