import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SkewedTitleBox from '@/components/skewed-title-box'
import Nav from '@/components/nextui/nav';
import Hero from '@/components/daisyui/hero';
import NewsCarousel from '@/components/daisyui/post-carousel';
import Content from '@/components/content'
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const TestPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className=' relative flex flex-col'>
        <Nav activePage='test'/>
        <Hero />
        <div className='flex flex-row mx-auto my-2'>
          <div>
            <SkewedTitleBox text="About" />
            <div className='flex flex-col items-center mx-12 max-w-2xl'>
              <Content />
            </div>
          </div>

          <div>
            <SkewedTitleBox text="Recent News" />
            <div className='flex items-center mx-4'>
              <NewsCarousel />
            </div>
            <SkewedTitleBox text="Papers" />
            <div className='flex items-center mx-4'>
              <NewsCarousel />
            </div>
          </div>

        </div>
      </div>
    </NextUIProvider>
  );
};

export default TestPage;

export const Head: HeadFC = () => <title>Test Page</title>;
