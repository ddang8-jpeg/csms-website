import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Link } from 'gatsby';

interface Props {
  title: string;
  date: string;
  post: string;
  slug: string;
}

const PostCard: React.FC<Props> = ({ title, date, post, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link to={`/blog/${slug}`}>
      <Card className="flex flex-row border-none group shadow-md hover:shadow-lg max-h-[200px] hover:bg-slate-50 overflow-hidden">
        <div className="relative overflow-hidden max-w-[200px]">
          <img
            src="https://nextui.org/images/hero-card-complete.jpeg"
            alt="Card background"
            className={`opacity-0 h-full w-auto shadow-black/5 transition-transform-opacity duration-300 object-cover aspect-square 
      ${isLoaded ? 'opacity-100 shadow-none' : ''} 
      group-hover:scale-110`}
            loading="lazy"
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
            onLoad={handleImageLoad}
          />
        </div>
        <div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{title}</h4>
            <small className="text-default-500">{date}</small>
            <hr className="w-[80%] h-[2px] my-2 bg-darkBlue border-0 rounded" />
          </CardHeader>
          <CardBody className="overflow-hidden text-ellipsis py-2" dangerouslySetInnerHTML={{ __html: post }} />
        </div>
      </Card>
    </Link>
  );
};

export default PostCard;
