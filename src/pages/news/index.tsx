import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Content from '@/components/content';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const NewsPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <Nav activePage="news" />
      <Content />
    </NextUIProvider>
  );
};
export default NewsPage;
export const Head: HeadFC = () => <title>News Page - CSMS at JHU</title>;
