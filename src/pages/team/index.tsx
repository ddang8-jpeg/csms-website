import * as React from 'react';
import Nav from '@/components/nextui/nav';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Footer from '@/components/daisyui/footer';
import SkewedTitleBox from '@/components/skewed-title-box';
import MembersGrid from '@/components/memebers-grid';
import PICard from '@/components/nextui/pi-card';
import ImageCarousel from '@/components/daisyui/image-carousel';

const TeamPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className="relative flex flex-col">
        <Nav activePage="team" />
        <Header title={'Our Team'} />
        <div className="flex flex-col mx-auto items-center justify-center">
          <div className="max-w-6xl">
            <SkewedTitleBox text="Gallery" />
            <div className="content-titled-borders">
              <ImageCarousel />
            </div>
            <SkewedTitleBox text="Principle Investigator" />
            <div className="content-titled-borders">
              <PICard name="Ralph Etienne-Cummings" title="Julian S. Smith Professor" slug="john-doe" />
            </div>
            <SkewedTitleBox text="Current Members" />
            <div className="content-titled-borders">
              <MembersGrid />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};
export default TeamPage;
export const Head: HeadFC = () => <title>Our Team - CSMS at JHU</title>;
