import * as React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Link } from 'gatsby';
import { useState } from 'react';

interface Props {
  name: string;
  title: string;
  slug: string;
}

const CurrentCard: React.FC<Props> = ({ name, title, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link to={`/team/current/${slug}`}>
      <Card className="group py-6" shadow="none" isHoverable>
        <CardHeader className="py-6">
          <div className="relative shadow-black/5 shadow-none rounded-large">
            <div className="relative overflow-hidden rounded-inherit rounded-full">
              <img
                src="https://nextui.org/images/hero-card-complete.jpeg"
                alt="Card background"
                className={`opacity-0 shadow-black/5 transition-transform-opacity duration-300 object-cover rounded-full aspect-square 
          ${isLoaded ? 'opacity-100 shadow-none' : ''} 
          group-hover:scale-110`}
                loading="lazy"
                width={400} // Ensure space is reserved
                height={400} // Ensure space is reserved
                style={{ objectFit: 'cover' }}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="items-center">
          <p className="font-bold text-center w-fit text-dynamic whitespace-nowrap">{name}</p>
          <hr className="w-[80%] h-[2px] my-2 bg-darkBlue border-0 rounded" />
          <p className="font-light uppercase">{title}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CurrentCard;
