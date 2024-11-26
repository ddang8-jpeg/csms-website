import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CurrentCard from '@/components/nextui/current-card';
interface Frontmatter {
  name: string;
  title: string;
  slug: string;
}

interface MarkdownRemarkNode {
  frontmatter: Frontmatter;
}

interface GraphQLQueryResult {
  allMarkdownRemark: {
    edges: {
      node: MarkdownRemarkNode;
    }[];
  };
}

const MembersGrid: React.FC = () => {
  // Use the GraphQL query to get data
  const data: GraphQLQueryResult = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/members/current/" } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              name
              title
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    name: node.frontmatter.name,
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
  }));

  return (
    <div color="primary" className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
      {posts.map((post, index) => (
        <div key={index}>
          <CurrentCard title={post.title} name={post.name} slug={post.slug} />
        </div>
      ))}
    </div>
  );
};

export default MembersGrid;
