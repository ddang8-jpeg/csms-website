import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CSMS Website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CSMS Website',
        start_url: '/',
        icon: 'src/content/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, "src"),
        static: path.join(__dirname, "static"),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/content/images',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content',
      },
      __key: 'content',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/content/posts',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'current',
        path: './src/content/members/current',
      },
      __key: 'current',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'past',
        path: './src/content/members/past',
      },
      __key: 'past',
    },
    `gatsby-transformer-remark`,
  ],
};

export default config;
