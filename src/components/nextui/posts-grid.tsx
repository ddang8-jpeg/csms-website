import * as React from 'react';
import PostsCard from '@/components/nextui/posts-card';
import { graphql, useStaticQuery } from 'gatsby';
import SkewedTitleBox from '@/components/skewed-title-box';

interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  subtitle: string;
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
              subtitle
            }
          }
        }
      }
    }
  `);

  // Normalize the date and extract the year correctly
  const posts = data.allMarkdownRemark.edges.map(({ node }) => {
    const date = new Date(node.frontmatter.date);
    // Normalize date to UTC midnight (stripping off time zone effects)
    const normalizedYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1)); // Use January 1st, the normalized date

    return {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      subtitle: node.frontmatter.subtitle,
      year: normalizedYear.getUTCFullYear(), // Use UTC year to avoid time zone issues
      slug: node.frontmatter.slug,
    };
  });

  // Group posts by year
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const year = post.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {} as Record<number, typeof posts>,
  );

  // Sort grouped posts by year in descending order
  const sortedGroupedPosts = Object.entries(groupedPosts)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Sort by year descending
    .map(([year, yearPosts]) => ({
      year,
      posts: yearPosts,
    }));

  return (
    <div className="my-4 relative max-w-6xl">
      {sortedGroupedPosts.map(({ year, posts }) => (
        <div key={year} className="mb-10">
          {/* Year Header */}
          <SkewedTitleBox text={year.toString()} />

          {/* Posts for the Year */}
          <div className="relative md:mx-8 mt-4 bottom-8 bg-lightBlue-300 py-10 px-2 lg:px-12 rounded-md shadow-lg shadow-slate-400">
            <div color="primary" className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {posts.map((post, index) => (
                <PostsCard key={index} title={post.title} date={post.date} subtitle={post.subtitle} slug={post.slug} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
