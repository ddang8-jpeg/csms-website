import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SkewedTitleBox from '@/components/skewed-title-box';
import ResearchCard from './nextui/research-card';

interface Frontmatter {
  order: number;
  current: number;
  slug: string;
  title: string;
  description: string;
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
              description
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
    description: node.frontmatter.description,
    html: node.html,
  }));

  const currentResearch = research.filter((item) => item.current === 1);
  const pastResearch = research.filter((item) => item.current === 0);

  return (
    <div className="my-4 relative max-w-6xl">
      <div className="mb-10">
        {/* Year Header */}
        <SkewedTitleBox text="Current" />

        {/* items for the Year */}
        <div className="relative md:mx-8 mt-4 bottom-8 bg-lightBlue-300 py-10 px-2 lg:px-12 rounded-md shadow-lg shadow-slate-400">
          <div color="primary" className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {currentResearch.map((item, index) => (
              <ResearchCard key={index} title={item.title} description={item.description} slug={item.slug} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-10">
        {/* Year Header */}
        <SkewedTitleBox text="Past" />

        {/* items for the Year */}
        <div className="relative md:mx-8 mt-4 bottom-8 bg-lightBlue-300 py-10 px-2 lg:px-12 rounded-md shadow-lg shadow-slate-400">
          <div color="primary" className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {pastResearch.map((item, index) => (
              <ResearchCard key={index} title={item.title} description={item.description} slug={item.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchGrid;
