import * as React from 'react';

interface prop {
  title: string;
}

const Header: React.FC<prop> = ({ title }) => {
  return (
    <div
      className="hero min-h-full w-full"
      style={{
        backgroundImage: `url(/images/hero.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="my-8 w-full justify-center hero-content text-neutral-content text-center">
        <h1 className="max-w-lg min-w-32 text-6xl  text-white text-left">
          <p className="font-mono">{title}</p>
        </h1>
      </div>
    </div>
  );
};

export default Header;
