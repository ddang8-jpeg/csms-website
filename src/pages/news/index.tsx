import * as React from 'react';
import Nav from '@/components/nextui/nav';
import Footer from '@/components/daisyui/footer';
import type { HeadFC, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import PostsGrid from '@/components/nextui/posts-grid';

const PapersPage: React.FC<PageProps> = () => {
  return (
    <NextUIProvider>
      <div className="relative flex flex-col items-center justify-center">
        <Nav activePage="news" />
        <Header title={'News'} />
        <PostsGrid />
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export default PapersPage;

export const Head: HeadFC = () => <title>Papers - CSMS at JHU</title>;
