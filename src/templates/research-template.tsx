import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Nav from '@/components/nextui/nav';
import SkewedTitleBox from '@/components/skewed-title-box';
import Footer from '@/components/daisyui/footer';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

// Define interfaces for blockss
interface BlockText {
  template: 'BlockText';
  header: string;
  content: string;
}

interface BlockImage {
  template: 'BlockImage';
  caption: string;
  src: IGatsbyImageData;
}

interface BlockGroupImage {
  template: 'BlockGroupImage';
  caption: string;
  srcs: string[]; // Pluralized to match query structure
}

type blocks = BlockText | BlockImage | BlockGroupImage;

interface Frontmatter {
  title: string;
  team: string[];
  publications: string[];
  subtitle: string;
  blocks: blocks[]; // Array of blockss
}

interface MarkdownRemark {
  frontmatter: Frontmatter;
}

interface ResearchTemplateProps extends PageProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const ResearchTemplate: React.FC<ResearchTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  if (!frontmatter) {
    return <div>Loading...</div>; // or any fallback you prefer
  }

  return (
    <NextUIProvider>
      <Nav activePage="research" />
      <Header title={frontmatter.title} />
      <div className="flex flex-col md:flex-row mt-2 mb-12 mx-auto max-w-6xl">
        <div>
          <SkewedTitleBox text="Team Members(s)" />
          <div className="content-borders">
            <ul className="list-none">
              {frontmatter.team.map((item, key) => (
                <li className="button-lightBlue" key={key}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <SkewedTitleBox text="Publications" />
          <div className="content-borders">
            <ol className="list-none">
              {frontmatter.publications.map((item, key) => (
                <li className="button-lightBlue" key={key}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full">
          {/* Map through the blockss safely */}
          {frontmatter.blocks &&
            frontmatter.blocks.map((blocks, index) => (
              <div key={index} className="mb-8">
                {/* Render BlockText */}
                {blocks.template === 'BlockText' && (
                  <div>
                    <SkewedTitleBox text={blocks.header} />
                    <div className="content-borders">
                      <p className="text-body">{blocks.content}</p>
                    </div>
                  </div>
                )}

                {/* Render BlockImage */}
                {blocks.template === 'BlockImage' && (
                  <div className="image-block content-filled-bg">
                    <GatsbyImage image={getImage(blocks.src)!} alt={blocks.caption} />{' '}
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      {blocks.caption}
                    </figcaption>
                  </div>
                )}

                {/* Render BlockGroupImage */}
                {blocks.template === 'BlockGroupImage' && (
                  <div className="my-4">
                    <div className="image-group">
                      <p>{blocks.caption}</p>
                      {blocks.srcs.map((src, idx) => (
                        <img key={idx} src={src} alt={`Project visual ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
};

// GraphQL query
export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        team
        publications
        subtitle
        blocks {
          template
          caption
          header
          content
          srcs
          src {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

export default ResearchTemplate;
