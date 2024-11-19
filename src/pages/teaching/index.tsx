import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Content from '@/components/content';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const TeachingPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <Nav activePage="teaching" />
      <Content />
    </NextUIProvider>
  );
};
export default TeachingPage;
export const Head: HeadFC = () => <title>Teaching - CSMS at JHU</title>;
