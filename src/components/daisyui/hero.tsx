import * as React from 'react';
const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-full w-full"
      style={{
        backgroundImage: `url(/images/hero.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="pl-28 my-12 w-full justify-start hero-content text-neutral-content text-center">
        <h1 className="max-w-lg min-w-32 mb-10 text-5xl  text-white text-left">
          <p className="font-mono">Computational Sensory-Motor Systems</p>
          <p className="font-thin text-3xl">Laboratory</p>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
