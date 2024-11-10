import React from 'react';

interface SkewedTitleBoxProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

const SkewedTitleBox: React.FC<SkewedTitleBoxProps> = ({ text, bgColor = 'bg-darkBlue', textColor = 'text-white' }) => {
  return (
    <div className={`relative overflow-hidden ${bgColor} skew-x-12 py-2 px-8 mx-3 mt-4 mb-6`}>
      <div className="relative -skew-x-12">
        <p className={`text-4xl font-black font-mono ${textColor}`}>{text}</p>
      </div>
    </div>
  );
};

export default SkewedTitleBox;
