import * as React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Link } from 'gatsby';

interface Props {
  // Define your component's props here
  title: string;
  date: string;
  post: string;
  slug: string;
}

const NewsCard: React.FC<Props> = ({ title, date, post, slug }) => {
  return (
    <Link to={`/blog/${slug}`}>
    <Card className="py-4 max-w-[400px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">The News</p>
        <small className="text-default-500">{date}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2" dangerouslySetInnerHTML={{ __html: post }} />
    </Card>
    </Link>
  );
};

export default NewsCard;