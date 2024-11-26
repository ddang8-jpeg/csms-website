import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Footer from '@/components/daisyui/footer';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import PapersGrid from '@/components/papers-grid';

const PapersPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className="relative flex flex-col">
        <Nav activePage="papers" />
        <Header title={'Papers'} />
        <div className="flex flex-col justify-center sm:flex-row mt-2 mb-12">
          <div className="relative md:mx-8 bg-lightBlue-300 py-10 px-2 md:px-6 rounded-md md:shadow-lg shadow-slate-400">
            <div className="flex flex-col max-w-2xl"></div>
            <PapersGrid />
          </div>
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export default PapersPage;

export const Head: HeadFC = () => <title>Papers - CSMS at JHU</title>;
