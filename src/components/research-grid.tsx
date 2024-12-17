import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SkewedTitleBox from '@/components/skewed-title-box';
import ResearchCard from './nextui/research-card';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Frontmatter {
  order: number;
  current: boolean;
  slug: string;
  title: string;
  subtitle: string;
  image?: ImageNode;
}

interface ImageNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface MarkdownRemarkNode {
  frontmatter: Frontmatter;
  html: string;
}

interface GraphQLQueryResult {
  allMarkdownRemark: {
    edges: {
      node: MarkdownRemarkNode;
    }[];
  };
}

const ResearchGrid: React.FC = () => {
  const data: GraphQLQueryResult = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/research/" } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              order
              current
              slug
              title
              subtitle
              image {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const research = data.allMarkdownRemark.edges.map(({ node }) => ({
    order: node.frontmatter.order,
    current: node.frontmatter.current,
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
    subtitle: node.frontmatter.subtitle,
    image: node.frontmatter.image ? node.frontmatter.image.childImageSharp.gatsbyImageData : null,
    html: node.html,
  }));

  const currentResearch = research.filter((item) => item.current === true);
  const pastResearch = research.filter((item) => item.current === false);

  return (
    <div className="my-4 relative max-w-6xl">
      <div className="mb-10">
        {/* Year Header */}
        <SkewedTitleBox text="Current" />

        {/* items for the Year */}
        <div className="content-filled-bg">
          <div color="primary" className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {currentResearch.map((item, index) =>
              item.image ? (
                <ResearchCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  slug={item.slug}
                />
              ) : (
                <ResearchCard key={index} title={item.title} subtitle={item.subtitle} slug={item.slug} />
              ),
            )}
          </div>
        </div>
      </div>
      <div className="mb-10">
        {/* Year Header */}
        <SkewedTitleBox text="Past" />

        {/* items for the Year */}
        <div className="content-filled-bg">
          <div color="primary" className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {pastResearch.map((item, index) =>
              item.image ? (
                <ResearchCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  slug={item.slug}
                />
              ) : (
                <ResearchCard key={index} title={item.title} subtitle={item.subtitle} slug={item.slug} />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchGrid;
