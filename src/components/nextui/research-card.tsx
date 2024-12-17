import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  slug: string;
  title: string;
  subtitle: string;
  image?: IGatsbyImageData;
}

const ResearchCard: React.FC<Props> = ({ title, subtitle, image, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link to={`/research/${slug}`}>
      <Card className="flex flex-row border-none group shadow-md hover:shadow-lg h-full hover:bg-slate-50 overflow-hidden">
        <div className="relative flex overflow-hidden max-w-[200px]">
          {image && (
            <GatsbyImage
              image={image}
              alt="Card background"
              className={`opacity-0 w-full h-auto shadow-black/5 transition-transform-opacity duration-300 object-cover aspect-square 
      ${isLoaded ? 'opacity-100 shadow-none' : ''} 
      group-hover:scale-110`}
              loading="lazy"
              style={{ objectFit: 'cover' }}
              onLoad={handleImageLoad}
            />
          )}
        </div>
        <div>
          <CardHeader className="flex pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{title}</h4>
            <hr className="relative w-11/12 h-[2px] my-2 bg-darkBlue border-0 rounded" />
          </CardHeader>
          <CardBody className="overflow-hidden text-ellipsis py-2 h-full">{subtitle} </CardBody>
        </div>
      </Card>
    </Link>
  );
};

export default ResearchCard;
