import React, { useState, useRef, useEffect } from 'react';

interface SkewedTitleBoxProps {
  text: string;
  delay?: string;
  textColor?: string;
}

const SkewedTitleBox: React.FC<SkewedTitleBoxProps> = ({ text, delay = '0.1s', textColor = 'text-white' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div className="-ml-5 my-2 py-2 px-4 mx-auto relative z-10">
      <div
        ref={boxRef}
        className={`before:block before:absolute before:-inset-1 before:-skew-x-12 before:bg-darkBlue relative py-2 px-8`}
        style={{
          transform: isVisible ? 'translateX(0%)' : 'translateX(10%)',
          maxWidth: 'calc(100vw - 20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 1s ease-out, opacity 1s ease-out',
          transitionDelay: delay,
          display: 'inline-block',
        }}
      >
        <span className={`relative text-3xl font-mono ${textColor}`} style={{ whiteSpace: 'nowrap' }}>
          {text}
        </span>
        <hr className="relative h-[1px] bg-white rounded border-0 mt-2" />
      </div>
    </div>
  );
};

export default SkewedTitleBox;
