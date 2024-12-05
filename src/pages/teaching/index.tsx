import * as React from 'react';
import Nav from '@/components/nextui/nav';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import SkewedTitleBox from '@/components/skewed-title-box';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import Footer from '@/components/daisyui/footer';

const TeachingPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <Nav activePage="teaching" />
      <Header title={'Teaching'} />
      <div className="flex flex-col justify-center sm:flex-row mt-2 mb-12">
        <div className="w-1/2">
          <SkewedTitleBox text="Courses" />
          <div className="content-titled-borders">
            <Button size="lg" href="/teaching/manual-1" as={Link}>
              Intro to VLSI (EN.520.216) Cadence Manual
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};
export default TeachingPage;
export const Head: HeadFC = () => <title>Teaching - CSMS at JHU</title>;
