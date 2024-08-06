// src/components/Styled.tsx

import React from 'react';

interface StyledProps {
  children: React.ReactNode;
  className?: string;
}

const Styled: React.FC<StyledProps> = ({ children, className = '' }) => (
  <span className={`inline-block StyledWord  text-[12px] text-white my-[5px] py-[2px] px-[8px] ${className}`}>
    {children}
  </span>
);

export default Styled;