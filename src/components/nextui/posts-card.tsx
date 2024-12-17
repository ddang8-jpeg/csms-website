import * as React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Link } from 'gatsby';

interface Props {
  title: string;
  date: string;
  subtitle?: string;
  slug: string;
}

const PapersCarouselCard: React.FC<Props> = ({ title, date, subtitle, slug }) => {
  return (
    <Link to={`/blog/${slug}`} className="my-2 w-full">
      <Card
        className=" hover:bg-gray-50 shadow-none hover:shadow-md transition-shadow duration-300 h-full"
        shadow="none"
      >
        <CardHeader className="py-2 px-4 flex-col items-start">
          <h4 className="font-bold">{title}</h4>
          <small className="text-default-500">{date}</small>
        </CardHeader>
        {subtitle && (
          <div>
            <div className="mx-auto border-b-2 border-darkBlue w-[95%]"></div>
            <CardBody className="py-2">
              <p>{subtitle}</p>
            </CardBody>
          </div>
        )}
      </Card>
    </Link>
  );
};

export default PapersCarouselCard;
