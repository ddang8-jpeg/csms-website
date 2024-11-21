import * as React from 'react';
import PostsCard from '@/components/nextui/post-card';
import { graphql, useStaticQuery } from 'gatsby';
import SkewedTitleBox from '@/components/skewed-title-box';

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
  };
}

const PostsGrid: React.FC = () => {
  const data: GraphQLQueryResult = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
        sort: { frontmatter: { date: DESC } }
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
    year: new Date(node.frontmatter.date).getFullYear().toString(),
    html: node.html,
    slug: node.frontmatter.slug,
  }));

  // Group posts by year
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const year = post.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {} as Record<string, typeof posts>,
  );

  return (
    <div className="my-4 relative max-w-6xl">
      {Object.entries(groupedPosts)
        .slice()
        .reverse()
        .map(([year, yearPosts]) => (
          <div key={year} className="mb-10">
            {/* Year Header */}
            <SkewedTitleBox text={year} />

            {/* Posts for the Year */}
            <div className="relative md:mx-8 mt-4 bottom-8 bg-lightBlue-300 py-10 px-2 lg:px-12 rounded-md shadow-lg shadow-slate-400">
              <div color="primary" className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                {yearPosts.map((post, index) => (
                  <PostsCard key={index} title={post.title} date={post.date} post={post.html} slug={post.slug} />
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostsGrid;
