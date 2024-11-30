import * as React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Link } from 'gatsby';

interface Props {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

const PostCarouselCard: React.FC<Props> = ({ title, date, subtitle, slug }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card
        className="m-2 max-h-[400px] hover:bg-gray-50 shadow-none hover:shadow-md transition-shadow duration-300"
        shadow="none"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">The News</p>
          <small className="text-default-500">{date}</small>
          <h4 className="font-bold text-large">{title}</h4>
          <hr className="w-[80%] h-[2px] my-2 bg-darkBlue border-0 rounded" />
        </CardHeader>
        <CardBody className="py-2">
          <p>{subtitle}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PostCarouselCard;
