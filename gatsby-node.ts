import { GatsbyNode } from 'gatsby';
import * as path from 'path';

// Define GraphQL query result types
interface MarkdownNode {
  id: string;
  frontmatter: {
    slug: string;
  };
}

interface QueryResult {
  postsRemark: {
    edges: {
      node: MarkdownNode;
    }[];
  };
  currentRemark: {
    edges: {
      node: MarkdownNode;
    }[];
  };
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  })
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Mapping templates to their paths
  const templates = {
    blog: path.resolve('./src/templates/blog-template.tsx'),
    current: path.resolve('./src/templates/current-member-template.tsx'),
  };

  // Use GraphQL with the correct type
  const result = await graphql<QueryResult>(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      currentRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/members/current/" } }
        limit: 2000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { postsRemark, currentRemark } = result.data!;

  // Helper function to create pages
  const createMarkdownPages = (edges: { node: MarkdownNode }[], pathPrefix: string, template: string) => {
    edges.forEach(({ node }) => {
      createPage({
        path: `/${pathPrefix}/${node.frontmatter.slug}`,
        component: template,
        context: { id: node.id },
      });
    });
  };

  // Create pages for both blog posts and current members
  createMarkdownPages(postsRemark.edges, 'blog', templates.blog);
  createMarkdownPages(currentRemark.edges, 'team/current', templates.current);
};