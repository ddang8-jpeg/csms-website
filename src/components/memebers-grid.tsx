import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CurrentCard from '@/components/nextui/current-card';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Frontmatter {
  name: string;
  title: string;
  slug: string;
  image: ImageNode;
}

interface MarkdownRemarkNode {
  frontmatter: Frontmatter;
}
interface ImageNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
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
              image {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
    }
  `);

  const members = data.allMarkdownRemark.edges.map(({ node }) => ({
    name: node.frontmatter.name,
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
    image: node.frontmatter.image.childImageSharp.gatsbyImageData,
  }));

  return (
    <div color="primary" className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
      {members.map((member, index) => (
        <div key={index}>
          <CurrentCard
            name={member.name}
            title={member.title}
            image={member.image} // Ensure image is null if missing
            slug={member.slug}
          />
        </div>
      ))}
    </div>
  );
};

export default MembersGrid;
