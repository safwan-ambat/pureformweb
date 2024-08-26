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
  textSize = 'text-base',
  textColor = 'text-white',
  className = '',
}) => {
  return (
    <button
      className={` ${textSize} ${textColor} py-[20px] px-[20px] rounded-full hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;