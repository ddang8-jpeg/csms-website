import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Nav from '@/components/nextui/nav';
import Footer from '@/components/daisyui/footer';
import SkewedTitleBox from '@/components/skewed-title-box';

interface Frontmatter {
  slug: string;
  name: string;
  bio: string;
  github: string;
}
interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
}
interface CurrentMemberTemplateProps extends PageProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const CurrentMemberTemplate: React.FC<CurrentMemberTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <NextUIProvider>
      <Nav activePage="research" />
      <Header title={frontmatter.name} />
      <div className="flex flex-col md:flex-row mt-2 mb-12 mx-auto max-w-6xl">
        <div>
          <SkewedTitleBox text={frontmatter.name} />
          <div className="content-borders flex justify-center">
            <img
              src="https://nextui.org/images/hero-card-complete.jpeg"
              alt="Card background"
              className={`relative shadow-black/5 object-cover rounded-full aspect-square`}
              loading="lazy"
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <SkewedTitleBox text="Contact" />
          <div className="content-borders ">
            <a href={frontmatter.github}>
              <p className="button-lightBlue">github</p>
            </a>
          </div>
        </div>
        <div className="w-full">
          <div>
            <SkewedTitleBox text="Bio" />
            <div className="content-borders" dangerouslySetInnerHTML={{ __html: html }} />
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
        name
        bio
        github
      }
      html
    }
  }
`;

export default CurrentMemberTemplate;
