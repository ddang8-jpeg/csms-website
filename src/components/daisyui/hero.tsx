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
          <div className="font-mono text-3xl">
            <p>
              <span className="text-5xl">C</span>omputational
            </p>
            <p>
              <span className="text-5xl">S</span>ensory
            </p>
            <p>
              <span className="text-5xl">M</span>otor
            </p>
            <p>
              <span className="text-5xl">S</span>ystems
            </p>
          </div>
          <p className="font-thin text-3xl">Laboratory</p>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
