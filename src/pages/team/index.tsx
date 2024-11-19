import * as React from 'react';
import Nav from '@/components/nextui/nav';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Footer from '@/components/daisyui/footer';
import SkewedTitleBox from '@/components/skewed-title-box';
import MembersGrid from '@/components/memebers-grid';
import PICard from '@/components/nextui/pi-card';

const TeamPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className="relative flex flex-col">
        <Nav activePage="team" />
        <Header title={'Our Team'} />
        <div className="flex flex-col mx-auto items-center justify-center">
          <div className="max-w-6xl">
            <SkewedTitleBox text="Principle Investigator" />
            <div className="relative md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 lg:px-24 rounded-md shadow-lg shadow-slate-400">
              <PICard name="Ralph Etienne-Cummings" title="Julian S. Smith Professor" slug="john-doe" />
            </div>
            <SkewedTitleBox text="Current Members" />
            <div className="relative md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 md:px-8 rounded-md shadow-lg shadow-slate-400">
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
