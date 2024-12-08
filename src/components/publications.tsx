import * as React from 'react';
import papers from '../content/papers.json';

interface Props {
  // Define your component's props here
  publications: string[];
}
interface Paper {
  title: string;
  subtitle: string;
  doi: string;
}

const Publications: React.FC<Props> = ({ publications }) => {
  const publicationsTrimmed = publications.map((i) => i.toLowerCase().trim());

  return (
    <div>
      {papers
        .filter((papers) => publicationsTrimmed.includes(papers.title.toLowerCase().trim()))
        .map((paper: Paper, index: number) => (
          <a href={paper.doi} key={index}>
            <div className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow-md h-full mb-2">
              <h3 className="font-semibold">{paper.title}</h3>
              <p className="text-sm text-gray-600">{paper.subtitle}</p>
            </div>
          </a>
        ))}
    </div>
  );
};

export default Publications;
