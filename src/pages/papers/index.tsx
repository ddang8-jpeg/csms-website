import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Content from '@/components/content';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const PapersPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <Nav activePage="papers" />
      <Content />
    </NextUIProvider>
  );
};
export default PapersPage;
export const Head: HeadFC = () => <title>Published Paper - CSMS at JHU</title>;
