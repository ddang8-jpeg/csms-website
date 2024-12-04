import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ImageNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  relativePath: string;
}

interface GraphQLQueryResult {
  allFile: {
    edges: {
      node: ImageNode;
    }[];
  };
}

const ImageCarousel: React.FC = () => {
  const data: GraphQLQueryResult = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "slider" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 280, layout: CONSTRAINED, formats: [AUTO, WEBP], placeholder: BLURRED)
            }
            relativePath
          }
        }
      }
    }
  `);

  const images =
    data?.allFile?.edges?.map(({ node }) => ({
      image: node.childImageSharp.gatsbyImageData,
      alt: node.relativePath,
    })) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const changeSlide = (newIndex: number) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setFade(true); // Trigger the fade out

    setTimeout(() => {
      setCurrentIndex(newIndex); // Update the index
      setFade(false); // Trigger the fade in
      setIsNavigating(false);
    }, 300); // Delay for the fade effect duration
  };

  const navigateSlide = (direction: 'next' | 'prev') => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % images.length
        : currentIndex === 0
          ? images.length - 1
          : currentIndex - 1;

    changeSlide(newIndex); // Call the shared changeSlide function
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') navigateSlide('next');
      if (event.key === 'ArrowLeft') navigateSlide('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNavigating]);

  if (!images.length) {
    return <p>No images found for the carousel.</p>;
  }

  return (
    <div className="carousel-container w-full relative my-6">
      <div className="carousel-slide max-w-full aspect-w-16 aspect-h-9">
        <GatsbyImage
          image={images[currentIndex].image}
          alt={images[currentIndex].alt}
          className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'} rounded-lg`}
        />
      </div>
      <button
        onClick={() => navigateSlide('prev')}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-60 bg-gray-300 text-white px-4 py-2 z-20"
      >
        ❮
      </button>
      <button
        onClick={() => navigateSlide('next')}
        aria-label="Next Slide"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-60 bg-gray-300 text-white px-4 py-2 z-20"
      >
        ❯
      </button>
      <div className="carousel-dots flex justify-center space-x-2 mt-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-darkBlue' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
