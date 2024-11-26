import React from 'react';
import papers from '../content/papers.json'; // Adjust path based on where your JSON is saved

interface Paper {
  title: string;
  subtitle: string;
  doi: string;
}

const PapersGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {papers.map((paper: Paper, index: number) => (
          <a href={paper.doi} key={index}>
            <div className="bg-white  hover:bg-gray-100 p-4 rounded-lg shadow-md h-full">
              <h3 className="font-semibold">{paper.title}</h3>
              <p className="text-sm text-gray-600">{paper.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PapersGrid;
