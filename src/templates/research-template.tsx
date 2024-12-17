import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { NextUIProvider } from '@nextui-org/system';
import Header from '@/components/daisyui/header';
import Nav from '@/components/nextui/nav';
import SkewedTitleBox from '@/components/skewed-title-box';
import Footer from '@/components/daisyui/footer';
import papersJson from '../content/papers.json';
import slugify from 'slugify';

// --- Interfaces ---
interface Frontmatter {
  title: string;
  header: string;
  team: string[];
  publications: string[];
  subtitle: string;
}

interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
}

interface ResearchTemplateProps extends PageProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

// --- Helper Functions ---
const findDOI = (title: string): string => {
  const paper = papersJson.find((entry) => entry.title.toLowerCase() === title.toLowerCase());
  return paper?.doi || '';
};

const TeamList: React.FC<{ team: string[] }> = ({ team }) => (
  <ul className="list-none">
    {team.map((member) => (
      <li key={member} className="button-lightBlue">
        <Link to={`/team/${slugify(member.toLowerCase())}`}>{member}</Link>
      </li>
    ))}
  </ul>
);

const PublicationList: React.FC<{ publications: string[] }> = ({ publications }) => (
  <ol className="list-none">
    {publications.map((title) => (
      <li key={title} className="button-lightBlue">
        <a href={findDOI(title)} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ol>
);

// --- Main Component ---
const ResearchTemplate: React.FC<ResearchTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  if (!frontmatter) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading research page...</p>
      </div>
    );
  }

  return (
    <NextUIProvider>
      <Nav activePage="research" />
      <Header title={frontmatter.title} />

      <main className="flex flex-col justify-center lg:flex-row mt-2 mb-12 px-4">
        {/* Left Section: Team and Publications */}
        <section className="lg:max-w-[400px]">
          <SkewedTitleBox text="Team Member(s)" />
          <div className="content-titled-borders">
            <TeamList team={frontmatter.team} />
          </div>

          <SkewedTitleBox text="Publications" />
          <div className="content-titled-borders">
            <PublicationList publications={frontmatter.publications} />
          </div>
        </section>

        {/* Right Section: Research Content */}
        <section className="max-w-3xl">
          <SkewedTitleBox text={frontmatter.header} />
          <div className="content-titled-borders manual-content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </main>

      <Footer />
    </NextUIProvider>
  );
};

// --- GraphQL Query ---
export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        header
        team
        publications
        subtitle
      }
      html
    }
  }
`;

export default ResearchTemplate;
