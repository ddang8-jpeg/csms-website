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
            <div className="relative md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 md:px-6 rounded-md md:shadow-lg shadow-slate-400">
              <div className="flex flex-col max-w-2xl">
                <div
                  className="w-fit relative overflow-hidden font-semibold text-xl mb-4"
                  style={{
                    borderStyle: 'solid',
                    borderBottom: '2px',
                    borderColor: 'var(--color-dark-blue)',
                  }}
                >
                  {frontmatter.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
          <div>
            <SkewedTitleBox text="Recent News" />
            <div className="flex relative items-center md:mx-8 bottom-8 bg-lightBlue-300 py-10 px-2 md:px-6 rounded-md md:shadow-lg shadow-slate-400">
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
