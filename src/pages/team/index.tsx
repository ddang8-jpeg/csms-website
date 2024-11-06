import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Content from '@/components/content';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';

const TeamPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <Nav />
      <Content />
    </NextUIProvider>
  );
};
export default TeamPage;
export const Head: HeadFC = () => <title>Team Page</title>;
