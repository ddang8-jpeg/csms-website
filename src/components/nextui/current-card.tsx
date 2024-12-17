import * as React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Link } from 'gatsby';
import { useState } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  name: string;
  title: string;
  image: IGatsbyImageData;
  slug: string;
}

const CurrentCard: React.FC<Props> = ({ name, title, image, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link to={`/team/${slug}`}>
      <Card
        className="flex flex-col group py-4 h-full rounded-sm justify-between hover:bg-slate-50 hover:shadow-md"
        shadow="none"
      >
        <CardHeader className="justify-evenly mb-auto">
          <div className="relative overflow-hidden rounded-full border-4 border-white group-hover:border-lightBlue group-hover:drop-shadow-lg shadow-black ">
            <GatsbyImage
              image={image}
              alt="Card background"
              className={`relative opacity-0 shadow-black/5 transition-transform-opacity duration-300 object-cover rounded-full aspect-square 
          ${isLoaded ? 'opacity-100 shadow-none' : ''} 
          group-hover:scale-110`}
              loading="lazy"
              style={{ objectFit: 'cover' }}
              onLoad={handleImageLoad}
            />
          </div>
        </CardHeader>
        <CardBody className="items-center mb-top">
          <p className="font-bold text-center w-fit text-dynamic">{name}</p>
          <hr className="w-[10%] group-hover:w-[80%] ease-in-out duration-200 object-cover h-[2px] my-2 bg-darkBlue border-0 rounded" />
          <p className="font-light uppercase">{title}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CurrentCard;
