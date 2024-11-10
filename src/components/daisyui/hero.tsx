import * as React from 'react';
import { Button as NextButton } from '@nextui-org/button';


const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-full"
      style={{
        backgroundImage: `url(/images/landing/hero.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="ml-10 my-12 w-full justify-start hero-content text-neutral-content text-center">
          <h1 className="max-w-lg min-w-32 mb-10 text-5xl  text-white text-left">
            <p className='font-mono'>Computational Sensory-Motor Systems</p> 
            <p className='font-thin text-3xl'>Laboratory</p>
          </h1>
      </div>
    </div>
  );
};

export default Hero;
