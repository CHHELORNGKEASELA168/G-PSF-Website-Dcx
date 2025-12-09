// src/app/page.tsx

import Header from '@/components/Header';
import HeroBanner from '@/components/Banner';
import Benefits from '@/components/Benefits';
import Update_News from '@/components/Update&News';
import StatsBar from '@/components/StatsBar';
import GrowthVision from '@/components/GrowthVision';
import DigitalReforms from '@/components/DigitalReforms';
import WorkGroupsCarousel from '@/components/WorkGroupsCarousel';
import MembersSaySwiperSlider from '@/components/MembersSay_Swiper';
import TrustedByCarousel from '@/components/TrustedBy';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Benefits />
      <Update_News />
      <StatsBar />
      <GrowthVision />
      <DigitalReforms />
      <WorkGroupsCarousel />
      <MembersSaySwiperSlider />
      <TrustedByCarousel />
      <Footer />
    </main>
  );
}