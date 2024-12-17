import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Nav from '@/components/nextui/nav';
import Footer from '@/components/daisyui/footer';
import SkewedTitleBox from '@/components/skewed-title-box';
import '@/styles/manual-style.css';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Publications from '@/components/publications';
import EmailButton from '@/components/email-button';
import LinkButtons from '@/components/link-buttons';

interface Frontmatter {
  slug: string;
  name: string;
  bio: string;
  image: ImageNode;
  email?: string;
  links?: string[];
  publications?: string[];
}
interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
}
interface ImageNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}
interface CurrentMemberTemplateProps extends PageProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const CurrentMemberTemplate: React.FC<CurrentMemberTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <NextUIProvider>
      <Nav activePage="team" />
      <Header title={frontmatter.name} />
      <div className="mt-2 mb-12 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row ">
          <div>
            <div className="content-borders border-t-0 flex justify-center">
              <div className="image-container">
                <GatsbyImage
                  image={frontmatter.image.childImageSharp.gatsbyImageData}
                  alt="Card background"
                  className={`opacity-0 shadow-black/5 transition-transform-opacity duration-300 object-cover aspect-square 
          ${isLoaded ? 'opacity-100 shadow-none' : ''} 
          group-hover:scale-110`}
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
            <div className="mx-auto w-5/6 font-light">
              {frontmatter.email && <EmailButton email={frontmatter.email} />}
              {frontmatter.links && <LinkButtons links={frontmatter.links} />}
            </div>
          </div>
          <div className="w-full">
            <div>
              <SkewedTitleBox text="Bio" />
              <div className="manual-content">
                <div className="content-titled-borders" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
        {frontmatter.publications && (
          <div>
            <SkewedTitleBox text="Publications" />
            <div className="content-filled-bg">
              <Publications publications={frontmatter.publications} />
            </div>
          </div>
        )}
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
        links
        email
        publications
        image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      html
    }
  }
`;

export default CurrentMemberTemplate;
