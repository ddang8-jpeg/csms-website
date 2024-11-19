import * as React from 'react';
import { Card, CardHeader } from '@nextui-org/card';
import { Link } from 'gatsby';
import { useState } from 'react';

interface Props {
  name: string;
  title: string;
  slug: string;
}

const PICard: React.FC<Props> = ({ name, title, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link to={`/team/current/${slug}`}>
      <Card className="group py-6 px-6" shadow="none" isHoverable>
        <CardHeader className="flex flex-col md:flex-row">
          <div className="relative shadow-black/5 shadow-none rounded-large">
            <div className="relative z-10 max-h-[400px] w-auto group">
              <img
                src="https://nextui.org/images/hero-card-complete.jpeg"
                alt="Card background"
                className={`opacity-0 shadow-black/5 transition-transform-opacity duration-300 object-cover rounded-full aspect-square 
          ${isLoaded ? 'opacity-100 shadow-none' : ''} 
          group-hover:scale-110`}
                loading="lazy"
                width={400}
                height={400}
                style={{ objectFit: 'cover' }}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
          <div className="flex flex-col mx-6 px-6 mt-10 md:mt-0 w-full justify-center">
            <p className="font-bold text-4xl">{name}</p>
            <hr className="h-[2px] my-2 bg-darkBlue border-0 rounded" />
            <p className="text-xl uppercase font-light">{title}</p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PICard;
