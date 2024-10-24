import React from 'react';
import { graphql } from 'gatsby';

const CurrentMemberTemplate = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.name}</h1>
      <h2>{frontmatter.bio}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        name
        bio
      }
      html
    }
  }
`;

export default CurrentMemberTemplate;
