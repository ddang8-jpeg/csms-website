import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Nav from '@/components/nextui/nav';
import Hero from '@/components/daisyui/hero';
import NewsCarousel from '@/components/daisyui/post-carousel';
import Content from '@/components/content'
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const TestPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className='relative flex flex-col'>
        <div className='flex flex-col'>
          <Nav />
          <Hero />
          <div className='my-3 mx-auto'>
            <NewsCarousel />
          </div>
        </div>
      </div>
      <div className='mb-4 py-4'>
        <Content />
      </div>
      <StaticImage
        src="static/images/hero.jpg"
        alt="CMOS Mihalas-Niebur Model using switch capacitors"
        placeholder="blurred"
      />
      <img src="/images/hero.png" alt="Logo" />
    </NextUIProvider>
  );
};
export default TestPage;
export const Head: HeadFC = () => <title>Test Page</title>;
