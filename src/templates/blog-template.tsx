import React from 'react';
import { graphql } from 'gatsby';

const BlogTemplate = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <h2>{frontmatter.post}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        post
      }
      html
    }
  }
`;

export default BlogTemplate;
