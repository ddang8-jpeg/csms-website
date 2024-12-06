import * as React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';

interface Props {
  title: string;
  subtitle: string;
  doi: string;
}

const PapersCarouselCard: React.FC<Props> = ({ title, subtitle, doi }) => {
  return (
    <a href={doi} className="my-2 w-full group">
      <Card className="hover:bg-gray-50 shadow-none hover:shadow-md transition-shadow duration-300" shadow="none">
        <CardHeader className="py-2 px-4">
          <h4 className="font-bold">{title}</h4>
        </CardHeader>
        <div className="mx-auto border-b-2 border-darkBlue w-[80%]"></div>
        <CardBody className="py-2">
          <p>{subtitle}</p>
        </CardBody>
      </Card>
    </a>
  );
};

export default PapersCarouselCard;
