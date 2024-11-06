import * as React from 'react';
import { Button as NextButton } from '@nextui-org/button';


const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-full"
      style={{
        backgroundImage: `url(/static/images/hero.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-5xl my-10">
          <h1 className="max-w-lg min-w-32 mb-10 text-5xl text-white text-left">Computational Sensory-Motor Systems Laboratory
          </h1>
          <p className="mb-5 text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <NextButton size='lg' className= 'bg-darkBlue text-white'>Our Story</NextButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
