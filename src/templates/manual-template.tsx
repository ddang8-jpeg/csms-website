import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Nav from '@/components/nextui/nav';
import Footer from '@/components/daisyui/footer';
import '@/styles/manual-style.css';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

interface Frontmatter {
  slug: string;
  title: string;
  prev: string;
  next: string;
}
interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
}
interface ManualTemplateProps extends PageProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const ManualTemplate: React.FC<ManualTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <NextUIProvider>
      <Nav activePage="teaching" />
      <Header title={frontmatter.title} />
      <div className="flex flex-col md:flex-row mt-2 mb-12 mx-auto max-w-6xl justify-center items-center">
        <div>
          <div className="manual-content">
            <div className="manual-borders" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" as={Link} href={`/teaching/manual-${frontmatter.prev}`}>
              Prev
            </Button>
            <Button size="lg" as={Link} href="/teaching/manual-1">
              Home
            </Button>
            <Button size="lg" as={Link} href={`/teaching/manual-${frontmatter.next}`}>
              Next
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        title
        prev
        next
      }
      html
    }
  }
`;

export default ManualTemplate;
