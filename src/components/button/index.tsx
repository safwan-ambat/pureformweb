import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  textSize?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
}) => {
  return (
    <button
      className={` py-[20px] px-[20px] rounded-full hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8E8E8] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;