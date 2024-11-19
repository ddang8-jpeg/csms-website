import * as React from 'react';
import SkewedTitleBox from '@/components/skewed-title-box';
import Nav from '@/components/nextui/nav';
import Hero from '@/components/daisyui/hero';
import Footer from '@/components/daisyui/footer';
import PostCarousel from '@/components/daisyui/post-carousel';
import Content from '@/components/content';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const TestPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className="relative flex flex-col">
        <Nav activePage="test" />
        <Hero />
        <div className="flex flex-col justify-center sm:flex-row mt-2 mb-12">
          <div>
            <SkewedTitleBox text="About" />
            <div className="relative md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 md:px-6 rounded-md md:shadow-lg shadow-slate-400">
              <div className="flex flex-col max-w-2xl">
                <Content />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col ">
            <SkewedTitleBox text="Recent News" />
            <div className="flex relative items-center md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 md:px-6 rounded-md md:shadow-lg shadow-slate-400">
              <PostCarousel />
            </div>
            <SkewedTitleBox text="Papers" />
            <div className="flex relative items-center md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 md:px-6 rounded-md md:shadow-lg shadow-slate-400">
              <PostCarousel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export default TestPage;

export const Head: HeadFC = () => <title>Test Page</title>;
