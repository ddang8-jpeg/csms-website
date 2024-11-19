import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Content from '@/components/content';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const ResearchPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <Nav activePage="research" />
      <Content />
    </NextUIProvider>
  );
};
export default ResearchPage;
export const Head: HeadFC = () => <title>Reseach - CSMS at JHU</title>;
