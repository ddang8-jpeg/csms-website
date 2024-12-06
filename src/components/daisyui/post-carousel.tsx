import * as React from 'react';
import PostsCard from '@/components/nextui/posts-card';
import { graphql, useStaticQuery } from 'gatsby';

interface Frontmatter {
  title: string;
  date: string;
  subtitle: string;
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

const PostsCarousel: React.FC = () => {
  // Use the GraphQL query to get data
  const data: GraphQLQueryResult = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 10
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              subtitle
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    subtitle: node.frontmatter.subtitle,
    slug: node.frontmatter.slug,
  }));

  return (
    <div color="primary" className="relative carousel carousel-vertical max-h-[600px] max-w-sm mx-auto items-center">
      {posts.map((post, index) => (
        <div key={index} className="carousel-item">
          <PostsCard title={post.title} date={post.date} subtitle={post.subtitle} slug={post.slug} />
        </div>
      ))}
    </div>
  );
};

export default PostsCarousel;
