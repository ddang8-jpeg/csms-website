import * as React from 'react';
import PapersCarouselCard from '../nextui/papers-carousel-card';
import papers from '../../content/papers.json';

interface Paper {
  title: string;
  subtitle: string;
  doi: string;
}

const PapersCarousel: React.FC = () => {
  return (
    <div color="primary" className="relative carousel carousel-vertical max-h-[600px] max-w-sm mx-auto items-center">
      {papers.map((paper: Paper, index: number) => (
        <div key={index} className="carousel-item w-full">
          <PapersCarouselCard title={paper.title} subtitle={paper.subtitle} doi={paper.doi} />
        </div>
      ))}
    </div>
  );
};

export default PapersCarousel;
