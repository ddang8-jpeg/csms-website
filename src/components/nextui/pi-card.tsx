import * as React from 'react';
import { Card, CardHeader } from '@nextui-org/card';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface Props {
  name: string;
  title: string;
  slug: string;
}

const PICard: React.FC<Props> = ({ name, title, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team/ralph-etienne-cummings.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400, placeholder: BLURRED)
        }
      }
    }
  `);
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link to={`/team/${slug}`}>
      <Card className="group py-6 px-6 hover:bg-gray-50 hover:shadow-md" shadow="none">
        <CardHeader className="flex flex-col md:flex-row">
          <div className="relative shadow-black/5 shadow-none rounded-large">
            <div className="relative z-10 max-h-[400px] w-auto group">
              {image && (
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
              )}
            </div>
          </div>
          <div className="flex flex-col mx-6 px-6 mt-10 md:mt-0 w-full justify-center">
            <p className="font-bold text-4xl">{name}</p>
            <hr className="h-[2px] my-2 bg-darkBlue border-0 rounded w-[0%] group-hover:w-[100%] ease-in-out duration-200" />
            <p className="text-xl uppercase font-light">{title}</p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PICard;
