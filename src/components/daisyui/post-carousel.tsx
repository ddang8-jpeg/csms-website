import * as React from 'react';
import PostsCard from '@/components/nextui/posts-card';
import { graphql, useStaticQuery } from 'gatsby';

interface Frontmatter {
  title: string;
  date: string;
  slug: string;
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
  }
}

const PostsCarousel: React.FC = () => {
  // Use the GraphQL query to get data
  const data: GraphQLQueryResult = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/posts/"}}
        sort: { frontmatter: { date: DESC } }
        limit: 10
        ) {
        edges {
          node {
            frontmatter {
              title
              date
              slug
            }
            html
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    html: node.html,
    slug: node.frontmatter.slug,
  }));

  return (
    <div color="primary" className="carousel carousel-center rounded-box max-w-full space-x-4 py-10">
      <div className='carousel-item w-2/12'></div>
      {posts.map((post) => (
        <div className='carousel-item'>
          <PostsCard title={post.title} date={post.date} post={post.html} slug={post.slug} />
        </div>
      ))}
      <div className='carousel-item w-2/12'></div>
    </div>
  );
};

export default PostsCarousel;