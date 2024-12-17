import React from 'react';

interface EmailButtonProps {
  links: string[];
}

const LinkButtons: React.FC<EmailButtonProps> = ({ links }) => {
  // Handle button click
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div>
      <p className="text-center mx-auto border-b-2 border-darkBlue w-12">Links</p>
      {links.map((link: string, index: number) => (
        <button key={index} onClick={() => handleClick(link)} className="button-lightBlue">
          {link}
        </button>
      ))}
    </div>
  );
};

export default LinkButtons;
