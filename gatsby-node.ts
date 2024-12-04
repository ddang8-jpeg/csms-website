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
  researchRemark: {
    edges: {
      node: MarkdownNode;
    }[];
  };
  manualRemark: {
    edges: {
      node: MarkdownNode;
    }[];
  };
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/lib/utils': path.resolve(__dirname, 'src/lib/utils'),
      },
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Mapping templates to their paths
  const templates = {
    blog: path.resolve('./src/templates/blog-template.tsx'),
    current: path.resolve('./src/templates/current-member-template.tsx'),
    research: path.resolve('./src/templates/research-template.tsx'),
    manual: path.resolve('./src/templates/manual-template.tsx'),
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
        sort: { frontmatter: { id: ASC } }
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
      researchRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/research/" } }
        sort: { frontmatter: { order: ASC } }
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
      manualRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/teaching/manual/" } }
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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { postsRemark, currentRemark, researchRemark, manualRemark } = result.data!;

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

  // Create pages
  createMarkdownPages(postsRemark.edges, 'blog', templates.blog);
  createMarkdownPages(currentRemark.edges, 'team', templates.current);
  createMarkdownPages(researchRemark.edges, 'research', templates.research);
  createMarkdownPages(manualRemark.edges, 'teaching', templates.manual);
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions: { createTypes },
  schema,
}) => {
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
    schema.buildObjectType({
      name: 'BlockText',
      fields: {
        template: { type: 'String!' },
        header: { type: 'String' },
        content: { type: 'String' },
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'BlockImage',
      fields: {
        template: { type: 'String!' },
        src: { type: 'String' },
        caption: { type: 'String' }, // intentionally not defining columnField2
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'BlockGroupImage',
      fields: {
        template: { type: 'String!' },
        srcs: { type: '[String]!' }, // intentionally not defining columnField2
        caption: { type: 'String' }, // intentionally not defining columnField2
      },
      interfaces: ['Node'],
    }),
    schema.buildUnionType({
      name: 'ContentUnion',
      types: ['BlockText', 'BlockImage', 'BlockGroupImage'],
      resolveType(value: { template: string }) {
        if (value.template === 'BlockText') {
          return 'BlockText';
        }
        if (value.template === 'BlockImage') {
          return 'BlockImage';
        }
        if (value.template === 'BlockGroupImage') {
          return 'BlockGroupImage';
        }

        throw new Error('No template defined');
      },
    }),
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        blocks: {
          type: ['ContentUnion'],
        },
      },
    }),
  ];
  createTypes(typeDefs);
};
