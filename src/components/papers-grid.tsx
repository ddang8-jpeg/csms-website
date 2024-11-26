import React, { useState } from 'react';
import papers from '../content/papers.json';

interface Paper {
  title: string;
  subtitle: string;
  doi: string;
}

const PapersGrid: React.FC = () => {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter papers based on the search query
  const filteredPapers = papers.filter(
    (paper: Paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-6xl w-full mx-auto">
      {/* Search Bar */}
      <div className="flex mb-6 w-full min-w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search papers..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPapers.map((paper: Paper, index: number) => (
          <a href={paper.doi} key={index}>
            <div className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow-md h-full">
              <h3 className="font-semibold">{paper.title}</h3>
              <p className="text-sm text-gray-600">{paper.subtitle}</p>
            </div>
          </a>
        ))}
      </div>

      {/* No results message */}
      {filteredPapers.length === 0 && <div className="text-center text-gray-500">No papers match your search.</div>}
    </div>
  );
};

export default PapersGrid;
