// components/HeroBanner.tsx
'use client';
import Image from 'next/image';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '1,200', label: 'TOTAL MEMBERS' },
  { value: '90%', label: 'RESOLUTION RATE' },
  { value: '63', label: 'POLICY REFORMS' },
];

const PLACEHOLDER_IMAGE_URL = '/image/Banner.bmp';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gray-100">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PLACEHOLDER_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 pb-36 sm:pb-44 max-w-5xl w-full">
        <p className="text-base sm:text-lg md:text-3xl text-white font-light tracking-wide mb-4 sm:mb-6">
          Your seat at Cambodia highest reform table.
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug">
          Cambodia Works
          <br />
          Better Together
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white font-light max-w-3xl mb-8 sm:mb-12">
          Join 1,200+ voices driving Cambodia economic transformation while turning conversation into action through the trusted G-PSF mechanism.
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-8 md:px-12 rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-sm sm:text-base md:text-lg"
          onClick={() => console.log('CTA Clicked')}
        >
          Latest Digital Reforms
        </button>
      </div>

      {/* Statistics Bar */}
      <div className="max-w-[1120px] mx-auto absolute bottom-0 w-full py-4 sm:py-6 border-t-[5px] border-white px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-auto">
              <div className="border-t-2 border-white w-12 mb-2 sm:mb-3"></div>
              <p className="text-lg sm:text-xl md:text-2xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
