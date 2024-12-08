import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CSMS Website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve(__dirname, 'src/content/posts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'current',
        path: path.resolve(__dirname, 'src/content/members/current'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'past',
        path: path.resolve(__dirname, 'src/content/members/past'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'research',
        path: path.resolve(__dirname, 'src/content/research'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'manual',
        path: path.resolve(__dirname, 'src/content/teaching/manual'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'teaching-images',
        path: path.resolve(__dirname, 'src/content/images/teaching'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'slider',
        path: path.resolve(__dirname, 'src/content/images/team/slider'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CSMS Website',
        start_url: '/',
        icon: path.resolve(__dirname, 'src/content/images/icon.png'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
  ],
};

export default config;
