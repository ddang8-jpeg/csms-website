import * as React from 'react';
import Nav from '@/components/nextui/nav';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import ResearchGrid from '@/components/research-grid';
import Header from '@/components/daisyui/header';

const ResearchPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className="flex flex-col w-full mx-auto">
        <Nav activePage="research" />
        <Header title={'Research'} />
        <div className="relative max-w-6xl w-full mx-auto mt-4 mb-12">
          <ResearchGrid />
        </div>
      </div>
    </NextUIProvider>
  );
};
export default ResearchPage;
export const Head: HeadFC = () => <title>Reseach - CSMS at JHU</title>;
