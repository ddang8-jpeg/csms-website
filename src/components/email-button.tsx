import React from 'react';

interface EmailButtonProps {
  email: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email }) => {
  // Generate the mailto link
  const mailtoLink = `mailto:${email}`;

  // Handle button click
  const handleClick = () => {
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <p className="text-center mx-auto border-b-2 border-darkBlue w-12">Email</p>
      <button onClick={handleClick} className="button-lightBlue">
        {email}
      </button>
    </div>
  );
};

export default EmailButton;
