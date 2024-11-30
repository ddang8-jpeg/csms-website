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
      <Nav activePage="test" />
      <Hero />
      <div className="flex flex-col justify-center sm:flex-row mt-2 mb-12">
        <div>
          <SkewedTitleBox text="About" />
          <div className="content-borders">
            <div className="max-w-2xl">
              <Content />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col">
          <SkewedTitleBox text="Recent News" />
          <div className="content-filled-bg flex">
            <PostCarousel />
          </div>
          <SkewedTitleBox text="Papers" />
          <div className="content-filled-bg flex">
            <PostCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export default TestPage;

export const Head: HeadFC = () => <title>Test Page</title>;
