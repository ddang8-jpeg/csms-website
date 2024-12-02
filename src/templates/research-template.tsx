import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Nav from '@/components/nextui/nav';
import SkewedTitleBox from '@/components/skewed-title-box';
import Footer from '@/components/daisyui/footer';
import papersJson from '../content/papers.json';

interface BlockText {
  template: 'BlockText';
  header: string;
  content: string;
}

interface BlockImage {
  template: 'BlockImage';
  caption: string;
  src: string;
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

const slugify = (a: string): string => {
  return a.toLowerCase().trim().replace(' ', '-');
};

const papersMap = new Map(papersJson.map((pub) => [pub.title, pub.doi]));
const findDOI = (title: string): string => {
  return papersMap.get(title) || ''; // Use `get` for maps
};

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
                <Link key={key} to={`/team/current/` + slugify(item)}>
                  <li className="button-lightBlue" key={key}>
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <SkewedTitleBox text="Publications" />
          <div className="content-borders ">
            <ol className="list-none">
              {frontmatter.publications.map((item, key) => (
                <a href={findDOI(item)} key={key}>
                  <li className="button-lightBlue" key={key}>
                    {item}
                  </li>
                </a>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full">
          {/* Map through the blockss safely */}
          {frontmatter.blocks &&
            frontmatter.blocks.map((blocks, index) => (
              <div key={index} className="">
                {/* Render BlockText */}
                {blocks.template === 'BlockText' && (
                  <div>
                    <SkewedTitleBox text={blocks.header} />
                    <div className="content-borders">
                      {blocks.content.split('\n').map((line, index) => (
                        <p className="text-body" key={index}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Render BlockImage */}
                {blocks.template === 'BlockImage' && (
                  <div className="image-block">
                    <img className="bg-white rounded-md p-2" src={blocks.src} alt={blocks.caption} />{' '}
                    <figcaption className="fig-caption">{blocks.caption}</figcaption>
                  </div>
                )}

                {/* Render BlockGroupImage */}
                {blocks.template === 'BlockGroupImage' && (
                  <div className="my-4">
                    <div className="image-block">
                      <div className="image-group-block">
                        {blocks.srcs.map((src, idx) => (
                          <img className="image-group" key={idx} src={src} alt={`Project visual ${idx + 1}`} />
                        ))}
                      </div>
                      <figcaption className="fig-caption">{blocks.caption}</figcaption>
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
          ... on BlockText {
            template
            header
            content
          }
          ... on BlockImage {
            template
            caption
            src
          }
          ... on BlockGroupImage {
            srcs
            caption
            template
          }
        }
      }
    }
  }
`;

export default ResearchTemplate;
