import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Nav from '@/components/nextui/nav';
import Header from '@/components/daisyui/header';
import Footer from '@/components/daisyui/footer';
import SkewedTitleBox from '@/components/skewed-title-box';
import PostCarousel from '@/components/daisyui/post-carousel';

// Define the types for the expected data structure
interface Frontmatter {
  slug: string;
  title: string;
  date: string;
}

interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
}

interface BlogTemplateProps extends PageProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <NextUIProvider>
      <div className="relative flex flex-col items-center justify-center">
        <Nav activePage="news" />
        <Header title={'News'} />
        <div className="flex flex-col justify-center sm:flex-row mt-2 mb-12">
          <div>
            {' '}
            <SkewedTitleBox text={frontmatter.title} />
            <div className="content-borders">
              <div className="flex flex-col max-w-2xl">
                <div className="w-fit relative overflow-hidden font-semibold text-xl mb-4">{frontmatter.date}</div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
          <div>
            <SkewedTitleBox text="Recent News" />
            <div className="content-filled-bg">
              <PostCarousel />
            </div>
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
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`;

export default BlogTemplate;
